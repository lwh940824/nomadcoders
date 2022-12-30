import { Draggable } from "@hello-pangea/dnd";
import React from "react";
import styled from "styled-components";

const Card = styled.div`
    border-radius: 5px;
    margin-bottom: 5px;
    padding: 10px 10px;
    background-color: ${(props) => props.theme.cardColor};
`;

interface IDragabbleCardProps {
    toDo: string;
    index: number;
}

function DragabbleCard({ toDo, index }: IDragabbleCardProps) {
    return (
        <Draggable key={toDo} draggableId={toDo} index={index}>
            {(magic) => (
                <Card
                    ref={magic.innerRef}
                    {...magic.draggableProps}
                    {...magic.dragHandleProps}
                >
                    {toDo}
                </Card>
            )}
        </Draggable>
    );
}

export default React.memo(DragabbleCard);
