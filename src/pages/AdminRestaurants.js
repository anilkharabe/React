import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { createRestaurant } from "../services/restaurantService";

const restaurantSchema = Yup.object({
  name: Yup.string().required("Restaurant name is required"),
  cloudinaryImageId: Yup.string().required("Image ID is required"),
  cuisines: Yup.string().required("Cuisines are required"),
  avgRating: Yup.number().min(0).max(5).nullable(),
  deliveryTime: Yup.number()
    .min(1, "Delivery time must be at least 1 minute")
    .required("Delivery time is required"),
});

const AdminRestaurants = () => {
  console.log("rendering AdminRestaurants (Formik)");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-semibold">
        Admin – Manage Restaurants
      </h1>

      <Formik
        initialValues={{
          name: "",
          cloudinaryImageId: "",
          cuisines: "",
          avgRating: "",
          deliveryTime: "",
        }}
        validationSchema={restaurantSchema}
        onSubmit={async (values, { resetForm }) => {
          setLoading(true);
          setError(null);
          setSuccess(null);

          try {
            const payload = {
              ...values,
              cuisines: values.cuisines
                .split(",")
                .map(c => c.trim()),
              avgRating: values.avgRating
                ? Number(values.avgRating)
                : undefined,
              deliveryTime: Number(values.deliveryTime),
            };

            await createRestaurant(payload);

            setSuccess("Restaurant added successfully ✅");
            resetForm();
          } catch (err) {
            setError(
              err.response?.data?.message ||
                "Failed to add restaurant"
            );
          } finally {
            setLoading(false);
          }
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="max-w-lg space-y-4 rounded-lg bg-white p-6 shadow"
          >
            <input
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Restaurant Name"
              className="w-full rounded border px-3 py-2"
            />
            {touched.name && errors.name && (
              <p className="text-sm text-red-600">{errors.name}</p>
            )}

            <input
              name="cloudinaryImageId"
              value={values.cloudinaryImageId}
              onChange={handleChange}
              placeholder="Cloudinary Image ID"
              className="w-full rounded border px-3 py-2"
            />
            {touched.cloudinaryImageId &&
              errors.cloudinaryImageId && (
                <p className="text-sm text-red-600">
                  {errors.cloudinaryImageId}
                </p>
              )}

            <input
              name="cuisines"
              value={values.cuisines}
              onChange={handleChange}
              placeholder="Cuisines (comma separated)"
              className="w-full rounded border px-3 py-2"
            />
            {touched.cuisines && errors.cuisines && (
              <p className="text-sm text-red-600">
                {errors.cuisines}
              </p>
            )}

            <input
              name="avgRating"
              type="number"
              step="0.1"
              min="0"
              max="5"
              value={values.avgRating}
              onChange={handleChange}
              placeholder="Average Rating (optional)"
              className="w-full rounded border px-3 py-2"
            />

            <input
              name="deliveryTime"
              type="number"
              min="1"
              value={values.deliveryTime}
              onChange={handleChange}
              placeholder="Delivery Time (minutes)"
              className="w-full rounded border px-3 py-2"
            />
            {touched.deliveryTime &&
              errors.deliveryTime && (
                <p className="text-sm text-red-600">
                  {errors.deliveryTime}
                </p>
              )}

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
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "Adding..." : "Add Restaurant"}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AdminRestaurants;
