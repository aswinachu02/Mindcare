import MobileLayout from "../../layouts/MobileLayout";
import Button from "../../components/Button";
import HomeImage from "../../assets/Home.svg";
import Happy from "../../assets/Happy.svg";
import Emoji from "../../assets/Emoji.svg";
import Sad from "../../assets/Sad.svg";
import Meh from "../../assets/Meh.svg";
import Smile from "../../assets/Smile.svg";
import SessionCard from "../../components/SessionCard";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../stores";
import { capitalize } from "../../utils/string";

const Home = () => {
  const [{ username }] = useAuthStore();

  return (
    <MobileLayout>
      <div className="flex justify-between w-auto  min-h-[240px] p-[25px] bg-[#F9F2E8]">
        <div className="flex flex-col text-xl font-medium mt-4">
          <h2>Good Morning,</h2>
          <h2>{capitalize(username)}!</h2>
          <p className=" text-xs font-light text-[#282A39] mt-2 mb-5">
            Feel like talking?
          </p>
          <Link to={"/booking"}>
            <Button type="solid" className="w-full text-xs font-light">
              BOOK NEW SESSION
            </Button>
          </Link>
        </div>
        <img src={HomeImage} alt="home" className="w-[180px] h-[156px]" />
      </div>

      <div className="flex flex-col p-[25px]">
        <h2 className=" text-lg font-medium">How are you feeling today ?</h2>
        <p className=" text-xs font-normal text-[#5B5E68]">
          Identify and track your emotions
        </p>
        <div className=" flex items-center justify-evenly w-auto p-[25px] my-4 rounded-lg shadow-lg">
          <img src={Sad} alt="sad" />
          <img src={Meh} alt="meh" />
          <img src={Emoji} alt="emoji" />
          <img src={Smile} alt="smile" />
          <img src={Happy} alt="happy" />
        </div>
      </div>

      <div className="flex flex-col ">
        <h2 className=" text-lg font-medium px-[25px] ">Today's Sessions</h2>
        <div className="flex justify-center">
          <SessionCard />
        </div>
      </div>
      <Footer />
    </MobileLayout>
  );
};

export default Home;
