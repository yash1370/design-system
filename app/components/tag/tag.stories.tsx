import { Meta } from "@storybook/react";
import Tag from "./tag";

const meta = {
  title: "Components/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tag>;

export default meta;

export const Example = ({ children, ...args }: any) => <Tag {...args} />;

Example.args = {
  className: "",
  tag: "Add Note",
  Color: "#047857",
  bgColor: "#D1FAE5",
};
