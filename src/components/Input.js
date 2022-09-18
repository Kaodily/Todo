const Input = ({handleSubmit,handleChange,input}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} name='todoInput' value={input.todoInput} type="text" placeholder="Create a new todo" className="input"/>
        </form>
    )
}
export default Input