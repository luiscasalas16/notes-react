import { useReducer } from "react";
import { InsertTask, TaskListView, taskInitialState, tasksReducer } from "./UseReducerAux";

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

export const UseReducer2 = () => {
  const { tasks, handleInsertTask, handleChangeTask, handleDeleteTask } = useReducerTasksValue();

  return (
    <>
      <p>reducer with hook:</p>
      <InsertTask onInsert={handleInsertTask}></InsertTask>
      <TaskListView tasks={tasks} onChange={handleChangeTask} onDelete={handleDeleteTask}></TaskListView>
    </>
  );
};
