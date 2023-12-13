import { Meta } from "@storybook/react";
import Textarea from "./textarea";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;

export const Example = ({ children, ...args }: any) => <Textarea {...args} />;

Example.args = {
  className: "w-96",
  label: "Add Note",
  placeholder: "Enter a note",
  disabled: false,
};

export const Disable = () => (
  <div>
    <Textarea
      label="Description"
      placeholder="Enter a description"
      disabled={true}
      className="w-80"
    />
  </div>
);
