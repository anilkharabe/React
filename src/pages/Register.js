import { useDispatch, useSelector } from "react-redux";
import { authStart, authFail, clearError } from "../redux/authSlice";
import { registerApi } from "../services/authService";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(authStart());

    try {
      await registerApi({
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
        role: "user",
      });

      navigate("/login");
    } catch (err) {
      dispatch(
        authFail(err.response?.data?.message || "Registration failed")
      );
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              name="name"
              placeholder="Enter your name"
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm
                         focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm
                         focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Create a password"
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm
                         focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Error */}
          {error && (
            <div className="rounded-md bg-red-100 px-3 py-2 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-lg py-2 text-sm font-medium text-white
              transition ${
                loading
                  ? "cursor-not-allowed bg-gray-400"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <span
            className="cursor-pointer text-blue-600 hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
