import React, { useRef} from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import AboutUs from "../components/AboutUs";
import Divider from "../components/Divider";
import Hero from "../components/Hero";


const Home = () => {
  const { user } = useUserAuth();

  return (
    <>
      <Hero />
      {!user ? (
        <>
          <AboutUs />
          <Divider />
          <ContactForm />
          <Footer />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Home;
