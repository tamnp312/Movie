import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./page/home/HomePage";
import LoginPage from "./page/LoginPage";
import SignUpPase from "./page/SignUpPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element= {<LoginPage />} />
        <Route path="/signup" element= {< SignUpPase />} />
      </Routes>
    </>
  );
}

export default App;
