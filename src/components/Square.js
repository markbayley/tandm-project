import React, { useEffect, useState } from "react";

// import { Canvas } from "react-three-fiber";
import { Canvas, useFrame } from "@react-three/fiber";
import { DoubleSide } from "three";
// import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
// import CameraswitchIcon from '@mui/icons-material/Cameraswitch';
// import MouseIcon from '@mui/icons-material/Mouse';
// import ControlCameraIcon from '@mui/icons-material/ControlCamera';

// Drei is a really helpful library
// It has helpers for react-three-fiber
import { Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";

import "./styles.css";

import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const popover1 = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">@ryan.james commented</Popover.Header>
    <Popover.Body>
      <em>
        {" "}
        "This part is<strong> ok</strong>. Needs some work though".
      </em>
    </Popover.Body>
  </Popover>
);

const popover2 = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">@sarah.smith commented</Popover.Header>
    <Popover.Body>
      <em>
        {" "}
        "This part is<strong> amazing</strong>. It's very engaging. right?"
      </em>
    </Popover.Body>
  </Popover>
);

const UpdatingPopover = React.forwardRef(
  ({ popper, children, show: _, ...props }, ref) => {
    useEffect(() => {
      console.log("updating!");
      popper.scheduleUpdate();
    }, [children, popper]);

    return (
      <Popover ref={ref} body {...props}>
 
        {children}
        
      </Popover>
    );
  }
);

const longContent = (
  <>
      
      <strong>@sarah.smith</strong> commented: <br/>
    
      <em>
        {" "}
        "This part is<strong> amazing</strong>. It's very engaging. right?"
      </em>

  

 
  </>
);
const shortContent = (
  <>

      <strong>@sarah.smith</strong> commented: <br/>
     
      <em>
        {" "}
        "This part is<strong> amazing</strong>. It's very engaging. right?"
      </em>

  </>
);
// Our main React component renders a Canvas from
// react-three-fiber. The Canvas component does most
// of the hard work of setting up the scene, renderer
// and other core components of Three.js
export default function Square() {
  return (
    <div>
      <Canvas style={{ height: "77vh", cursor: "move" }}>
       
        {/*
           A group is used for grouping, kind og like
          groups in SVGs. The positioning of elements
          inside a group is relative to the group's
          position.
        */}
        <group>
          {/* All these are in the same group */}
          <GreenSquare />
          <ToolTip1 />
          <ToolTip2 />
          <ToolTip3 />
        </group>
        {/* Let there be light! */}
        <ambientLight />
        {/*
          Use a PerspectiveCamera.
          PerspectiveCameras work like real works cameras
          and provide depth perception.
        */}
        <PerspectiveCamera position={[2, 2, 2]} makeDefault />
        {/*
          This lets you rotate the camera.
          We've associated our React ref with it
          like we would do for any React component
        */}
        <OrbitControls />
      </Canvas>
  
    </div>
  );
}

// This is the thing we are interested in
// The GreenSquare component renders a mesh.
// Meshes are objects that can have a shape and
// texture.
function GreenSquare() {
  return (
    // The mesh is at the origin
    // Since it is inside a group, it is at the origin
    // of that group
    // It's rotated by 90 degrees along the X-axis
    // This is because, by default, planes are rendered
    // in the X-Y plane, where Y is the up direction
    <mesh
      position={[0, 0, 0]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={[1.2, 1.2, 0.5]}
    >
      {/*
        The thing that gives the mesh its shape
        In this case the shape is a flat plane
      */}
      <boxGeometry />
      {/*
        The material gives a mesh its texture or look.
        In this case, it is just a uniform green
      */}
      <meshBasicMaterial color="#474d84" side={DoubleSide} />
    </mesh>
  );
}

// The rest of the components are just tooltips
// Drei's Html component lets you render any HTML
// inside the 3d scene. It follows the same rules
// as everything else when it comes to positioning,
// but is not actually rendered inside the canvas

function ToolTip1() {
  const [content, setContent] = useState(shortContent);

  useEffect(() => {
    const timerId = setInterval(() => {
      setContent(content === shortContent ? longContent : shortContent);
    }, 500);

    return () => clearInterval(timerId);
  });

  return (
    <Html center position={[-1, 0, -1]}>
      {/* <div ><p>Left click and drag to <strong>rotate</strong></p>   </div> */}
      <OverlayTrigger
        trigger="click"
        placement="top"
      
        overlay={
          <UpdatingPopover id="popover-contained">{content}</UpdatingPopover>
        }
      >
         <div style={{cursor: "pointer"}}>
          <p>
            <strong>{ content ? "x" : "3"}</strong>
          </p>
        </div>
      </OverlayTrigger>
    </Html>
  );
}

function ToolTip2() {
  return (
    <>
      <Html center position={[1, -1, -1]}>
        <OverlayTrigger trigger="click" placement="right" overlay={popover1}>
          <div style={{cursor: "pointer"}}>
            <p>
              <strong>2</strong>
            </p>
          </div>
        </OverlayTrigger>
      </Html>
    </>
  );
}

function ToolTip3() {
  return (
    <Html center position={[-1, -1, 1]}>
      <OverlayTrigger trigger="click" placement="left" overlay={popover2}  >
      <div style={{cursor: "pointer"}}>
          <p >
            <strong>1</strong>
          </p>
        </div>
      </OverlayTrigger>
    </Html>
  );
}
