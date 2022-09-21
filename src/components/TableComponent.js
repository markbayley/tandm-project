import React, { useEffect, useState} from 'react'
import jsonData from "./../api/data.json";
import {
    Button,
    Nav,
    Col,
    Image,
    Table
  } from "react-bootstrap";
import {
  SortDown,
  SortUp,
  SortAlphaDownAlt,
  SortAlphaUp,
  ZoomIn,
} from "react-bootstrap-icons";

const TableComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      setData(jsonData);
    }, []);
  return (
    
    <Col sm={10}>
    <Table
      style={{
        backgroundColor: "#222548",
        color: "",
        borderColor: "#222548",
        borderRadius: "7px",
      }}
    >
      <thead style={{ color: "white" }}>
        <tr>
          <th>#Id</th>
          <th>Thumbnail</th>
          <th>
            Title &nbsp;
            <SortAlphaDownAlt
              color="white"
              size={24}
              className="pb-1"
            />{" "}
            &nbsp;
            <SortAlphaUp color="white" size={24} className="pb-1" />
          </th>
          <th>Uploaded By</th>

          <th>
            Date&nbsp;
            <SortDown color="white" size={24} className="pb-1" /> &nbsp;
            <SortUp color="white" size={24} className="pb-1" />
          </th>
          <th>&nbsp;&nbsp;&nbsp;Comments</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {/* Small sample mapping of json data element */}
        {data.map((item, index) => (
          <tr
            key={index}
            style={{ backgroundColor: "", color: "#ffffff" }}
            className="tab"
          >
            <td>{item.id}</td>
            <td>
              {" "}
              <Nav.Link href="/viewer">
                <Image
                  className="thumbnail-image"
                  src={item.image}
                  alt="thumbnail-cad"
                  height="90px"
                  width="125px"
                />
              </Nav.Link>
            </td>
            <td>{item.title}</td>
            <td> <Nav.Link>{item.uploader}   </Nav.Link></td> 
            <td>{item.date}</td>

            <td>
              {" "}
              <Nav.Link>
                <Image
                  className="profile-image"
                  src={item.avatar1}
                  alt="Profile"
                  height="25px"
               
                />
                &nbsp;{item.commenter1}
                <h6>
                  <em>"{item.comment1}"</em>
                </h6>
              </Nav.Link>
              <Nav.Link>
                <Image
                  className="profile-image"
                  src={item.avatar2 ? item.avatar2 : null}
                  alt="Profile"
                  height="25px"
               
                />
                &nbsp;{item.commenter2}
                <h6>
                  <em>
                    "{item.comment2 ? item.comment2 : "comment removed"}"
                  </em>
                </h6>
              </Nav.Link>
            </td>
            <td>
              <Nav.Link href={item.link} className="p-0">
                <td className="pb-2 status" style={{ color: item.progress }}>
                  {item.status}
                </td>
                <Button size="sm" variant="warning">
                  {" "}
                  View&nbsp;
                  <ZoomIn color="" size={16} />
                </Button>
              </Nav.Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Col>
  )
}

export default TableComponent