import del from '../images/icon-cross.svg'
const Todo = ({ arr }) => {
    let m = arr.length >= 2 ? 'items' : 'item'
    return (
        <section className="todolist">
            {arr.map((item, index) => {
                return (
                    <div key={index} className='lists'>
                        <div>
                        <input type="checkbox" id={item} />
                        <label htmlFor={item}>{item}</label>
                        </div>
                        <div>
                        <img src={del} alt="delete" />
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