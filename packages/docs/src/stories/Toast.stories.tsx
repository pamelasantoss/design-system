import type { StoryObj, Meta } from "@storybook/react";
import { Button, Toast, ToastProps, useToast } from "@pamela-ui/react";

export default {
  title: "Feedback/Toast",
  component: Toast,
  args: {
    title: "Toast title",
    description: "Toast description!",
    duration: 3000,
    closeButton: true
  },
} as Meta<ToastProps>;

const ToastExample = (args: ToastProps) => {
  const { openToast, setOpenToast, showToast } = useToast()

  return (
    <>
      <Button onClick={showToast}>Click here</Button>
      <Toast
        {...args}
        open={openToast}
        setOpen={setOpenToast}
      />
    </>
  )
}

export const Primary: StoryObj<ToastProps> = {
  render: (args) => <ToastExample {...args} />,
  parameters: {
    docs: {
      source: {
        code: `
          <Toast
  title="Toast title"
  description="Toast description!"
  open={true}
  setOpen={setOpen}
/>
        `,
        language: 'tsx',
        type: 'code'
      }
    }
  }
};
