import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Nav, Col, Image, Row } from "react-bootstrap";
import {
  Search as Searchs 
  } from "react-bootstrap-icons";
import avatar1 from '../assets/avatar-1.png'
import avatar2 from '../assets/avatar-2.png'
import avatar3 from '../assets/avatar-3.png'
import cad1 from '../assets/cad-1.png'
import cad2 from '../assets/cad-2.png'
import cad3 from '../assets/cad-3.png'
import { Link } from "react-router-dom";
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

const { SearchBar, ClearSearchButton } = Search;

const products = [
  {
    id: "238-4H",
    image: <Image src={cad2} alt="cad-2" width="125px" height="90px" />,
    title: "Central Design 3d",
    link: (
      <Link variant="outline-warning" to="/viewer" size="md">
        <Button variant="outline-warning">View</Button>
      </Link>
    ),
    uploader: "@andrew.wright",
    date: "04/08/2022",
    status: "Review",
    commenter1:       
    <>
 
      <Image
        className="profile-image"
        src={avatar1}
        alt="Profile"
        height="25px"
      />
    &nbsp;@sarah.williams <br></br>
  
 
     
        <em style={{ color: "lightgrey" }}>"You have just been fired sadly Bill!"</em>
        <br></br>
        <br></br>
      <Image
        className="profile-image"
        src={avatar2}
        alt="Profile"
        height="25px"
      />
     
     @josh.ryan <br></br>
  
  
      
        <em style={{ color: "lightgrey" }}> "Did your six year old crayon this?"</em>
   
  </>,
  },
  {
    id: "368-8R",
    image: <Image src={cad3} width="125px" height="90px" />,
    title: "CAD Pipe Network 1b",
    link: (
      <Link variant="outline-warning" to="/viewer" size="md">
      <Button variant="outline-warning">View</Button>
    </Link>
    ),
    uploader: "@john.fellows",
    date: "02/07/2022",
    status: "Active",
    commenter1:       
    <>
 
      <Image
        className="profile-image"
        src={avatar3}
        alt="Profile"
        height="25px"
      />
    @jane.mellow <br></br>

   
    
        <em style={{ color: "lightgrey"}}> "It is a long established fact that a reader will be distracted by the readable content."</em>
    
  
   
  </>,
  },
  {
    id: "135-6P",
    image: <Image src={cad1} width="125px" height="90px" />,
    title: "CAD Design Floor 1a",
    link: (
      <Link variant="outline-warning" to="/viewer" size="md">
      <Button variant="outline-warning">View</Button>
    </Link>
    ),
    uploader: "@mathew.sails",
    date: "05/09/2022",
    status: "Final Draft",
    commenter1:      
     <>

      <Image
        className="profile-image"
        src={avatar3}
        alt="Profile"
        height="25px"
      />
      &nbsp;@andrew.wright<br></br>
   
  

        <em style={{ color: "lightgrey"}}> "You have just been fired sadly Bill!"</em>
        <br></br>
        <br></br>
      <Image
        className="profile-image"
        src={avatar2}
        alt="Profile"
        height="25px"
      />
      @cedric.black <br></br>

  

        <em style={{ color: "lightgrey" }}> "why do you even bother Mat!"</em>

  </>,

  },
  {
    id: "138-8T",
    image: <Image src={cad2} width="125px" height="90px" />,
    title: "Thornton Design 1c",
    link: (
      <Link variant="outline-warning" to="/viewer" size="md">
      <Button variant="outline-warning">View</Button>
    </Link>
    ),
    uploader: "@andrew.wright",
    date: "04/08/2022",
    status: "Review",
    commenter1: (
      <>
 
          <Image
            className="profile-image"
            src={avatar2}
            alt="Profile"
            height="25px"
          />
      @bill.jones <br></br>
 
     
            <em style={{ color: "lightgrey" }}> "This needs some more work pronto!"</em>
        
      </>
    ),

  },
  {
    id: "738-4R",
    image: <Image src={cad1} width="125px" height="90px" />,
    title: "Thornton Design 1c",
    link: (
      <Link variant="outline-warning" to="/viewer" size="md">
        <Button variant="outline-warning">View</Button>
      </Link>
    ),
    uploader: "@andrew.wright",
    date: "04/08/2022",
    status: "Review",
    commenter1: (
      <>
  
          <Image
            className="profile-image"
            src={avatar2}
            alt="Profile"
            height="25px"
          />
        @josh.ryan<br></br>
     
        
      
            <em style={{ color: "lightgrey" }}>"I truly believe that I can fly!"</em>
            <br></br>
            <br></br>
          <Image
            className="profile-image"
            src={avatar2}
            alt="Profile"
            height="25px"
          />
         @john.fellows<br></br>
      

            <em style={{ color: "lightgrey" }}>"You have just been fired sadly Bill!"</em>
      
      </>
    ),
 
  },
  {
    id: "165-1A",
    image: <Image src={cad3} width="125px" height="90px" />,
    title: "CAD Pipe Network 1b",
    link: (
      <Link variant="outline-warning" to="/viewer" size="md">
        <Button variant="outline-warning">View</Button>
      </Link>
    ),
    uploader: "@john.fellows",
    date: "02/07/2022",
    status: "Active",
    commenter1:       <>

      <Image
        className="profile-image"
        src={avatar2}
        alt="Profile"
        height="25px"
      />
    @josh.ryan<br></br>
  
  
        <em style={{ color: "lightgrey" }}> "You have just been fired sadly Bill!"</em>
 
  </>,
 
  },
];

