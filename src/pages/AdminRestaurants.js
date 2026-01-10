const AdminRestaurants = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">
        Admin – Manage Restaurants
      </h1>

      <form className="max-w-lg space-y-4">
        <input
          placeholder="Restaurant Name"
          className="w-full rounded border px-3 py-2"
        />

        <input
          placeholder="City"
          className="w-full rounded border px-3 py-2"
        />

        <input
          placeholder="Image URL"
          className="w-full rounded border px-3 py-2"
        />

        <button className="rounded bg-blue-600 px-4 py-2 text-white">
          Add Restaurant
        </button>
      </form>
    </div>
  );
};

export default AdminRestaurants;
