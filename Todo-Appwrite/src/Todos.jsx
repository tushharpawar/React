

const Todos = (todo) => {

 
  return (
    <div className='w-3/6 h-210 ml-80 mt-20 border-gray-400 '>
          <p className="text-black text-lg">Your todo: {todo.title}</p>
    </div>
  )
}

export default Todos