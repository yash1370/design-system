import { Meta } from "@storybook/react";
import DefaultSkeleton from "./defaultSkeleton";

const meta = {
  title: "Components/DefaultSkeleton",
  component: DefaultSkeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DefaultSkeleton>;

export default meta;

export const Example = ({ width, height, ...args }: any) => (
  <DefaultSkeleton {...args} width={width} height={height} />
);

Example.args = {
  width: 50,
  height: 14,
  count: 1,
  borderRadius: 4,
  baseColor: "#F3F4F6",
  highlightColor: "#E2E4E8",
  className: "",
  speed: 2,
};

export const Circle = () => (
  <DefaultSkeleton width={50} height={50} count={1} borderRadius="50%" />
);

export const Colored = () => (
  <DefaultSkeleton
    width={50}
    height={15}
    count={1}
    borderRadius="4"
    speed={2}
    baseColor="purple"
    highlightColor="red"
  />
);
