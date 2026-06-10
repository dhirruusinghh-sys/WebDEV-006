import { useState } from "react";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("User Name:", userName);
    console.log("Password:", password);

    setUserName("");
    setPassword("");
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="border p-3 w-50 mt-5 bg-light shadow rounded">
        <h1 className="text-center">Welcome Back!!!</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            id="userName"
            className="form-control mb-3"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;