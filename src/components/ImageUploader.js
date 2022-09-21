import React, { useState } from "react";
import {
  Button,
  Image,
  Row,
  Nav,
  Col,
} from "react-bootstrap";
import {
  ZoomIn,
  ArrowCounterclockwise,
} from "react-bootstrap-icons";

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {selectedImage ? (
        <Col>
          <Row>
            <Image
              alt="uploaded image"
              src={URL.createObjectURL(selectedImage)}
            />
          </Row>
        </Col>
      ) : (
        <Col>
          <Row>
            <Image
              style={{ borderRadius: "5px", opacity: 0.3 }}
              alt="placeholder image"
              src="/placeholder.png"
            />
          
        
         
          </Row>
    <Row className="m-0 pt-2">
          <Button size="sm" variant="secondary" >
            <input
         
              className="pt-2 "
              style={{ fontSize: "14px", cursor: "copy" }}
              type="file"
              name="file-upload"
              onChange={(event) => {
                //   console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
              }}
            />
         
            </Button>
            </Row>

        </Col>
      )}

      {selectedImage ? (
        <>
          <Nav.Link href="/viewer">
            <Button size="sm" variant="warning">
              {" "}
              View <ZoomIn size={20} />
            </Button>
          </Nav.Link>

          <Nav.Link>
            <Button
              onClick={() => setSelectedImage(null)}
              size="sm"
              variant="danger"
            >
              {" "}
              Remove <ArrowCounterclockwise size={20} />
            </Button>
          </Nav.Link>
        </>
      ) : (
        <Nav.Link>
          <Button
            onClick={() => setSelectedImage(null)}
            size="sm"
            variant="secondary"
          >
            {" "}
            Remove <ArrowCounterclockwise color="white" size={20} />
          </Button>
        </Nav.Link>
      )}
    </>
  );
};

export default ImageUploader;
