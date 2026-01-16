import { useEffect, useState } from "react";
import { fetchAdminStats } from "../services/adminService";
import StatsCard from "../components/admin/StatsCard";

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const res = await fetchAdminStats();
        setStats(res.data);
      } catch (err) {
        setError("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  if (loading) return <p className="p-6">Loading dashboard...</p>;
  if (error) return <p className="p-6 text-red-600">{error}</p>;

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-semibold">
        Admin Dashboard
      </h1>

      <div className="flex gap-6">
        <StatsCard
          title="Total Restaurants"
          value={stats.restaurants}
        />
        <StatsCard
          title="Total Users"
          value={stats.users}
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
