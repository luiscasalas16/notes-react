import { useState } from "react";

interface Task {
  id: number;
  text: string;
  done: boolean;
}

export const InsertTask = ({ onInsert }: { onInsert: (text: string) => void }) => {
  const [text, setText] = useState("");

  return (
    <p>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      &nbsp;
      <button
        className="btn btn-primary"
        onClick={() => {
          if (text !== "") {
            setText("");
            onInsert(text);
          }
        }}>
        Insert
      </button>
    </p>
  );
};

const TaskView = ({ task, onChange, onDelete }: { task: Task; onChange: (id: number) => void; onDelete: (id: number) => void }) => {
  return (
    <p>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => {
          onChange(task.id);
        }}
      />
      &nbsp;
      <span>{task.text}</span>
      &nbsp;
      <button className="btn btn-primary" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </p>
  );
};

export const TaskListView = ({ tasks, onChange, onDelete }: { tasks: Task[]; onChange: (id: number) => void; onDelete: (id: number) => void }) => {
  return (
    <>
      {tasks.map((task) => (
        <TaskView key={task.id} task={task} onChange={onChange} onDelete={onDelete} />
      ))}
    </>
  );
};

export const taskInitialState = [
  { id: 0, text: "Task 1", done: false },
  { id: 1, text: "Task 2", done: false },
];

interface TasksState extends Array<Task> {}

type TasksActions =
  | { type: "insert"; payload: { id: number; text: string } }
  | { type: "delete"; payload: { id: number } }
  | { type: "chance"; payload: { id: number } };

export function tasksReducer(state: TasksState, action: TasksActions): TasksState {
  switch (action.type) {
    case "insert": {
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        },
      ];
    }
    case "delete": {
      return state.filter((t) => t.id !== action.payload.id);
    }
    case "chance": {
      return state.map((t) => {
        if (t.id === action.payload.id) {
          return {
            ...t,
            done: !t.done,
          };
        } else {
          return t;
        }
      });
    }
    default: {
      throw new Error();
    }
  }
}
