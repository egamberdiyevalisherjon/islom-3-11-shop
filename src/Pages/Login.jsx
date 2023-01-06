import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import useUrlParams from "../Hooks/useUrlParams";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const { afterPage = "/" } = useUrlParams();

  const [state, setState] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  async function handleLogin(e) {
    e.preventDefault();
    let {
      data: {
        token,
        user = {
          name: "john",
          email: "john@gmail.com",
          role: "ADMIN",
          address: { city: "Tashkent" },
        },
      } = { token: null },
    } = await axios.post("https://reqres.in/api/login", state).catch((err) => {
      if (err.response.status === 400) {
        alert("Notogri Malumot");
      }
      return {};
    });

    if (!token) return;

    localStorage.token = token;
    dispatch({ type: "LOAD_USER_DATA", payload: user });
    navigate(afterPage);
  }

  function handleInput(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (user.role) navigate(afterPage);
  }, []);

  return (
    <section className="m-auto w-100">
      <div className="container">
        <h2 className="display-3 text-center my-3">Login</h2>
        <form
          onSubmit={handleLogin}
          className="bg-white p-5 d-flex flex-column gap-5"
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            className="form-control"
            value={state.email}
            onChange={handleInput}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            className="form-control"
            value={state.password}
            onChange={handleInput}
          />
          <button type="submit" className="btn btn-success">
            Login
          </button>
          <p className="text-center text-dark">
            No Account Yet?{" "}
            <Link to={`/register?afterPage=${afterPage}`}>Register Here.</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
