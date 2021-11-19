export default interface Quak {
  id: number;
  user: string;
  content?: string;
  likes?: number;
  requaks?: number;
  replies?: number;
  type: "quak" | "requak" | "reply" | "citation";
  date: string;
  parent?: number;
}
