import { FC, ReactElement, ReactNode } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button} from "@mantine/core";

interface MantineModalProps {
  title?: string;
  content: ReactNode;
  triggerLabel: string | ReactElement;
  triggerProps?: React.ComponentProps<typeof Button> | React.ReactNode;
  modalProps?: React.ComponentProps<typeof Modal>;
  btnStyle?: string;
}

export const MantineModal: FC<MantineModalProps> = ({
  title,
  content,
  triggerLabel,
  triggerProps = {},
  // modalProps = {},
  btnStyle,
}) => {
  const [isOpened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={isOpened}
        onClose={close}
        title={title}
        // {...modalProps}
        centered
        // size="100%"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 5,
        }}
        transitionProps={{ transition: "fade", duration: 200 }}
        className="w-max h-[600px]"
      >
        {content}
      </Modal>
      <Button
        variant="default"
        onClick={open}
        {...triggerProps}
        className={`${btnStyle}`}
      >
        {triggerLabel}
      </Button>
    </>
  );
};
