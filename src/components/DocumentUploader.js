import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  Col,
  Form,
  InputGroup,
  Alert,
  Row,
} from "react-bootstrap";
import {
  ZoomIn,
  ArrowCounterclockwise,
  Pencil,
  Archive,
} from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";
import { Upload } from "react-bootstrap-icons";
import placeholder from "../assets/placeholder.png";
import Loading from "./Loading";
import { Link } from "react-router-dom";

import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../firebase-config";
import { v4 } from "uuid";

import { db } from "../firebase-config";
import {
  doc,
  collection,
  onSnapshot,
  addDoc,
  query,
  orderBy,
  deleteDoc,
  setDoc,
} from "firebase/firestore";

const DocumentUploader = () => {
 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [date, setDate] = useState("");

  //const [imageUpload, setImageUpload] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  //GETTINGS LISTS
  const [lists, setLists] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "projects"), orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setLists(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setTitle("");
      setComment("");
      setDate("");
    });
    return () => unsubscribe();
  }, []);
  //ENDS HERE

  //ADDING LISTS
  const handleClick = (e) => {
    e.preventDefault();

    if (title) {
      addDoc(collection(db, "projects"), {
        title: title,
        comment: comment,
        date: date,
        timestamp: new Date(),
      }).catch((err) => console.error(err));
    }
  };

  //Upload Image
  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (selectedImage == null) return;
    const imageRef = ref(storage, `images/${selectedImage.name + v4()}`);
    uploadBytes(imageRef, selectedImage).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items[0].forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  //DELETE A DOC
  async function deleteDocument(id) {
    let request = await deleteDoc(doc(db, "projects", id));
    console.log(request);
  }

  //UPDATE A DOC
  async function updateDocument(id) {
    const itemRef = doc(db, "projects", id);
    let name = prompt("Update Title?");
    let comment = prompt("Update comment?");
    setDoc(itemRef, {
      name: name,
      comment: comment,
      date: date,
      timestamp: new Date(),
    });
  }

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  // function AlertSaved() {
  //   const [show, setShow] = useState(false);

  //   if (show) {
  //     return (
  //       <Alert variant="success" onClose={() => setShow(false)} dismissible>
  //         <Alert.Heading>Saved!</Alert.Heading>
  //         <p>Not really saved though. This is a fake message.</p>
  //       </Alert>
  //     );
  //   }
  //   return (
  //     <Button
  //       size="md"
  //       variant="outline-warning"
  //       className="px-4 py-2"
  //       // onClick={() => setShow(true)}
  //       onClick={handleClick}
  //     >
  //       Save
  //     </Button>
  //   );
  // }

  return (
    <>
      <Col sm={3}>
        <Button
          style={{ borderRadius: "25px", padding: "5px 20px" }}
          variant="secondary"
          onClick={handleShow}
        >
          Upload Document&nbsp; <Upload color="white" size={20} />
        </Button>
      </Col>

      <Modal show={show} onHide={handleClose} size="md">
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            Upload <Upload size={24} className="mb-2" />
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="">
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
              ) : (
                <Image
                  alt="placeholder image"
                  src={placeholder}
                  width="100%"
                  height="100%"
                  className="p-3"
                />
              )}
            </>
          )}

          <div className="px-3">
            <p>Click 'Chose File' below to select a local image file.</p>
            <input
              type="file"
              name="file-upload"
              onChange={(event) => {
                // setImageUpload(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
              }}
            />
            <Button
              onClick={() => setSelectedImage(null)}
              size="sm"
              variant="warning"
              className="me-1"
            >
              {" "}
              <ArrowCounterclockwise size={20} />
            </Button>
            <Link to="/viewer">
              <Button size="sm" variant="warning" className="me-1">
                {" "}
                <ZoomIn size={20} />
              </Button>
            </Link>
            <Button variant="warning" size="sm" onClick={uploadFile}>
              {" "}
              <Upload size={20} />
            </Button>
         
          </div>

          <div className="px-3">
            <p className="pt-4">Add project title.</p>
            <InputGroup
              className="mb-4"
              style={{ border: "1px solid lightgrey", borderRadius: "5px" }}
            >
              <Form.Control
                placeholder="CAD Design A1..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>
            <p>Add comments.</p>
            <InputGroup
              className="my-3"
              style={{ border: "1px solid lightgrey", borderRadius: "5px" }}
            >
              <Form.Control
                as="textarea"
                aria-label="With textarea"
                placeholder="Any important notes..."
                value={comment}
                onChange={(e) => setComment(e.target.value) && setDate("timestamp")}
              />
            </InputGroup>

          
            <Button variant="outline-warning" onClick={handleClick}>
              Save Notes
            </Button>
        

            {lists.map((list) => (
              <Row
                className="mt-4 m-1 p-2"
                style={{ border: "1px solid #fff", borderRadius: "5px" }}
                key={list.id}
              >
            
                <h6>
                  <strong>Date:</strong> {list.date}
                </h6>
                <h6>
                  <strong>Title:</strong> {list.title}
                </h6>
                <h6>
                  <strong>Comment:</strong>
                  <em>"{list.comment}"</em>
                </h6>
                 {imageUrls.map((url) => {
                 return <img src={url} width="100px" alt="upload"/>;
               })}
                <Col xs={12} className="d-flex justify-content-end">
                  <Button
                    onClick={() => updateDocument(list.id)}
                    size="md"
                    variant="secondary"
                    className=" me-2"
                  >
                    <Pencil />
                  </Button>

                  <Button
                    variant="danger"
                    onClick={() => deleteDocument(list.id)}
                  >
                    <Archive />
                  </Button>
                </Col>
              </Row>
            ))}

            <div className=" py-2 d-flex justify-content-end">
              {/* <AlertSaved /> */}
            </div>
          </div>

        </Modal.Body>
      </Modal>
    </>
  );
};

export default DocumentUploader;
