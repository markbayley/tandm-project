import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";

import { Funnel, SortDown, SortUp, Upload, SortAlphaDownAlt, SortAlphaUp, Search} from 'react-bootstrap-icons';

function DocumentList() {
  return (

    <Container className="pt-0">
    <Row className="mb-2">
    <Col sm={3} className="mt-2">Document Manager <Funnel color="black" size={20} className=""/></Col>
    <Col sm={4} className="mt-2"> </Col>
  
    <Col sm={3}> 
    <Form className="d-flex"  style={{ height: "32px" }}>
            <Form.Control
              type="search"
              placeholder="Search title, id..."
              className="me-2"
              aria-label="Search"
             
             
            />
            <Button variant="outline-warning" size="sm"><Search color="black" size={20} className="pb-1"/></Button>
          </Form>
          </Col>
          <Col sm={2} className="mt-2">Upload Document &nbsp;<Upload color="black" size={20} className=""/></Col>
          {/* <Col sm={2} className="mt-2"> Upload Document &nbsp;&nbsp;&nbsp; <Button variant="outline-warning" size="sm"  style={{ height: "32px" }} className=""><Upload color="black" size={20} className="pb-1"/></Button></Col> */}
        </Row>

        <Row>
      <Col sm={10}> 
       <Table striped bordered hover variant="dark" >
     
      <thead>
        <tr>
          <th>#Id</th>
          <th>Thumbnail</th>
          <th>Document Title &nbsp;<SortAlphaDownAlt color="white" size={24} className="pb-1"/> &nbsp;<SortAlphaUp color="white" size={24} className="pb-1"/></th>
          <th>Uploaded By</th>
          <th>Upload Date &nbsp;<SortDown color="white" size={24} className="pb-1"/> &nbsp;<SortUp color="white" size={24} className="pb-1"/></th>
          <th>Commented By</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>  <Nav.Link>
                <Image
                  className="thumbnail-image"
                  src="/cad-1.png"
                  alt="Profile"
                  height="70px"
                  width="135px"
               
                />
              </Nav.Link></td>
          <td>CAD Design Floor 1a</td>
          <td>@mathew.sails</td>
          <td>05/07/2022</td>
          <td> <Nav.Link>
         
                <Image
                  className="thumbnail-image"
                  src="/avatar.png"
                  alt="Profile"
                  height="25px"
                 style={{ border: "2px solid grey", borderRadius: "50%"}}
               
                />
                 &nbsp;@sarah.williams
              </Nav.Link>
              <Nav.Link>
         
                <Image
                  className="thumbnail-image"
                  src="/avatar-2.png"
                  alt="Profile"
                  height="25px"
                  style={{ border: "2px solid grey", borderRadius: "50%"}}
               
                />
                 &nbsp;@josh.ryan
              </Nav.Link></td>
        </tr>
        <tr>
          <td>2</td>
          <td><Nav.Link>
                <Image
                  className="thumbnail-image"
                  src="/cad-2.png"
                  alt="Profile"
                  height="70px"
                  width="135px"
               
                />
              </Nav.Link></td>
          <td>Thornton Design</td>
          <td>@bill.smith</td>
          <td>05/07/2022</td>
          <td> <Nav.Link>
         
         <Image
           className="thumbnail-image"
           src="/avatar-2.png"
           alt="Profile"
           height="25px"
           style={{ border: "2px solid grey", borderRadius: "50%"}}
        
         />
          &nbsp;@josh.ryan
       </Nav.Link></td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}><Nav.Link>
                <Image
                  className="thumbnail-image"
                  src="/cad-3.png"
                  alt="Profile"
                  height="70px"
                  width="135px"
               
                />
              </Nav.Link></td>
          <td>@twitter</td>
          <td>05/07/2022</td>
          <td>   <Nav.Link>
         
         <Image
           className="thumbnail-image"
           src="/avatar-2.png"
           alt="Profile"
           height="25px"
           style={{ border: "2px solid grey", borderRadius: "50%"}}
        
         />
          &nbsp;@josh.ryan
       </Nav.Link></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>05/07/2022</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>05/07/2022</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>05/07/2022</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>05/07/2022</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
          <td>05/07/2022</td>
          <td>@fat</td>
        </tr>
    
     
  
      </tbody>
    </Table></Col>
      <Col sm={2} style={{border: "1px solid grey"}}>Upload Documents</Col>
    </Row>

  </Container>
  
  );
}

export default DocumentList;