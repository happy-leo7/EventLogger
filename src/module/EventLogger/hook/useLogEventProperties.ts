import { useContext } from "react";
import { LogEventPropertiesContext } from "../context/LogEventPropertiesContext";

export const useLogEventProperties = () => {
  const logEventProperties = useContext(LogEventPropertiesContext);
  return logEventProperties;
};
