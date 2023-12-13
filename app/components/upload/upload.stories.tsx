import { Meta } from "@storybook/react";
import Upload from "./upload";

const meta = {
  title: "Components/Upload",
  component: Upload,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Upload>;

export default meta;

export const Example = ({ children, ...args }: any) => <Upload {...args} />;

Example.args = {
  className: "",
  title: "Upload image",
  label: "Upload Profile Image",
};
