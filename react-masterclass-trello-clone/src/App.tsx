import {
    DragDropContext,
    Draggable,
    Droppable,
    DropResult,
} from "@hello-pangea/dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import Board from "./components/Board";

const Wrapper = styled.div`
    display: flex;
    max-width: 680px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
const Boards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    width: 100%;
`;

function App() {
    const [toDos, setToDos] = useRecoilState(toDoState);
    const onDragEnd = (info: DropResult) => {
        console.log(info);
        const { destination, draggableId, source } = info;
        if (!destination) return;
        if (destination?.droppableId === source.droppableId) {
            // same board movement.
            setToDos((oldToDos) => {
                const boardCopy = [...oldToDos[source.droppableId]];
                const taskObj = boardCopy[source.index];
                boardCopy.splice(source.index, 1);
                boardCopy.splice(destination?.index, 0, taskObj);
                return {
                    ...oldToDos,
                    [source.droppableId]: boardCopy,
                };
            });
        }
        if (destination?.droppableId !== source.droppableId) {
            console.log("is not same");
            // cross board movement.
            setToDos((allBoard) => {
                const sourceBoard = [...allBoard[source.droppableId]];
                const taskObj = sourceBoard[source.index];
                const targetBoard = [...allBoard[destination?.droppableId]];
                sourceBoard.splice(source.index, 1);
                targetBoard.splice(destination?.index + 1, 0, taskObj);
                return {
                    ...allBoard,
                    [source.droppableId]: sourceBoard,
                    [destination.droppableId]: targetBoard,
                };
            });
        }
    };
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Wrapper>
                <Boards>
                    {Object.keys(toDos).map((boardId) => (
                        <Board
                            boardId={boardId}
                            key={boardId}
                            toDos={toDos[boardId]}
                        />
                    ))}
                </Boards>
            </Wrapper>
        </DragDropContext>
    );
}

export default App;
