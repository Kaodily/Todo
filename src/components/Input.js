const Input = ({handleSubmit,handleChange,input}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input onKeyUp={handleChange}  type="text" placeholder="Create a new todo" className="input"/>
        </form>
    )
}
export default Input