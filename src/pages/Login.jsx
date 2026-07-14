function Login(){
  return (
    <div className="card">
      <h2>OBO Login</h2>

      <input placeholder="Email" />

      <input 
        placeholder="Password"
        type="password"
      />

      <button>
        Login
      </button>
    </div>
  );
}

export default Login;
