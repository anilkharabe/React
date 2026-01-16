const StatsCard = ({ title, value }) => {
  return (
    <div className="rounded-lg bg-white p-6 shadow w-64">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="mt-2 text-3xl font-bold text-gray-800">
        {value}
      </p>
    </div>
  );
};

export default StatsCard;
