import { useRef, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

const RestaurantBulkUpload = () => {
  const fileRef = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleUpload = async () => {
    if (!fileRef.current.files.length) return;

    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", fileRef.current.files[0]);

      const res = await axiosInstance.post(
        "/restaurants/bulk-upload",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setMessage(res.data.message + " ✅");
      fileRef.current.value = "";
    } catch (err) {
      setError(err.response?.data?.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow mb-6">
      <h2 className="mb-3 text-lg font-semibold">
        Bulk Upload Restaurants (Excel)
      </h2>

      <input ref={fileRef} type="file" accept=".xlsx" />

      <button
        onClick={handleUpload}
        disabled={loading}
        className={`mt-4 rounded px-4 py-2 text-white ${
          loading ? "bg-gray-400" : "bg-purple-600 hover:bg-purple-700"
        }`}
      >
        {loading ? "Uploading..." : "Upload File"}
      </button>

      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      {message && <p className="mt-2 text-sm text-green-600">{message}</p>}
    </div>
  );
};

export default RestaurantBulkUpload;
