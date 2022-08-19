import { Routes, Route } from "react-router-dom";

// pages
import Home from "../pages/Home";
import AddToken from "../pages/AddToken";
import EditToken from "../pages/EditToken";

export default function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddToken />} />
      <Route path="/edit/:id" element={<EditToken />} />
    </Routes>
  );
}
