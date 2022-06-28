interface ToDo {
  id: number,
  text: string;
  completed: boolean;
};

type ToggleTodo = (selectedTodo: ToDo) => void;

interface ToDoItemProps {
  todo: ToDo;
  toggleTodo: ToggleTodo;
};