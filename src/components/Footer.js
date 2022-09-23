import React from "react";
import { Col, Collapse, Container, Row } from "react-bootstrap";
import "./footer.css";
import { Facebook, Instagram, Twitter, Linkedin } from "react-bootstrap-icons";

export default function Footer() {
  return (
    <div className="footer-dark">
      <footer>
        <Container>
          <Row>
            <div class="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="/contact">CAD Design</a>
                </li>
                <li>
                  <a href="/contact">Development</a>
                </li>
                <li>
                  <a href="/contact">Building</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div class="col-md-6 item text">
              <h3>Tandm</h3>
              <p>
                Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis
                tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel
                in justo.
              </p>
            </div>
            <div class="col item social">
              <a href="#">
                {" "}
                <Facebook color="white" size={20} />
              </a>
              <a href="#">
                <Twitter
                  class="icon ion-social-twitter"
                  color="white"
                  size={20}
                />
              </a>
              <a href="#">
                <i class="icon ion-social-snapchat"></i>
                <Instagram color="white" size={20} />
              </a>
              <a href="#">
                <i class="icon ion-social-instagram"></i>
                <Linkedin color="white" size={20} />
              </a>
            </div>
          </Row>
          <p class="copyright">Tandm © 2022</p>
        </Container>
      </footer>
    </div>
  );
}
