import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegisterCar } from "./pages/RegisterCar";
import { ShowData } from "./pages/ShowData";
import { Home } from "./pages/Home";
import { AllStudents } from "./pages/AllStudents";
import { LoginScreen } from './pages/LoginScreen'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterCar />} />
        <Route path="/exibir" element={<ShowData />} />
        <Route path="/estudantes" element={<AllStudents />} />
        <Route path="/login" element={<LoginScreen/>}  />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
