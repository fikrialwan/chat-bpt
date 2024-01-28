import { Button, DropdownMenu } from "@radix-ui/themes";
import profile from "../../assets/chat-bpt-profile.png";
import { LOGIN_FLAG } from "../../config/constants";
import ThreeDotsIcon from "../icons/three-dots";
import Container from "../shared/container";
import Dropdown from "../ui/dropdown";
import LogoutIcon from "../icons/logout";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 text-black py-3">
      <Container>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-4 justify-start items-center">
            <div className="w-12 h-12 relative">
              <img
                src={profile}
                className="w-12 h-12 rounded-full border-2 outline-white"
              />
              <span className="w-2 h-2 bg-green-500 rounded-full m-0 absolute bottom-[3px] right-[3px]" />
            </div>
            <div className="flex flex-col align-baseline justify-start">
              <h1 className="text-xl font-semibold text-primaryBlue">
                Bang Pitung
              </h1>
              <p className="text-sm font-light text-green-500">Online</p>
            </div>
          </div>

          {!LOGIN_FLAG && (
            <Dropdown
              dropdownTrigger={
                <Button variant="soft" className="outline-none cursor-pointer">
                  <ThreeDotsIcon className="w-8 h-8" color="black" />
                </Button>
              }
            >
              <DropdownMenu.Item className="hover:bg-transparent hover:text-black cursor-pointer flex flex-row gap-2 justify-start items-center">
                <LogoutIcon height={20} width={20} /> Logout
              </DropdownMenu.Item>
            </Dropdown>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
