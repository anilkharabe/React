import { useState } from "react";
import { createRestaurant } from "../services/restaurantService";

const AdminRestaurants = () => {
  const [formData, setFormData] = useState({
    name: "",
    cloudinaryImageId: "",
    cuisines: "",
    avgRating: "",
    deliveryTime: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const payload = {
        name: formData.name,
        cloudinaryImageId: formData.cloudinaryImageId,
        cuisines: formData.cuisines.split(",").map(c => c.trim()),
        avgRating: formData.avgRating
          ? Number(formData.avgRating)
          : undefined,
        deliveryTime: Number(formData.deliveryTime),
      };

      await createRestaurant(payload);

      setSuccess("Restaurant added successfully ✅");
      setFormData({
        name: "",
        cloudinaryImageId: "",
        cuisines: "",
        avgRating: "",
        deliveryTime: "",
      });
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to add restaurant"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-semibold">
        Admin – Manage Restaurants
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg space-y-4 rounded-lg bg-white p-6 shadow"
      >
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Restaurant Name"
          required
          className="w-full rounded border px-3 py-2"
        />

        <input
          name="cloudinaryImageId"
          value={formData.cloudinaryImageId}
          onChange={handleChange}
          placeholder="Cloudinary Image ID"
          required
          className="w-full rounded border px-3 py-2"
        />

        <input
          name="cuisines"
          value={formData.cuisines}
          onChange={handleChange}
          placeholder="Cuisines (comma separated)"
          required
          className="w-full rounded border px-3 py-2"
        />

        <input
          name="avgRating"
          type="number"
          step="0.1"
          min="0"
          max="5"
          value={formData.avgRating}
          onChange={handleChange}
          placeholder="Average Rating (optional)"
          className="w-full rounded border px-3 py-2"
        />

        <input
          name="deliveryTime"
          type="number"
          min="1"
          value={formData.deliveryTime}
          onChange={handleChange}
          placeholder="Delivery Time (minutes)"
          required
          className="w-full rounded border px-3 py-2"
        />

        {error && (
          <div className="rounded bg-red-100 px-3 py-2 text-sm text-red-700">
            {error}
          </div>
        )}

        {success && (
          <div className="rounded bg-green-100 px-3 py-2 text-sm text-green-700">
            {success}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full rounded py-2 text-white ${
            loading
              ? "cursor-not-allowed bg-gray-400"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Adding..." : "Add Restaurant"}
        </button>
      </form>
    </div>
  );
};

export default AdminRestaurants;
