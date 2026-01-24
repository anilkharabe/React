const Contact = () => {
  return (
    <div className="my-7">
      <h1 className="text-7xl ">Contact</h1>
      <form
        className="max-w-sm space-y-4 rounded-lg bg-white p-6 shadow"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="mt-1 w-full rounded border px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="mt-1 w-full rounded border px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
