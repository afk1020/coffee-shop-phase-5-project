import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios"
import { useHistory } from 'react-router';


export default function Profile({user, onDeleteUser, onEditUser}) {
    let [name, setName] = useState("");
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
   
      function handleEditUserName() {
        
        fetch(`/users/${user.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({name}),
        }).then((r) => {
          if (r.ok) {
            onEditUser(user);
          }
          alert("your profile has been edited")
          history.push('/')
        });
      }
    return (
        <div className="Profile">
         <div className="lander">
        <h1>Profile</h1>
        <p className="text-muted">profile name: {user.name} </p>
      </div>
      <Form >
      <Form.Group size="lg" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          autoFocus
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      <Button block size="lg" type="submit" variant="success" onClick={handleEditUserName}>
        Edit Profile Name
    </Button>
        </Form.Group>
    <Button block size="lg" type="submit" variant="success" onClick={handleDeleteUser}>
        Delete Profile
    </Button>
    </Form>
    </div>



    );
  
}
  
  