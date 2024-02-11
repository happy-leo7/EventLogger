type TLogEventPropertyPrimitiveType = string | number | boolean | undefined;
export type TLogEventProperties = Record<
  string,
  TLogEventPropertyPrimitiveType
>;

type LogEvent = {
  eventName: string;
  properties?: TLogEventProperties;
};

export type TEventLogger = (logEvent: LogEvent) => void;
