import { Meta } from "@storybook/react";
import Spinner from "./spinner";

const meta = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

export default meta;

export const Default = ({ children, ...args }: any) => <Spinner {...args} />;

Default.args = {
  className: "",
  Color: "#00DA92",
  size: "30px"
};
