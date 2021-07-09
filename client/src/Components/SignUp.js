import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignUpForm({ onLogin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="SignUp">
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name" size="lg">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
      </Form.Group>
      <Form.Group controlId="password" size="lg">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            id="password"
          />
        </Form.Group>
        <Form.Group controlId="password" size="lg">
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control
            type="password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
            id="password_confirmation"
          />
        </Form.Group>
        <Button
          block
          size="lg"
          type="submit"
          variant="success"
        >
          {isLoading ? "Loading..." : "Sign Up"}
        </Button>
        
    </Form>
  </div>    
  );
}

export default SignUpForm;
