import { LoginScreenComponent } from "../components/LoginScreenComponent/LoginScreenComponent";
import { Link } from "react-router-dom";

export const LoginScreen = () => {
  return (
    <>
      <LoginScreenComponent />
      <button>
       <Link to="/"> Home</Link>
      </button>
    </>
  );
};
