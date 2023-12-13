import { Meta } from "@storybook/react";
import Avatar from "./avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    firstName: {
      description: "First name of the user",
    },
    lastName: {
      description: "Last name of the user",
    },
    size: {
      description: "The size of the avatar",
      defaultValue: "sm",
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

export const Example = ({ children, ...args }: any) => <Avatar {...args} />;

Example.args = {
  className: "",
  size: "md",
  firstName: "yash",
  lastName: "patel",
  src: "",
};
