import { atom, selector } from "recoil";

export interface IToDoState {
    [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
    key: "toDo",
    default: {
        "To Do": ["a", "b"],
        doing: ["c", "d", "e"],
        done: ["f"],
    },
});
