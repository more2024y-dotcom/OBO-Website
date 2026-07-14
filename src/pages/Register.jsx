function Register(){
  return (
    <div className="card">
      <h2>Create OBO Account</h2>

      <input placeholder="Full Name" />

      <input placeholder="Email" />

      <input 
        placeholder="Password"
        type="password"
      />

      <button>
        Create Account
      </button>
    </div>
  );
}

export default Register;
