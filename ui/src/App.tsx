import "./app.style.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AdminDash, AdminListing, Header, Home } from "./components";
import "react-toastify/dist/ReactToastify.css";
import { RouteNotFound } from "./components/RouteNotFound/RouteNotFound";
import { Protected } from "./components/Protected/ProtectedComponent";

function App() {
  const location = useLocation();
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={localStorage.getItem("isAdmin") == null ? <AdminDash /> : <Navigate to="/admin/listing" />} />
        <Route
          path="/admin/listing"
          element={
            <Protected isAdminToken={location?.state?.isAdmin ? location?.state?.isAdmin : localStorage.getItem("isAdmin") ? localStorage.getItem("isAdmin") : null}>
              <AdminListing />
            </Protected>
          }
        />
        <Route path="/*" element={<RouteNotFound />} />
      </Routes>
    </>
  );
}

export default App;
