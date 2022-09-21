import React from "react";
import Square3D from "./Square3D";
import {
  ArrowCounterclockwise,
  ArrowClockwise,
  Brush,
  Pencil,
  PencilSquare,
  Bucket,
  Pen,
  Wrench,
  SaveFill,
} from "react-bootstrap-icons";
import { Button, Col } from "react-bootstrap";

const ViewerBox = () => {
  return (
    <Col
      sm={12}
      md={9}
      className="mt-2"
      style={{
        backgroundColor: "#17193b",
        borderRadius: "5px",
        height: "77vh",
        borderRadius: "5px",
      }}
    >
      {/* ToolBox */}
      <Col
        className="mt-2 "
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40px",
          position: "absolute",
          zIndex: 1,
        }}
      >
        {" "}
        <Button size="sm" variant="secondary">
          {" "}
          <Wrench color="white" size={20} />
        </Button>
        <Button size="sm" variant="secondary">
          {" "}
          <Brush color="white" size={20} />{" "}
        </Button>
        <Button size="sm" variant="secondary">
          {" "}
          <Pencil color="white" size={20} />{" "}
        </Button>
        <Button size="sm" variant="secondary">
          {" "}
          <PencilSquare color="white" size={20} />{" "}
        </Button>
        <Button size="sm" variant="secondary">
          {" "}
          <Bucket color="white" size={20} />{" "}
        </Button>
        <Button size="sm" variant="secondary">
          {" "}
          <ArrowCounterclockwise color="white" size={20} />{" "}
        </Button>
        <Button size="sm" variant="secondary">
          {" "}
          <ArrowClockwise color="white" size={20} />{" "}
        </Button>
        <Button size="sm" variant="secondary">
          {" "}
          <SaveFill color="white" size={20} />{" "}
        </Button>
      </Col>
      {/* 3D Image */}
      <Square3D />{" "}
    </Col>
  );
};

export default ViewerBox;
