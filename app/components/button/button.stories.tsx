import { Meta } from "@storybook/react";
import { Button } from "./button";
import buttonStyles from "./button.module.scss";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

export const Example = ({ children, ...args }: any) => (
  <Button {...args}>{children}</Button>
);

Example.args = {
  className: "",
  children: "Example",
  variant: "primary",
  size: "large",
  disabled: false,
  isFullWidth: true,
  isLoading: false,
  loadingText: "Loading...",
};

export const Variants = () => (
  <div className={buttonStyles.storyContainer}>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="ghost">Ghost</Button>
  </div>
);

export const Disable = () => (
  <div className={buttonStyles.storyContainer}>
    <Button variant="primary" disabled={true}>
      Primary
    </Button>
    <Button variant="secondary" disabled={true}>
      Secondary
    </Button>
    <Button variant="danger" disabled={true}>
      Danger
    </Button>
    <Button variant="ghost" disabled={true}>
      Ghost
    </Button>
  </div>
);

export const Loading = () => (
  <div className={buttonStyles.storyContainer}>
    <Button variant="primary" isLoading={true}>
      Primary
    </Button>
    <Button variant="secondary" isLoading={true}>
      Secondary
    </Button>
    <Button variant="danger" isLoading={true}>
      Danger
    </Button>
    <Button variant="ghost" isLoading={true}>
      Ghost
    </Button>
  </div>
);

export const FullWidth = () => (
  <div className={buttonStyles.storyContainer}>
    <Button variant="primary" isFullWidth={true}>
      Primary
    </Button>
    <Button variant="secondary" isFullWidth={true}>
      Secondary
    </Button>
    <Button variant="danger" isFullWidth={true}>
      Danger
    </Button>
    <Button variant="ghost" isFullWidth={true}>
      Ghost
    </Button>
  </div>
);

export const Size = () => (
  <div className={buttonStyles.storyContainer}>
    <Button variant="primary" size="small">
      small
    </Button>
    <Button variant="primary" size="medium">
      medium
    </Button>
    <Button variant="primary" size="large">
      large
    </Button>
    <Button variant="secondary" size="small">
      small
    </Button>
    <Button variant="secondary" size="medium">
      medium
    </Button>
    <Button variant="secondary" size="large">
      large
    </Button>
    <Button variant="danger" size="small">
      small
    </Button>
    <Button variant="danger" size="medium">
      medium
    </Button>
    <Button variant="danger" size="large">
      large
    </Button>
    <Button variant="ghost" size="small">
      small
    </Button>
    <Button variant="ghost" size="medium">
      medium
    </Button>
    <Button variant="ghost" size="large">
      large
    </Button>
  </div>
);
