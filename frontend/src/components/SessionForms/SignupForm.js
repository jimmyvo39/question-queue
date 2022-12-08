import React from "react";
import * as sessionActions from "../../store/session";
import { useInput, useSubmit } from "../../hooks";
import { FormErrors, Input } from "../Forms";

function SignupForm({ onSuccess }) {
  const [email, onEmailChange] = useInput("");
  const [username, onUsernameChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPassword, onConfirmPasswordChange] = useInput("");
  const [errors, onSubmit] = useSubmit({ 
    onSuccess,
    action: sessionActions.signup({ email, username, password }),
    validate: () => {
      if (password !== confirmPassword) {
        return ['Confirm Password field must be the same as the Password field'];
      }
    }
  });

  return (
    <form onSubmit={onSubmit} className="form">
      <FormErrors errors={errors}/>
      <h2>Display name</h2>
      <Input 
        value={username}
        onChange={onUsernameChange}
        required
      />
      <h2>Email</h2>
      <Input 
        value={email}
        onChange={onEmailChange}
        required
      />
      <h2>Password</h2>
      <Input 
        type="password"
        value={password}
        onChange={onPasswordChange}
        required
      />
      <h2>Confirm Password</h2>
      <Input 
        type="password"
        value={confirmPassword}
        onChange={onConfirmPasswordChange}
        required
      />
      <button type="submit" className="signup-button">Sign Up</button>
    </form>
  );
}

export default SignupForm;