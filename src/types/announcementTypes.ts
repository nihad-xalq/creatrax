export interface Announcement {
  id: number;
  title: string;
  publisher: string;
  description: string;
  date: string;
  category: string;
  priority: "low" | "medium" | "high";
  status: "active" | "archived" | "draft";
  attachments?: string[];
  readBy?: number[];
  expirationDate?: string;
  tags?: string[];
  authorId?: number;
}
