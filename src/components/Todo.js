import React,{useRef} from 'react'
import del from '../images/icon-cross.svg'
const Todo = ({ arr, onDelete, handleChange, input,checkboxHandleChange,styled }) => {
     let t = useRef()
    let m = arr.length >= 2 ? 'items' : 'item'
    return (
        <section className="todolist">
            {arr.map((item, index) => {
                return (
                    <div key={index} className='lists'>
                        <div>
                        <input ref={t} onChange={()=> checkboxHandleChange(t)} type="checkbox" id={item} />
                        <label style={styled} htmlFor={item}>{item}</label>
                        </div>
                        <div>
                        <img src={del} onClick={() => onDelete(item)} alt="delete" />
                        </div>
                    </div>
                )
            })}
            <div className='items'>
                <p>{arr.length} {m} left</p>
                <p>Clear Completed</p>
            </div>
        </section>
    )
}
export default Todo