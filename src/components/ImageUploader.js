import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  Row,
  Nav,
  Col,
  Form,
  InputGroup,
  Alert
} from "react-bootstrap";
import {
  ZoomIn,
  ArrowCounterclockwise,
} from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";
import {
  Upload,
} from "react-bootstrap-icons";
import placeholder from '../assets/placeholder.png'
import Loading from "./Loading";


const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);



  function AlertSaved() {
    const [show, setShow] = useState(false);
  
    if (show) {
      return (
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Saved!</Alert.Heading>
          <p>
            Not really saved though. This is a fake message.
          </p>
        </Alert>
      );
    }
    return <Button size="md" variant="outline-warning" className="px-4 py-2"onClick={() => setShow(true)}>Save</Button>;
  }

  return (
    <>
     <Col sm={3}>
     <Button style={{borderRadius: "25px", padding: "5px 20px"}} variant="secondary" onClick={handleShow}>
      Upload Document&nbsp; <Upload color="white" size={20} /></Button>

        </Col>
    
            <Modal
            show={show}
            onHide={handleClose}
            size="md"
           
          >
            <Modal.Header closeButton>
              <Modal.Title>
                {" "}
                  Upload  <Upload size={24} className="mb-2" />
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className=""  >
   


            {selectedImage ? (
                 
               
            <Image
              alt="uploaded image"
              src={URL.createObjectURL(selectedImage)}
              width="100%"
              height="100%"
              className="p-3"
            
            />
          
      ) : (
      <>
     {loading ? (
                  <div className="">
                  <Loading />
                  </div>
                  ) : (      <Image
          
                    alt="placeholder image"
                    src={placeholder}
                    width="100%"
                    height="100%"
                    className="p-3"
                   
                  /> )}
        
          
      
          
      
  

  
            </>

     
      )}
    
      {selectedImage ? (
        <div className="p-3">
        
            <Button href="/viewer" size="md" variant="warning" className="p-2 me-3">
              {" "}
              View <ZoomIn size={20} />
            </Button>

            <Button href="/viewer" size="md" variant="secondary" className="p-2 me-3">
              {" "}
              Edit <ZoomIn size={20} />
            </Button>
    
    
            <Button
              onClick={() => setSelectedImage(null)}
              size="md"
              variant="warning"
              className="p-2 me-3"
            >
              {" "}
              Remove <ArrowCounterclockwise size={20} />
            </Button>
      
     <p className="pt-4">Add project title.</p>
    <InputGroup className="mb-4" style={{border: "1px solid lightgrey", borderRadius: "5px"}}>
   
        <Form.Control
          placeholder="CAD Design A1..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
 
      </InputGroup>
      <p >Add comments.</p>
      {/* <Form.Label htmlFor="basic-url">Enter a project title</Form.Label> */}
    <InputGroup className="my-3" style={{border: "1px solid lightgrey", borderRadius: "5px"}}>

        {/* <InputGroup.Text>Add a comment</InputGroup.Text> */}
        <Form.Control as="textarea" aria-label="With textarea" placeholder="Any important notes..."/>
      </InputGroup>
        
   
      <div className=" py-2 d-flex justify-content-end">



        <AlertSaved />
        </div>
        </div>
      ) : (
        <div className="p-3">
          <p>Click  'Chose File'  below to select a local image file.</p>
            <Button size="sm" variant="outline-warning"  className="px-2 py-0 me-3">
            <input
         
              className="pt-2 "
              style={{ fontSize: "15px", cursor: "pointer" }}
              type="file"
              name="file-upload"
         
              onChange={(event) => {
                //   console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
              }}
            />
             <Button  size="sm" variant="warning"  className="mt-0 mb-1">
          Upload
          </Button>
            </Button>
          {/* <Button
            onClick={() => setSelectedImage(null)}
            size="md"
            variant="secondary"
            className="p-2 me-3"
          >
            {" "}
            Remove <ArrowCounterclockwise color="white" size={20} />
          </Button> */}

          </div>
      )}
      
            </Modal.Body>
          </Modal>
        
      
    </>
  );
};

export default ImageUploader;
