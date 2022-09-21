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
import Contact from "./pages/Contact";

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
          <Route
            path="/viewer"
            element={
              <ProtectedRoute>
                <DocumentViewer />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
