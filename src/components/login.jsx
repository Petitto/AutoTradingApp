import React, { useState } from 'react';

const Login = () => {
  const [appKey, setAppKey] = useState('');
  const [secret, setSecret] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('App Key:', appKey);
    console.log('Secret:', secret);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="appKey">App Key:</label>
        <input
          type="text"
          id="appKey"
          value={appKey}
          onChange={(e) => setAppKey(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="secret">Secret:</label>
        <input
          type="password"
          id="secret"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;