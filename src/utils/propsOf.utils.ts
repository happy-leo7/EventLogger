import { ClassAttributes, ComponentClass, JSXElementConstructor } from "react";

export type PropsOf<C> = C extends JSXElementConstructor<infer P>
  ? C extends ComponentClass<P>
    ? ClassAttributes<InstanceType<C>> & P
    : P
  : never;
