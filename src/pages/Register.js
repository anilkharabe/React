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
        role: 'user'
      });

      navigate("/login");
    } catch (err) {
      dispatch(
        authFail(err.response?.data?.message || "Registration failed")
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input name="name" placeholder="Name" required /> <br></br> <br></br>
      <input name="email" placeholder="Email" required /> <br></br> <br></br>
      <input name="password" placeholder="password" type="password" required /> <br></br> <br></br>

      <button disabled={loading}>
        {loading ? "Registering..." : "Register"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default Register;
