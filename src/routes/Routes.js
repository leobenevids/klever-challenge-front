import { Routes, Route } from "react-router-dom";

// pages
import Home from '../pages/Home'
import FormPage from "../pages/FormPage";

export default function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-coin" element={<FormPage />} />
      <Route path="/edit-coin/:id" element={<FormPage />} />
    </Routes>
  );
}
