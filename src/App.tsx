import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignIn, SignUp } from "@/pages/Index";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
