import { useReducer, useState } from "react";

/*
useReducer is a React Hook that lets you add a reducer to your component.

const [state, dispatch] = useReducer(reducer, initialArg, init?)

Parameters
  * reducer: The reducer function that specifies how the state gets updated. It
  must be pure, should take the state and action as arguments, and should return
  the next state. State and action can be of any types.
  * initialArg: The value from which the initial state is calculated. It can be a
  value of any type. How the initial state is calculated from it depends on the
  next init argument.
  * optional init: The initializer function that should return the initial state.
  If it’s not specified, the initial state is set to initialArg. Otherwise, the
  initial state is set to the result of calling init(initialArg).

Returns
  * The current state. During the first render, it’s set to init(initialArg) or
  initialArg (if there’s no init).
  * The dispatch function that lets you update the state to a different value and
  trigger a re-render.
*/

interface Task {
  id: number;
  text: string;
  done: boolean;
}

const InsertTask = ({ onInsert }: { onInsert: (text: string) => void }) => {
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

const TaskListView = ({ tasks, onChange, onDelete }: { tasks: Task[]; onChange: (id: number) => void; onDelete: (id: number) => void }) => {
  return (
    <>
      {tasks.map((task) => (
        <TaskView key={task.id} task={task} onChange={onChange} onDelete={onDelete} />
      ))}
    </>
  );
};

const taskInitialState = [
  { id: 0, text: "Task 1", done: false },
  { id: 1, text: "Task 2", done: false },
];

interface TasksState extends Array<Task> {}

type TasksActions =
  | { type: "insert"; payload: { id: number; text: string } }
  | { type: "delete"; payload: { id: number } }
  | { type: "chance"; payload: { id: number } };

function tasksReducer(state: TasksState, action: TasksActions) {
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

//reducer basic

const Example1 = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, taskInitialState);

  function handleInsertTask(text: string) {
    let max =
      tasks.length === 0
        ? 1
        : tasks.reduce(function (previous, current) {
            return previous.id > current.id ? previous : current;
          }).id;

    dispatch({ type: "insert", payload: { id: max + 1, text: text } });
  }

  function handleChangeTask(id: number) {
    dispatch({ type: "chance", payload: { id: id } });
  }

  function handleDeleteTask(id: number) {
    dispatch({ type: "delete", payload: { id: id } });
  }

  return (
    <>
      <p>reducer basic:</p>
      <InsertTask onInsert={handleInsertTask}></InsertTask>
      <TaskListView tasks={tasks} onChange={handleChangeTask} onDelete={handleDeleteTask}></TaskListView>
    </>
  );
};

//reducer with hook

const useReducerTasksValue = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, taskInitialState);

  function handleInsertTask(text: string) {
    let max =
      tasks.length === 0
        ? 1
        : tasks.reduce(function (previous, current) {
            return previous.id > current.id ? previous : current;
          }).id;

    dispatch({ type: "insert", payload: { id: max + 1, text: text } });
  }

  function handleChangeTask(id: number) {
    dispatch({ type: "chance", payload: { id: id } });
  }

  function handleDeleteTask(id: number) {
    dispatch({ type: "delete", payload: { id: id } });
  }

  return {
    tasks,
    handleInsertTask,
    handleChangeTask,
    handleDeleteTask,
  };
};

const Example2 = () => {
  const { tasks, handleInsertTask, handleChangeTask, handleDeleteTask } = useReducerTasksValue();

  return (
    <>
      <p>reducer with hook:</p>
      <InsertTask onInsert={handleInsertTask}></InsertTask>
      <TaskListView tasks={tasks} onChange={handleChangeTask} onDelete={handleDeleteTask}></TaskListView>
    </>
  );
};

//default

export const UseReducer = () => {
  return (
    <>
      <h2>Hooks / useReducer</h2>
      <hr />
      <Example1></Example1>
      <Example2></Example2>
    </>
  );
};
