import del from '../images/icon-cross.svg'
const Todo = ({ arr, onDelete, handleChange, input }) => {
    let m = arr.length >= 2 ? 'items' : 'item'
    return (
        <section className="todolist">
            {arr.map((item, index) => {
                return (
                    <div key={index} className='lists'>
                        <div>
                        <input onChange={handleChange} type="checkbox" name='isTrue' checked={input.isTrue} id={item} />
                        <label style={input.isTrue ? {textDecoration:'line-through',color:'hsl(236, 9%, 61%)'} : null} htmlFor={item}>{item}</label>
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