import { useRef, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

import { signup, login, logout, useAuth } from "../firebase-config";
import Profile from "./Profile";

export default function Auth() {
  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  return (
    <div style={{border: "1px solid #fff", borderRadius: "5px"}} className="px-3">
      
     

      {/* {!currentUser && 
        <>
          <div className="fields">
            <input ref={emailRef} placeholder="Email" />
            <input ref={passwordRef} type="password" placeholder="Password" />
          </div>

          <Button variant="outline-warning" disabled={ loading } onClick={handleSignup}>Sign Up</Button>
          <Button variant="outline-warning" disabled={ loading } onClick={handleLogin}>Log In</Button>
        </>
      }

      {currentUser &&  */}
        <>
         <Profile /> 
         <Row className="pb-3 pt-2">
            <Col xs={12} md={8} >
         <div style={{color: "grey"}}>Currently logged in as: { currentUser?.email } </div><br />
         </Col>
         <Col style={{display: "flex", justifyContent: "end", alignItems: "center"}}>
          <Button  disabled={ loading || !currentUser } onClick={handleLogout}>Log Out</Button>
          </Col>
          </Row>
        </>
       
      {/* } */}

    </div>
  );
}