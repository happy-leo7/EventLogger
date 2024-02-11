import { createContext } from "react";
import { TEventLogger } from "../type";

export type TEventLoggerContextValue = TEventLogger;

export const EventLoggerContext =
  createContext<TEventLoggerContextValue | null>(null);
