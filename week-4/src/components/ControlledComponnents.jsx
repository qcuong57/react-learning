import React from "react";
import { useState } from "react";

function ControlledComponnents() {
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <input
        type="text"
        value={tasks}
        onChange={(e) => setTasks(e.target.value)}
      />
    </>
  );
}

export default ControlledComponnents;
