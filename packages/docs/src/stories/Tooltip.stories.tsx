import type { StoryObj, Meta } from "@storybook/react";
import { Button, Tooltip, TooltipProps } from "@pamela-ui/react";

export default {
  title: "Feedback/Tooltip",
  component: Tooltip,
  args: {
    id: "tooltip",
    children: <Button>Hover me</Button>,
    content: "Tooltip content...",
    position: "top",
  },
  argTypes: {
    content: {
      control: "text",
    },
    position: {
      control: {
        type: "inline-radio",
      },
      options: ["top", "bottom", "left", "right"],
    },
    children: {},
  },
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
            boxSizing: "border-box",
          }}
        >
          {Story()}
        </div>
      );
    },
  ],
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {};
