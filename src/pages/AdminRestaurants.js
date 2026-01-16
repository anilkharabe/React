import AddRestaurantForm from "../components/admin/AddRestaurantForm";
import RestaurantBulkUpload from "../components/admin/RestaurantBulkUpload";

const AdminRestaurants = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">
        Admin – Manage Restaurants
      </h1>

      <RestaurantBulkUpload />
      <AddRestaurantForm />
    </div>
  );
};

export default AdminRestaurants;
