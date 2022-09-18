import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/LandingPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Navbar from "./components/Navbar";
import DocumentManager from "./pages/DocumentManager";
import DocumentViewer from "./pages/DocumentViewer";

function App() {
  return (
    <>
      <UserAuthContextProvider>
        <Navbar />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DocumentManager />
              </ProtectedRoute>
            }
          />
              <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
           <Route path="/viewer" element={<DocumentViewer />} />
        
        </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
