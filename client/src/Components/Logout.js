import React, { Component } from "react";
import { useHistory } from 'react-router';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { render } from "react-dom";

function LogOut({ setUser }) {
  const history = useHistory()
  
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {setUser(null)
      }
    });
    history.push('/')
  }
  
    

  
  return (
    
        <Button block size="lg" type="submit" variant="success" onClick={handleLogoutClick}>
          Logout
        </Button>
        
  );
  }


export default LogOut;
