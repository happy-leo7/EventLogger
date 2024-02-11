import { useCallback, useContext } from "react";
import { EventLoggerContext } from "../context/EventLoggerContext";
import assert from "../../../utils/assert.utils";
import { useLogEventProperties } from "./useLogEventProperties";
import { TEventLogger, TLogEventProperties } from "../type";

const useEventLoggerContext = () => {
  const contextValue = useContext(EventLoggerContext);
  assert(
    contextValue !== null,
    "Cannot find EventLoggerContext.Provider in parent component tree."
  );
  return contextValue;
};

export const useEventLogger = (defaultProperties?: TLogEventProperties) => {
  const eventLoggerFormContext = useEventLoggerContext();
  const inheritedProperties = useLogEventProperties();

  const eventLogger = useCallback<TEventLogger>(
    ({ eventName, properties }) => {
      eventLoggerFormContext({
        eventName,
        properties: {
          ...inheritedProperties,
          ...defaultProperties,
          ...properties,
        },
      });
    },
    [defaultProperties, inheritedProperties, eventLoggerFormContext]
  );

  return eventLogger;
};
