"use client";

import { HiOutlineChevronDown } from "react-icons/hi2";
import { Menu, Button } from "@mantine/core";
import { FC, useState } from "react";
import Link from "next/link";

interface DataType {
  id: number;
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
  hasFilters?: boolean;
  hasActions?: boolean;
  onMarkAsRead?: (id: number) => void;
  onDelete?: (id: number) => void;
  viewAllLink?: string;
}

export const MantineDropdown: FC<IMantineDropdownProps> = ({
  triggerBtn,
  data,
  hasChevron = false,
  dropdownWidth = 240,
  hasFilters = false,
  hasActions = false,
  onMarkAsRead,
  onDelete,
  viewAllLink,
}) => {
  const [opened, setOpened] = useState(false);
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all");

  // **Filter Notifications**
  const filteredData = hasFilters
    ? data.filter((item) => {
        if (filter === "all") return true;
        if (filter === "unread")
          return item.createdAt && !item.label.includes("[Read]");
        if (filter === "read")
          return item.createdAt && item.label.includes("[Read]");
        return true;
      })
    : data;

  return (
    <Menu
      shadow="md"
      width={dropdownWidth}
      opened={opened}
      onChange={setOpened}
    >
      <Menu.Target>
        <Button className="bg-transparent hover:bg-transparent text-black hover:text-black h-max">
          {triggerBtn}
          {hasChevron && (
            <HiOutlineChevronDown
              className={`w-1/3 lg:w-1/6 h-full transition duration-200 ml-3 ${
                opened ? "rotate-180" : ""
              }`}
            />
          )}
        </Button>
      </Menu.Target>

      <Menu.Dropdown className="-ml-8">
        {/* Filters (if enabled) */}
        {hasFilters && (
          <div className="flex justify-between px-3 py-2 border-b text-gray-700 text-sm">
            <button
              onClick={() => setFilter("all")}
              className={`flex items-center gap-2 ${
                filter === "all" ? "font-bold text-blue-500" : ""
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("unread")}
              className={`flex items-center gap-2 ${
                filter === "unread" ? "font-bold text-green-500" : ""
              }`}
            >
              Unread
            </button>
            <button
              onClick={() => setFilter("read")}
              className={`flex items-center gap-2 ${
                filter === "read" ? "font-bold text-gray-500" : ""
              }`}
            >
              Read
            </button>
          </div>
        )}

        {/* List Items */}
        <div className="max-h-64 overflow-y-auto">
          {filteredData.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No items found</p>
          ) : (
            filteredData.map(({ id, label, createdAt, icon, link }) => (
              <div
                key={id}
                className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 text-sm"
              >
                <Link href={link || "#"} className="flex flex-col">
                  <div
                    className={`flex items-center gap-2 ${
                      createdAt && label.includes("[Read]")
                        ? "text-gray-500"
                        : "text-black font-semibold"
                    }`}
                  >
                    {icon} {label.replace("[Read]", "")}
                  </div>
                  {createdAt && (
                    <span className="text-xs text-gray-400">{createdAt}</span>
                  )}
                </Link>

                {hasActions && (
                  <div className="flex items-center gap-2">
                    {onMarkAsRead && (
                      <button
                        className="text-blue-500 hover:text-blue-700"
                        onClick={() => onMarkAsRead(id)}
                      >
                        ✓
                      </button>
                    )}
                    {onDelete && (
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => onDelete(id)}
                      >
                        🗑️
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* View All (if applicable) */}
        {viewAllLink && (
          <div className="border-t">
            <Link href={viewAllLink}>
              <button className="w-full text-center text-blue-500 py-2 hover:bg-gray-100">
                View All
              </button>
            </Link>
          </div>
        )}
      </Menu.Dropdown>
    </Menu>
  );
};
