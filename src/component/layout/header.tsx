import profile from "../../assets/chat-bpt-profile.jpg";
import ThreeDotsIcon from "../icons/three-dots";

const Header = () => {
  return (
    <header className="py-3 px-4 bg-white flex flex-row justify-between items-center border-b border-gray-200 text-black">
      <div className="flex flex-row gap-4 justify-start items-center">
        <div className="w-12 h-12 relative">
          <img
            src={profile}
            className="w-12 h-12 rounded-full border-2 outline-white"
          />
          <span className="w-2 h-2 bg-green-500 rounded-full m-0 absolute bottom-[3px] right-[3px]" />
        </div>
        <div className="flex flex-col align-baseline justify-start">
          <h1 className="text-xl font-semibold text-primaryBlue">Bang Pitung</h1>
          <p className="text-sm font-light text-green-500">Online</p>
        </div>
      </div>
      <ThreeDotsIcon className="w-8 h-8" color="black" />
    </header>
  );
};

export default Header;
