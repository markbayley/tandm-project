import React, { useState } from "react";
import {
  Button,
  Image,
  Row,
  Nav,
  Form,
  FormControl,
  Col,
} from "react-bootstrap";
import {
  Funnel,
  SortDown,
  SortUp,
  Upload,
  SortAlphaDownAlt,
  SortAlphaUp,
  Search,
  ZoomIn,
  Save,
  ArrowCounterclockwise,
} from "react-bootstrap-icons";

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Row>
        <input
          type="file"
          name=""
          onChange={(event) => {
            //   console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }}
        />
      </Row>

      {selectedImage ? (
        <Row>
          <Col>
            <Image
              alt="uploaded image"
              width={"150px"}
              height={"100px"}
              src={URL.createObjectURL(selectedImage)}
            />
          </Col>
        </Row>
      ) : (
        <Row>
          <Col >
            <Image
            style={{borderRadius: "5px", opacity: 0.3}}
              alt="placeholder image"
              width={"150px"}
              height={"100px"}
              // width="100%"
              // height="100%"
              src="/placeholder.png"
            />
          </Col>
        </Row>
      )}

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
    </>
  );
};

export default ImageUploader;
