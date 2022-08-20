import { Routes, Route } from "react-router-dom";

// components
import Form from "../components/Form";
import List from "../components/List";

export default function routes() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/create-coin" element={<Form />} />
      <Route path="/edit-coin/:id" element={<Form />} />
    </Routes>
  );
}
