import { useEffect, useState } from "react";
import { Button, Col, InputGroup, Row, Form } from "react-bootstrap";
import { Upload } from "react-bootstrap-icons";
import { useAuth, upload } from "../firebase-config";

export default function Profile() {
  const currentUser = useAuth();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png");

  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0])
    }
  }

  function handleClick() {
    upload(photo, currentUser, setLoading);
  }

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser])

  return (

     
  <>
    {/* {currentUser.photoURL ? "Change your" : "Upload a"} profile picture <br /><br /> */}
       <Row  className="pt-4">
        <Col xs={12} md={7}>
        Upload a Profile Picture<br /><br />
      <input type="file" onChange={handleChange} />
      <Button size="sm" variant="outline-warning" disabled={loading || !photo} onClick={handleClick}><Upload size={24} /></Button>
      <br />
      <Row  className="m-0 mt-3 py-3" style={{backgroundColor: "#333867", borderRadius: "5px"}}>
        <Col>
        <img src={photoURL} alt="Avatar" className="avatar m-2" />
        </Col>
        <Col className="py-4 pl-0">
        <h5>Mark Bayley</h5>
        <em>React Developer</em>
        <p>Tandm</p>
        </Col>
        </Row>
      <br />
        
        </Col>
        <Col>
        Tell us about yourself<br /><br />
        <p className="">First Name</p>
            <InputGroup
              className="mb-1"
              style={{ borderBottom: "1px solid lightgrey", borderRadius: "5px" }}
            >
              <Form.Control
                placeholder="'John'"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                // value={title}
                // onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>
            <p className="pt-3">Last Name</p>
            <InputGroup
              className="mb-1"
              style={{ borderBottom: "1px solid lightgrey", borderRadius: "5px" }}
            >
              <Form.Control
                placeholder="'Smith'"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                // value={title}
                // onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>
            <p className="pt-3">Company Role</p>
            <InputGroup
              className="mb-1"
              style={{ borderBottom: "1px solid lightgrey", borderRadius: "5px" }}
            >
              <Form.Control
                placeholder="'Developer'"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                // value={title}
                // onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>



  
        
        
        </Col>



       </Row>
       </>
  

  );
}