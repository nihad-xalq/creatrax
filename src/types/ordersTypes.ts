export interface Order {
  id: number;
  taskName: string;
  description: string;
  priority: "Yüksək" | "Orta" | "Aşağı"; // Use union type
  assignee: string;
  startDate: string;
  dueDate: string;
  status: string;
  comments: string;
  clientId: number;
}
