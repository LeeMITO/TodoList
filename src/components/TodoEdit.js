import { useState, useCallback, useEffect} from "react";
import './TodoEdit.scss';

function TodoEdit({ insertToggle, selectedTodo, onUpdate }) {
    const [value, setValue] = useState('');
    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        (e) => {
            onUpdate(selectedTodo.id, value);
            setValue(''); 
            e.preventDefault();
        },
        [onUpdate, value],
    );

    useEffect(() => {
        if(selectedTodo) {
            setValue(selectedTodo.text);
        }
    }, [selectedTodo]);

    return (
        <div className="background">
            <form onSubmit={onSubmit} className='edit_insert'>
                <h2>Edit Content</h2>
                <input onChange={onChange} value={value} placeholder='할 일을 입력하세요' />
                <button type="submit">EDIT</button>
            </form>
        </div>
    );
}

export default TodoEdit;