import profile from "../../assets/chat-bpt-profile.jpg";
import ThreeDotsIcon from "../icons/three-dots";

const Header = () => {
  return (
    <header className="py-3 px-4 bg-[#29ABE2] flex flex-row justify-between items-center shadow-md text-white">
      <div className="flex flex-row gap-4 justify-start items-center">
        <img src={profile} className="w-10 h-10 rounded-full" />
        <div className="flex flex-col align-baseline justify-start">
          <h1 className="text-xl font-normal">Bang Pitung</h1>
          <div className="flex flex-row justify-start items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full m-0" />{" "}
            <p className="text-sm">Online</p>
          </div>
        </div>
      </div>
      <ThreeDotsIcon className="w-8 h-8" />
    </header>
  );
};

export default Header;
