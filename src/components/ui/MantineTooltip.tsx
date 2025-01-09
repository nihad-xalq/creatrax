import { Tooltip, Button } from "@mantine/core";
import { FC } from "react";

interface IMantineTooltipProps {
  tooltipTriggerBtn: React.ReactNode;
  tooltipText: string;
}

export const MantineTooltip: FC<IMantineTooltipProps> = ({
  tooltipTriggerBtn,
  tooltipText,
}) => {
  return (
    <Tooltip
      multiline
      w={200}
      withArrow
      transitionProps={{ duration: 200 }}
      label={tooltipText}
      openDelay={300}
      closeDelay={300}
    >
      <Button className="bg-transparent hover:bg-transparent">
        {tooltipTriggerBtn}
      </Button>
    </Tooltip>
  );
};
