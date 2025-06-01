import { atom } from "jotai";

// สร้าง State สำหรับ Todo List
export const todosAtom = atom<string[]>([]);
