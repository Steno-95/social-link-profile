import Card from "./Components/Card/Card";
import Menu from "./Components/MenuLinks/Menu";
import Profile from "./Components/Profile/Profile";
import ProfileHeader from "./Components/Profile/ProfileHeader";
import ProfilePicture from "./Components/Profile/ProfilePicture";
import Footer from "./ui/Footer";

function App() {
  return (
    <div className="min-h-dvh min-w-dvw flex flex-col">
      <Card>
        <Profile>
          <ProfilePicture img={"avatar-jessica.jpeg"} />
          <ProfileHeader
            username={"Jessica Randall"}
            origin={"London, United Kingdom"}
            description={"Front-end developer and avid reader"}
          />
        </Profile>
        <Menu />
      </Card>
      <Footer />
    </div>
  );
}

export default App;
