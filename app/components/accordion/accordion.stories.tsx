import { Meta } from "@storybook/react";
import Accordion from "./accordion";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;

export const Example = ({ children, ...args }: any) => <Accordion {...args} />;

Example.args = {
  className: "",
  title: "Add Note",
  description: "#047857",
};
