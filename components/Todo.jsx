import React, { useState } from "react";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons";

export default function Todo(props) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseOver = () => {
    setIsMouseOver(true);
  };
  const handleMouseOut = () => {
    setIsMouseOver(false);
  };

  return (
    <div
      className="border-bottom p-1 py-2 fs-2 d-flex gap-2"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <span
        className="me-auto"
        style={props.completed ? { textDecoration: "line-through" } : null}
      >
        {props.title}
      </span>
      {isMouseOver && (
        <>
          <button className="btn btn-success" onClick={() => props.onmark()}>
            <IconCheck />
          </button>
          <button className="btn btn-secondary" onClick={() => props.moveUps()}>
            <IconArrowUp />
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => props.moveDowns()}
          >
            <IconArrowDown />
          </button>
          <button className="btn btn-danger" onClick={() => props.delete()}>
            <IconTrash />
          </button>
        </>
      )}
    </div>
  );
}
