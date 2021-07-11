import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router';

function LoginForm({ onLogin }) {
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let [errors, setErrors] = useState([]);
  let [isLoading, setIsLoading] = useState(false);

  const history = useHistory()
  
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    history.push('/products')
  }
  


  
  return (
    <div className="Login">
    <Form onSubmit={handleSubmit}>
      <Form.Group size="lg" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          autoFocus
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group size="lg" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
     
      <Button block size="lg" type="submit" >
      {isLoading ? "Loading..." : "Login"}
     </Button>
     
    </Form>
  </div>    
  );
}

export default LoginForm;
