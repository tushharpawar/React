const Header = () => {
  
  return (
    <>
        <div className=' w-full bg-purple-400 flex justify-center'>
              <div className='p-6 text-xl font-bold text-center'>Todo App</div>

              <div>
                <button  className=" p-2 m-4 rounded-md border-black border-2 text-xl font-semibold w-auto">Logout</button>
              </div>
        </div>
    </>
    
  )
}

export default Header