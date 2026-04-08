import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import EditorialHomePage from "./pages/EditorialHomePage";
import ProjectsArchivePage from "./pages/ProjectsArchivePage";
import ContactDirectoryPage from "./pages/ContactDirectoryPage";
import LetterComposePage from "./pages/LetterComposePage";
import AdminInboxPage from "./pages/AdminInboxPage";
import AdminLetterDetailPage from "./pages/AdminLetterDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <SiteHeader />

      <Routes>
        <Route path="/" element={<EditorialHomePage />} />
        <Route path="/projects" element={<ProjectsArchivePage />} />
        <Route path="/contact" element={<ContactDirectoryPage />} />
        <Route path="/letter" element={<LetterComposePage />} />
        <Route path="/admin/inbox" element={<AdminInboxPage />} />
        <Route path="/admin/inbox/:id" element={<AdminLetterDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}