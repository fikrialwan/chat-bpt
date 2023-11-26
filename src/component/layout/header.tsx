import profile from "../../assets/chat-bpt-profile.jpg";
import ThreeDotsIcon from "../icons/three-dots";

const Header = () => {
  return (
    <header className="py-3 px-4 bg-primaryBlue flex flex-row justify-between items-center shadow-md text-white">
      <div className="flex flex-row gap-4 justify-start items-center">
        <div className="w-12 h-12 relative">
          <img
            src={profile}
            className="w-12 h-12 rounded-full border-2 outline-white"
          />
          <span className="w-2 h-2 bg-green-500 rounded-full m-0 absolute bottom-[3px] right-[3px]" />
        </div>
        <div className="flex flex-col align-baseline justify-start">
          <h1 className="text-xl font-normal">Bang Pitung</h1>
          <p className="text-sm text-gray-100">Online</p>
        </div>
      </div>
      <ThreeDotsIcon className="w-8 h-8" />
    </header>
  );
};

export default Header;
