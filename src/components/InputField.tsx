import "./styles.css";
import { useRef } from 'react';

interface Props{
  todo:string,
  setTodo: React.Dispatch<React.SetStateAction<string>>,
  handleClick:(e:React.FormEvent)=>void
}
const InputField:React.FC<Props>  = ({todo, setTodo,handleClick}) => {

    const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form className="input" onSubmit={(e)=>{
        handleClick(e)
         inputRef.current?.blur()
        }}>
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter a Task"
        value={todo}
        onChange={(e)=> setTodo(e.target.value) }
        className="input__box"
      />
      <button type="submit" className="input_submit">
        GO
      </button>
    </form>
  );
};

export default InputField;