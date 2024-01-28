import { Callout } from "@radix-ui/themes";
import { ReactNode } from "react";
import InfoCircleIcon from "../icons/info-circle";

const Alert = ({ children }: { children: ReactNode }) => {
  return (
    <Callout.Root color="red" className="flex flex-row items-center">
      <Callout.Icon>
        <InfoCircleIcon fill="#cd2b31" height={20} width={20} />
      </Callout.Icon>
      <Callout.Text>{children}</Callout.Text>
    </Callout.Root>
  );
};

export default Alert;
