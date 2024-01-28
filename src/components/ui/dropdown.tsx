import { DropdownMenu } from "@radix-ui/themes";
import { ReactNode } from "react";

const Dropdown = ({
  children,
  dropdownTrigger,
}: {
  dropdownTrigger: ReactNode;
  children: ReactNode;
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>{dropdownTrigger}</DropdownMenu.Trigger>
      <DropdownMenu.Content>{children}</DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
