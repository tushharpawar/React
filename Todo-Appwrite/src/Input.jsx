import {useState} from 'react'
import { Client, Databases, ID } from "appwrite";
import conf from './conf/conf';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(conf.appwriteProjectId);

const databases = new Databases(client);


const Input = () => {
  const [todo,setTodo]=useState("");
  const [todos,setTodos]=useState([]);
    
    const todoHandler=()=>{
      const promise = databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),
        {"title":todo}
    );
    promise.then(function (response) {
        console.log(response);
        setTodos([...todo,{todo}]);
        todos.map((todo)=>{
          return(
            
           <>
             <li>
              <p key={todo.$id} className=' text-xl text-black'>{todo.title}</p>
            </li>
           </>
              
          )
         })
    }, function (error) {
        console.log(error);
    });
    }

    // let renderTask=<h2>No task here</h2>
    // renderTask=
  return (
    <>
    <h1 className='text-center text-xl font-bold mt-3 '>Hi! {todo.email}</h1>
        <div className=" w-3/6 h-210 ml-80 mt-20 flex border-black border-2 rounded-md">
        
                <input
                onChange={(e)=>setTodo(e.target.value)}
                 type="text" className=" w-11/12 h-12 p-4 outline-none rounded-l-md" placeholder="Enter your Todo"/>
                <button 
                onClick={todoHandler}
                className="w-16 bg-green-500 text-3xl rounded-r-md">+</button>
               
        </div>
        <div className='w-3/6 h-12 text-center p-3 border-black border-2 rounded-md text-xl ml-80 mt-20 bg-purple-400 '>
                 
        </div>
    </>
  )
}

export default Input