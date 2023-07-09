import "./app.style.css";
import {  Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AdminDash, Header, Home } from "./components";
import "react-toastify/dist/ReactToastify.css";
import { RouteNotFound } from "./components/RouteNotFound/RouteNotFound";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/admin" element={ <AdminDash /> }/>
        <Route path="/*" element={ <RouteNotFound />} />
      </Routes>
    </>
  );
}

export default App;
