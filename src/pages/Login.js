import { useDispatch, useSelector } from "react-redux";
import {
  authStart,
  authSuccess,
  authFail,
  clearError,
} from "../redux/authSlice";
import { loginApi } from "../services/authService";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(authStart());

    try {
      const res = await loginApi({
        email: e.target.email.value,
        password: e.target.password.value,
      });

      // Expected backend response:
      // { user: {...}, accessToken: "jwt" }

      dispatch(authSuccess(res.data));
    } catch (err) {
      dispatch(
        authFail(err.response?.data?.message || "Login failed")
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <input name="email" placeholder="Email" required />
      <input name="password" type="password" required />

      <button disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default Login;
