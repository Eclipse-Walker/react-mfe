import { atom, useAtom } from "jotai";
import { Task } from "../config/types";

const initialData: Task[] = [
    {
        id: 1,
        text: "Peter Parker",
        completed: false,
    },
    {
        id: 2,
        text: "Tony Stark",
        completed: true,
    },
    {
        id: 3,
        text: "Bruce Wayne",
        completed: false,
    }
]

const listAtom = atom(initialData as Task[]);

const useList = () => useAtom(listAtom);
/* 
const useSetList = () => useSetAtom(listAtom);
const useList = () => useAtomValue(listAtom);

export { useList, useSetList };
*/

export default useList;
