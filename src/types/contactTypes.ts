import { JSX } from "react";

export interface ContactItem {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
  details?: string[];
}
