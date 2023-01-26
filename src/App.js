import { useState, useRef, useCallback } from 'react';
import ToDoEdit from './components/TodoEdit';
import ToDoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import data from './data/data.js';
import Content from "./components/Content";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 하기',
      checked: true,
    },
    {
      id: 3,
      text: '투두리스트 만들기',
      checked: false,
    },
  ]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);

  const nextId = useRef(4);
  const onInsertToggle = useCallback(() => {
    if (selectedTodo) {
      setSelectedTodo((selectedTodo) => null);
    }
    setInsertToggle((prev) => !prev);
  }, [selectedTodo]);

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo((selectedTodo) => todo);
  };

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo)); 
    nextId.current++; 
  }, []);

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);
  const onUpdate = useCallback(
    (id, text) => {
      onInsertToggle();

      setTodos((todos) =>
        todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)),
      );
    },
    [onInsertToggle],
  );
  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);
  return (
    <div className='app'>
      <Content />
      <TodoTemplate>
        <ToDoInsert onInsert={onInsert} />
        <TodoList
          todos={todos}
          onToggle={onToggle}
          onRemove={onRemove}
          onChangeSelectedTodo={onChangeSelectedTodo}
          onInsertToggle={onInsertToggle}
        />
        {insertToggle && (
          <ToDoEdit
            onInsert={onInsert}
            selectedTodo={selectedTodo}
            onInsertToggle={onInsertToggle}
            onUpdate={onUpdate}
            insertToggle={insertToggle}
          />
        )}
      </TodoTemplate>
    </div>
  );
}

export default App;