const columns = [
  {
    dataField: "id",
    text: "#Id",
    sort: true,
    headerStyle: {
      width: "80px",
    },
  },
  {
    dataField: "image",
    text: "Thumbnail",
    sort: false,
    headerStyle: {
      width: "150px",
      margin: "35px",
    },
  },
  {
    dataField: "title",
    text: "Title",
    sort: true,
    headerStyle: {
      width: "180px",
    },
  },
  {
    dataField: "uploader",
    text: "Uploader",
    sort: true,
    headerStyle: {
      width: "150px",
    },
  },
  {
    dataField: "date",
    text: "Date",
    sort: true,
    headerStyle: {
      width: "130px",
    },
  },

  {
    dataField: "status",
    text: "Status",
    sort: true,
    headerStyle: {
      width: "100px",
    },
  },

  {
    dataField: "commenter1",
    text: " Comments",
    sort: false,
    headerStyle: {
        width: "250px",
      },
    },
  
  {
    dataField: "link",
    text: "Link",
    sort: false,
    headerStyle: {
      width: "100px",
    },
  },
];

export default function DataTable() {
  return (
    <Col
      sm={12}
      style={{
        backgroundColor: "#222548",
        borderColor: "#222548",
        borderRadius: "7px",
        paddingLeft: "0px",
        paddingRight: "0px",
      }}
    >
             {/* <BootstrapTable
        bootstrap4
        keyField="id"
        data={products}
        columns={columns}

      /> */}

<ToolkitProvider
bootstrap4
  keyField="id"
  data={ products }
  columns={ columns }
  search
>
  {
    props => (
      <>
   
      <div className="d-flex" >
  
   
        <SearchBar { ...props.searchProps } />
         {/* <ClearSearchButton  { ...props.searchProps } >  */}
         {/* <Searchs color="white" size={20} className="pb-1" /> */}
         {/* </ClearSearchButton> */}
         <Button variant="outline-light" size="sm" style={{height: "39px", marginTop: "14px", marginLeft: "-10px"}}>
        <Searchs color="white" size={20} className="pb-1" />
      </Button>
  

</div>
  
       
     
        <BootstrapTable
   
          { ...props.baseProps }
        />
      </>
    )
  }
</ToolkitProvider>
  


    </Col>
  );
}
