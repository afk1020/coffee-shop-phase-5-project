import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios"
import { useHistory } from 'react-router';


export default function Profile({user, onDeleteUser}) {

    // const  {id, name, password_digest} = user
    const history = useHistory()
    function handleDeleteUser() {
        
        fetch(`/users/${user.id}`, {
          method: "DELETE",
        }).then((r) => {
          if (r.ok) {
            onDeleteUser(user);
          }
          alert("your profile has been deleted")
          history.push('/')
        });
      }
   

    return (
        <div className="Profile">
         <div className="lander">
        <h1>Profile</h1>
        <p className="text-muted">profile name: {user.name} </p>
      </div>
      <Button block size="lg" type="submit" variant="success" onClick={handleDeleteUser}>
        Delete Profile
    </Button>
    </div>



    );
  
}
  
  