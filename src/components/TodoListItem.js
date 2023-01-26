import { memo } from 'react'; //
import { MdCheckBoxOutlineBlank, MdCheckBox, MdDeleteSweep, MdRemoveCircleOutline, MdModeEditOutline } from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';


const TodoListItem = memo(({ todo, onRemove, onToggle, onChangeSelectedTodo, onInsertToggle, style }) => {
    const { id, text, checked } = todo;

    return (
        <div className="TodoListItem-virtualized" style={style}>
            <div className='TodoListItem'>
                <div className={cn('checkbox', { checked: checked })} onClick={() => onToggle(id)}>
                    {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />} 
                    <div className='text'>{text}</div>
                </div>
                <div 
                    className='edit' 
                    onClick={() => {
                        onChangeSelectedTodo(todo);
                        onInsertToggle();
                    }}
                >
                    <MdModeEditOutline />
                </div>
                <div className='remove' onClick={() => onRemove(id)}>
                    <MdDeleteSweep />
                </div>
            </div>
        </div>
    );
});

export default TodoListItem;