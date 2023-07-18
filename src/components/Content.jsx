import { useState } from "react";


const Content = () => {

    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const addTodo = () => {
        setTodo([...todo, input]);
    };

    const todoDelete =(id)=>{
        let updateList = todo.filter((_,todo) => todo !== id);
        console.log(id);
        setTodo(updateList);
    }


    return (
        <div>
            <div className="topPart">
                <input type="text" value={input} onChange={handleChange} />
                <button onClick={addTodo}>Add</button>
            </div>
            <ul className="todoStyle">
                {todo.map((todo, i) => (
                    <li key={i}>
                        {todo}
                        <button onClick={()=>{todoDelete(i)}}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Content;