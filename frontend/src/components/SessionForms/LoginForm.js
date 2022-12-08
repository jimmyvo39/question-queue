import React from "react";
import * as sessionActions from "../../store/session";
import { useInput, useSubmit } from "../../hooks";
import { FormErrors, Input } from "../Forms";


function LoginForm({ onSuccess }) {
  const [credential, onCredentialChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [errors, onSubmit] = useSubmit({ 
    onSuccess,
    action: sessionActions.login({ credential, password })
  });

  

  return (
    <form onSubmit={onSubmit} className="form">
      <FormErrors errors={errors}/>
      <h2>Email</h2>
      <Input 
        className="login-input"
        value={credential}
        onChange={onCredentialChange}
        required
      />
      <h2>Password</h2>
      <Input 
        className="login-input"
        type="password"
        value={password}
        onChange={onPasswordChange}
        required
      />
      <button type="submit" id="login-button" className="signup-button">Log In</button>
    </form>
  );
}

export default LoginForm;