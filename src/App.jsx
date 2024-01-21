import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Main from "./pages/main"
import Sidebar from "./components/sidebar";
import Navbar from "./components/partials/Navbar";
import Introduction from "./components/content/introduction";
import GetStart from "./components/content/getstart";
import Test from "./example/Test";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/start" element={<GetStart />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/coba" element={<Test />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
