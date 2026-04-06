import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import LetterPage from "./pages/LetterPage";
import AdminInboxPage from "./pages/AdminInboxPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/letter" element={<LetterPage />} />
        <Route path="/admin/inbox" element={<AdminInboxPage />} />
      </Routes>
    </BrowserRouter>
  );
}