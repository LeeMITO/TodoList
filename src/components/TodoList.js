import { memo, useCallback } from 'react'; //
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = memo(({ todos, onRemove, onToggle, onChangeSelectedTodo, onInsertToggle })  => { //
    const rowRenderer = useCallback(({ index, key, style }) => { 
        const todo = todos[index];
        return (
            <TodoListItem todo={todo} key={key} onRemove={onRemove} onToggle={onToggle} style={style} onChangeSelectedTodo={onChangeSelectedTodo} onInsertToggle={onInsertToggle}/>
        )
    }, [ todos, onRemove, onToggle, onChangeSelectedTodo, onInsertToggle ]);
    return (
        <div className="TodoList">
            <List className="TodoList" 
                width={512} 
                height={513} 
                rowCount={todos.length} 
                rowHeight={57} 
                rowRenderer={rowRenderer} 
                list={todos} 
                style={{ outline: 'none' }} 
            />
        </div>
    );
});

export default TodoList;