import { createContext } from "react";
import { TLogEventProperties } from "../type";

export type TLogEventPropertiesContextValue = TLogEventProperties;

export const LogEventPropertiesContext =
  createContext<TLogEventPropertiesContextValue>({});
