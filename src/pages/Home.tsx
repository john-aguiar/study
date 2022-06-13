import { ThemeSwitcher } from "../components/ThemeSwitcher/ThemeSwitcher";
import { UserComponent } from "../components/UserComponent/UserComponent";
import { ProfileComponent } from "../components/ProfileComponent/ProfileComponent";

export const Home = () => {
  return (
    <>
      <ThemeSwitcher />
      <UserComponent />
      <ProfileComponent />
    </>
  );
};
