import { useRef, useState } from "react";
import { createRestaurant } from "../../services/restaurantService";

const AddRestaurantForm = () => {
  const nameRef = useRef();
  const imageRef = useRef();
  const cuisinesRef = useRef();
  const ratingRef = useRef();
  const deliveryRef = useRef();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      const payload = {
        name: nameRef.current.value,
        cloudinaryImageId: imageRef.current.value,
        cuisines: cuisinesRef.current.value
          .split(",")
          .map(c => c.trim()),
        avgRating: ratingRef.current.value
          ? Number(ratingRef.current.value)
          : undefined,
        deliveryTime: Number(deliveryRef.current.value),
      };

      await createRestaurant(payload);

      setMessage("Restaurant added successfully ✅");

      nameRef.current.value = "";
      imageRef.current.value = "";
      cuisinesRef.current.value = "";
      ratingRef.current.value = "";
      deliveryRef.current.value = "";
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to add restaurant"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <h2 className="mb-4 text-lg font-semibold">
        Add Single Restaurant
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input ref={nameRef} placeholder="Restaurant Name" required className="w-full border px-3 py-2 rounded" />
        <input ref={imageRef} placeholder="Cloudinary Image ID" required className="w-full border px-3 py-2 rounded" />
        <input ref={cuisinesRef} placeholder="Cuisines (comma separated)" required className="w-full border px-3 py-2 rounded" />
        <input ref={ratingRef} type="number" step="0.1" min="0" max="5" placeholder="Average Rating (optional)" className="w-full border px-3 py-2 rounded" />
        <input ref={deliveryRef} type="number" min="1" placeholder="Delivery Time (minutes)" required className="w-full border px-3 py-2 rounded" />

        {error && <p className="text-sm text-red-600">{error}</p>}
        {message && <p className="text-sm text-green-600">{message}</p>}

        <button
          disabled={loading}
          className={`w-full py-2 rounded text-white ${
            loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Adding..." : "Add Restaurant"}
        </button>
      </form>
    </div>
  );
};

export default AddRestaurantForm;
