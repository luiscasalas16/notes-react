import { useReducer } from "react";
import { InsertTask, TaskListView, taskInitialState, tasksReducer } from "./UseReducerAux";

//reducer basic

export const UseReducer1 = () => {
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
