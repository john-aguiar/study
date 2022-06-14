import { ThemeSwitcher } from "../components/ThemeSwitcher/ThemeSwitcher";
import { UserComponent } from "../components/UserComponent/UserComponent";
import { ProfileComponent } from "../components/ProfileComponent/ProfileComponent";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <ThemeSwitcher />
      <UserComponent />
      <ProfileComponent />
      <button>
       <Link to="/estudantes"> Mostrar os estudantes</Link>
      </button>
    </>
  );
};
