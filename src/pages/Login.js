import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api";
import { toast } from "react-toastify";
import { UserContext } from "../context/user.context";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { authenticateUser } = useContext(UserContext);

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePaswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleSubmitForm(event) {
    event.preventDefault();
    try {
      const response = await login({ email, password });
      debugger
      console.log("response", response);
      localStorage.setItem("authToken", response.data);
      // "authToken" here with response.data

      //Setting the logged user in the context
      authenticateUser();
      toast.success("User logged in");
      navigate("/medbox");
    } catch (e) {
      console.log(e)
      toast.error(`Invalid login`);
    }
  }

  return (


    <><h3>Login</h3><form onSubmit={handleSubmitForm}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        value={email}
        onChange={handleEmailChange} />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        value={password}
        type="password"
        onChange={handlePaswordChange} />

      <button type="submit">Login</button>
    </form>
    <Link to="/signup">Don't have an account?</Link>
    </>
  );
}

export default Login;
