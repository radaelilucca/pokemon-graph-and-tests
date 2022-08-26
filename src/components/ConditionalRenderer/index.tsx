import { FC, ReactElement } from "react";

interface IConditionalRenderProps {
  condition?: boolean;
  children: ReactElement;
}

const ConditionalRender: FC<IConditionalRenderProps> = ({
  condition,
  children,
}) => {
  if (condition) return children;
  return null;
};

export { ConditionalRender };
