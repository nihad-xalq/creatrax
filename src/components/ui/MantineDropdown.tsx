"use client";

import { Menu, Button } from "@mantine/core";
import Link from "next/link";
import { FC, useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi2";

interface DataType {
  label: string;
  icon: React.ReactNode;
  createdAt?: string;
  link?: string;
}

interface IMantineDropdownProps {
  triggerBtn: React.ReactNode;
  data: DataType[];
  hasChevron?: boolean;
  dropdownWidth?: number | string;
}

export const MantineDropdown: FC<IMantineDropdownProps> = ({
  triggerBtn,
  data,
  hasChevron = false,
  dropdownWidth = 200,
}) => {
  const [opened, setOpened] = useState(false);

  return (
    <Menu
      shadow="md"
      width={dropdownWidth}
      transitionProps={{ transition: "rotate-right", duration: 100 }}
      opened={opened}
      onChange={setOpened}
    >
      <Menu.Target>
        <Button className="bg-transparent hover:bg-transparent text-black hover:text-black">
          {triggerBtn}
          {hasChevron ? (
            <HiOutlineChevronDown
              className={`${
                opened ? "rotate-180" : ""
              } w-1/3 lg:w-1/6 h-full transition duration-200`}
            />
          ) : null}
        </Button>
      </Menu.Target>

      <Menu.Dropdown className="-ml-8">
        {data.map((item, index) => {
          return (
            <Menu.Item key={index} leftSection={item.icon}>
              <Link
                href={item.link || "#"}
                className="flex flex-col items-start gap-0"
              >
                <p>{item.label}</p>
                {item.createdAt ? (
                  <span className="text-xs text-gray-400">
                    {item.createdAt}
                  </span>
                ) : null}
              </Link>
            </Menu.Item>
          );
        })}
      </Menu.Dropdown>
    </Menu>
  );
};
