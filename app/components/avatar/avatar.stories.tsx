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
  Alt: "",
  width: {},
  height: {},
};

export const Variant = () => (
  <div className="flex items-center gap-3">
    <Avatar
      src="https://i.ibb.co/4KN7dsk/YASH.png"
      width={320}
      height={32}
      Alt="Yash"
      title="Yash"
      className="w-10 h-10"
    />
    <Avatar firstName="Yash" lastName="Patel" size="md" />
  </div>
);
