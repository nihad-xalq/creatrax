"use client";

import { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaCheckCircle, FaTimesCircle, FaTrashAlt } from "react-icons/fa";
import { PageTitle } from "@/components/PageTitle";

interface Notification {
  id: number;
  label: string;
  icon: React.ReactNode;
  createdAt: string;
  isRead: boolean;
}

const initialNotifications: Notification[] = [
  {
    id: 1,
    label: "Yeni sifariş alındı",
    icon: <IoNotificationsOutline className="text-green-500" />,
    createdAt: "15 mins ago",
    isRead: false,
  },
  {
    id: 2,
    label: "Layihə yeniləməsi",
    icon: <IoNotificationsOutline className="text-yellow-500" />,
    createdAt: "30 mins ago",
    isRead: false,
  },
  {
    id: 3,
    label: "Görüş təyin edilib",
    icon: <IoNotificationsOutline className="text-blue-500" />,
    createdAt: "1 hour ago",
    isRead: false,
  },
  {
    id: 4,
    label: "Yeni müştəri qoşuldu",
    icon: <IoNotificationsOutline className="text-purple-500" />,
    createdAt: "2 hours ago",
    isRead: false,
  },
];

export const NotificationsView = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all");

  // **Filter Notifications**
  const filteredNotifications = notifications.filter((notif) => {
    if (filter === "all") return true;
    return filter === "unread" ? !notif.isRead : notif.isRead;
  });

  // **Mark as Read/Unread**
  const toggleReadStatus = (id: number) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, isRead: !notif.isRead } : notif
      )
    );
  };

  // **Delete Notification**
  const deleteNotification = (id: number) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  // **Bulk Actions**
  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notif) => ({ ...notif, isRead: true }))
    );
  };

  const deleteAll = () => {
    setNotifications([]);
  };

  return (
    <section>
      <PageTitle title="Bildirişlər" />

      {/* Filter & Actions */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-3">
          <button
            className={`px-4 py-2 rounded-md text-sm ${
              filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilter("all")}
          >
            Hamısı
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm ${
              filter === "unread" ? "bg-green-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilter("unread")}
          >
            Oxunmamış
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm ${
              filter === "read" ? "bg-gray-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilter("read")}
          >
            Oxunmuş
          </button>
        </div>

        {notifications.length > 0 && (
          <div className="flex gap-3">
            <button
              className="px-4 py-2 bg-green-500 text-white rounded-md text-sm hover:bg-green-600"
              onClick={markAllAsRead}
            >
              Hamısını Oxundu Kimi İşarələ
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-md text-sm hover:bg-red-600"
              onClick={deleteAll}
            >
              Hamısını Sil
            </button>
          </div>
        )}
      </div>

      {/* Notifications List */}
      <div className="bg-white shadow-md rounded-lg p-4">
        {filteredNotifications.length === 0 ? (
          <p className="text-center text-gray-500">Bildiriş yoxdur.</p>
        ) : (
          <ul className="space-y-3">
            {filteredNotifications.map(
              ({ id, label, icon, createdAt, isRead }) => (
                <li
                  key={id}
                  className="flex justify-between items-center py-3 px-3 border-b last:border-none first:pt-0 last:pb-0 !mt-0"
                >
                  <div className="flex items-center gap-3">
                    {icon}
                    <div className="flex flex-col gap-0">
                      <p
                        className={`font-medium ${
                          isRead ? "text-gray-500" : "text-black"
                        }`}
                      >
                        {label}
                      </p>
                      <span className="text-xs text-gray-400">{createdAt}</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => toggleReadStatus(id)}
                    >
                      {isRead ? <FaTimesCircle /> : <FaCheckCircle />}
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => deleteNotification(id)}
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </li>
              )
            )}
          </ul>
        )}
      </div>
    </section>
  );
};
