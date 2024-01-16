import { useContext } from "react";
import MessageContext from "../config/context";

export const useMessages = () => useContext(MessageContext);
