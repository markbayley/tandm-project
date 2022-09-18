import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";

import { Funnel, SortDown, SortUp, Upload, SortAlphaDownAlt, SortAlphaUp, Search, ZoomIn, Save, ArrowCounterclockwise} from 'react-bootstrap-icons';

function DocumentList() {
  return (

    <Container className="pt-3" >
    <Row className="mb-2">
    <Col sm={4} className="mt-0"><h3 style={{color: "grey", fontWeight: 200}}>Document Manager <Funnel size={20} className=""/></h3></Col>
    <Col sm={3} className="mt-2"> </Col>
  
    <Col sm={3}> 
    <Form className="d-flex"  style={{ height: "35px"}}>
            <Form.Control
              type="search"
              placeholder="Search title, id..."
              className="me-2"
              aria-label="Search"
             
             
             
            />
            <Button variant="outline-light" size="sm"><Search color="white"size={20} className="pb-1"/></Button>
          </Form>
          </Col>
        
          {/* <Col sm={2} className="mt-2"> Upload Document &nbsp;&nbsp;&nbsp; <Button variant="outline-warning" size="sm"  style={{ height: "32px" }} className=""><Upload color="black" size={20} className="pb-1"/></Button></Col> */}
        </Row>

        <Row>
      <Col sm={10}> 
       <Table   style={{backgroundColor: "", color: "", borderColor: "#222548", borderRadius: "10px"}}>
     
      <thead style={{color: "white"}}>
        <tr >
          <th>#Id</th>
          <th>Thumbnail</th>
          <th>Title &nbsp;<SortAlphaDownAlt color="white" size={24} className="pb-1"/> &nbsp;<SortAlphaUp color="white" size={24} className="pb-1"/></th>
          <th>Uploaded By</th>
          <th>Date &nbsp;<SortDown color="white" size={24} className="pb-1"/> &nbsp;<SortUp color="white" size={24} className="pb-1"/></th>
          <th>&nbsp;&nbsp;&nbsp;Comments By</th>
        
    

 
        </tr>
      </thead>
      <tbody >
        <tr style={{backgroundColor: "#17193b", color: "#ffffff"}}>
          <td>1</td>
          <td>  <Nav.Link href="/viewer">
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
                 <h6><em>"why do you even bother Mat!"</em></h6>
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
              <td>
          <Nav.Link href="/viewer" className="p-0">
           
            <Button size="sm"  >
              {" "}
           View&nbsp;<ZoomIn color="white" size={16} />
            </Button>
       
          </Nav.Link> 
          </td>  
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
          <h6><em>"You have just been fired!"</em></h6>
       </Nav.Link></td>
       <td>
          <Nav.Link href="/viewer" className="p-0">
           
            <Button size="sm" >
              {" "}
           View&nbsp;<ZoomIn color="white" size={16} />
            </Button>
       
          </Nav.Link> 
          </td>  
        </tr>
        
        <tr style={{backgroundColor: "#17193b", color: "#ffffff"}}>
          <td>3</td>
          <td ><Nav.Link>
                <Image
                  className="thumbnail-image"
                  src="/cad-1.png"
                  alt="Profile"
                  height="70px"
                  width="135px"
               
                />
              </Nav.Link></td>
              <td>CAD Design 3c</td>
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
          <h6><em>"It's ok...I guess"</em></h6>
       </Nav.Link></td>
       <td>
          <Nav.Link href="/viewer" className="p-0">
           
            <Button size="sm"  >
              {" "}
           View&nbsp;<ZoomIn color="white" size={16} />
            </Button>
       
          </Nav.Link> 
          </td>  
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
          <h6><em>"This needs some more work pronto"</em></h6>
       </Nav.Link></td>
       <td>
          <Nav.Link href="/viewer" className="p-0">
           
            <Button size="sm"  >
              {" "}
           View&nbsp;<ZoomIn color="white" size={16} />
            </Button>
       
          </Nav.Link> 
          </td>  
        </tr>
        <tr style={{backgroundColor: "#17193b", color: "#ffffff"}}>
          <td>3</td>
          <td ><Nav.Link>
                <Image
                  className="thumbnail-image"
                  src="/cad-3.png"
                  alt="Profile"
                  height="70px"
                  width="135px"
               
                />
              </Nav.Link></td>
              <td>CAD Design 3c</td>
          <td>@bill.smith</td>
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
          <h6 ><em>"Did your six year old crayon this Bill?"</em></h6>
       </Nav.Link></td>
       <td>
          <Nav.Link href="/viewer" className="p-0">
           
            <Button size="sm" >
              {" "}
           View&nbsp;<ZoomIn color="white" size={16} />
            </Button>
       
          </Nav.Link> 
          </td>  
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>05/07/2022</td>
          <td>@mdo</td>
          <td>
          <Nav.Link href="/viewer" className="p-0">
           
            <Button size="sm">
              {" "}
           View&nbsp;<ZoomIn color="white" size={16} />
            </Button>
       
          </Nav.Link> 
          </td>  
        </tr>
        <tr style={{backgroundColor: "#17193b", color: "#ffffff"}}>
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
          <td >@mathew.sails</td>
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
                 <h6><em>"I like the design but its a bit small"</em></h6>
              </Nav.Link> </td>
              
              <td>
          <Nav.Link href="/viewer" className="p-0">
           
            <Button size="sm" >
              {" "}
           View&nbsp;<ZoomIn color="white" size={16} />
            </Button>
       
          </Nav.Link> 
          </td>  
        </tr>
        <tr>
          <td>3</td>
          <td>  <Nav.Link>
                <Image
                  className="thumbnail-image"
                  src="/cad-1.png"
                  alt="Profile"
                  height="70px"
                  width="135px"
               
                />
              </Nav.Link></td>
          <td >Larry </td>
          <td>@twitter</td>
          <td>05/07/2022</td>
          <td>@fat</td>
          <td>
          <Nav.Link href="/viewer" className="p-0">
           
            <Button size="sm"  >
              {" "}
           View&nbsp;<ZoomIn color="white" size={16} />
            </Button>
       
          </Nav.Link> 
          </td>  
        </tr>
    
     
  
      </tbody>
    </Table></Col>
      <Col sm={2} >   
    
      <Row   className="mt-1 mb-2"> 
    
    <Nav.Link href="/viewer" className="p-0">
          <Button size="sm"variant="success"  >
            {" "}
         Upload <Upload color="white" size={20} />
          </Button>
  
        </Nav.Link>     

        </Row>
      <Row  style={{backgroundColor: "#333867", border: "", borderRadius: "5px" , height: "40vh", marginTop: "5px"}}></Row>

      <Row  className="my-2"> 
    
      <Nav.Link href="/viewer" className="p-0">
            <Button size="sm"variant="dark"  >
              {" "}
           Remove <ArrowCounterclockwise color="white" size={20} />
            </Button>
            <Button size="sm" variant="dark" disbaled>
              {" "}
           Save&nbsp;<Save color="white" size={20} />
            </Button>
            <Button size="sm" variant="danger" >
              {" "}
           Delete
            </Button>
          </Nav.Link>     
  
          </Row>

      <Row  style={{backgroundColor: "", border: "", borderRadius: "5px" , height: "50vh", marginTop: "10px"}}>       </Row>
      
      </Col>
   
    </Row>

  </Container>
  
  );
}

export default DocumentList;