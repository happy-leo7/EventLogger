import { FC, PropsWithChildren, ReactNode, useMemo } from "react";

import {
  EventLoggerContext,
  TEventLoggerContextValue,
} from "./context/EventLoggerContext";
import {
  LogEventPropertiesContext,
  TLogEventPropertiesContextValue,
} from "./context/LogEventPropertiesContext";
import { useEventLogger } from "./hook/useEventLogger";
import { useLogEventProperties } from "./hook/useLogEventProperties";
import { TEventLogger, TLogEventProperties } from "./type";

interface EventLoggerFC
  extends FC<
    PropsWithChildren<{
      logger: TEventLogger;
    }>
  > {
  Properties: typeof Properties;
  Logger: typeof Logger;
}

export const EventLogger: EventLoggerFC = ({ logger, children }) => {
  const contextValue: TEventLoggerContextValue = useMemo(() => {
    return logger;
  }, [logger]);

  return (
    <EventLoggerContext.Provider value={contextValue}>
      {children}
    </EventLoggerContext.Provider>
  );
};

const Properties: FC<
  PropsWithChildren<{ properties: TLogEventProperties }>
> = ({ properties, children }) => {
  const inheritedProperties = useLogEventProperties();

  const contextValue: TLogEventPropertiesContextValue = useMemo(() => {
    return { ...inheritedProperties, ...properties };
  }, [inheritedProperties, properties]);

  return (
    <LogEventPropertiesContext.Provider value={contextValue}>
      {children}
    </LogEventPropertiesContext.Provider>
  );
};

const Logger: FC<{
  properties?: TLogEventProperties;
  children: (args: { logger: TEventLogger }) => ReactNode;
}> = ({ properties: defaultProperties, children }) => {
  const logger = useEventLogger(defaultProperties);

  return children({ logger });
};

EventLogger.Properties = Properties;
EventLogger.Logger = Logger;
