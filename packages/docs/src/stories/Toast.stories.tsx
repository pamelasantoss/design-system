import type { StoryObj, Meta } from "@storybook/react";
import { Button, Toast, ToastProps } from "@pamela-ui/react";
import { useState } from "react";

export default {
  title: "Feedback/Toast",
  component: Toast,
  args: {
    title: "Toast title",
    description: "Toast description!",
  },
  decorators: [
    (Story) => {
      const [teste, setTeste] = useState(false);

      return (
        <>
          <Button onClick={() => setTeste(true)}>Click here</Button>
          {teste && Story()}
        </>
      );
    },
  ],
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {};
