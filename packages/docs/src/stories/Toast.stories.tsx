import type { StoryObj, Meta } from "@storybook/react";
import { Button, Toast, ToastProps, useToast } from "@pamela-ui/react";

export default {
  title: "Feedback/Toast",
  component: Toast,
  args: {
    title: "Toast title",
    description: "Toast description!",
  },
  decorators: [
    (Story) => {
      return (
        <ToastExample />
      )
    }
  ]
} as Meta<ToastProps>;

const ToastExample = () => {
  const { openToast, setOpenToast, handleToast } = useToast()

  return (
    <>
      <Button onClick={handleToast}>Click here</Button>
      <Toast
        title="Teste"
        description="Teste 2"
        open={openToast}
        setOpen={setOpenToast}
      />
    </>
  )
}

export const Primary: StoryObj<ToastProps> = {};
