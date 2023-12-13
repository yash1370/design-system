import { Meta } from "@storybook/react";
import Input from "./input";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

export const Example = ({ children, ...args }: any) => <Input {...args} />;

Example.args = {
  className: "",
  label: "Email",
  placeholder: "Enter email",
  variant: "text",
  disabled: false,
};

export const Variants = () => (
  <div>
    <Input
      variant="text"
      label="Name"
      placeholder="Enter Name"
      className="mb-4"
    />
    <Input variant="password" label="Password" placeholder="Enter Password" />
  </div>
);

export const Disable = () => (
  <div>
    <Input
      variant="text"
      label="Name"
      placeholder="Enter Name"
      className="mb-4"
      disabled={true}
    />
    <Input
      variant="password"
      label="Password"
      placeholder="Enter Password"
      disabled={true}
    />
  </div>
);
