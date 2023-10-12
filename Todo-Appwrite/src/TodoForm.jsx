import  { useState } from "react";
import { ID } from "appwrite";
import { databases } from './appwrite/auth';
import conf from "./conf/conf";



const TodoForm = () => {
    const [todo,setTodo]=useState("");

    const handlSubmit=(e)=>{
        e.preventDefault();
       const promise= databases.createDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,ID.unique(),{
            title:todo
        })

        promise.then(
            function(response){
                console.log(response);
            },
            function(error){
                console.log(error);
            } )
    }


  return (
    <>
      <div className=" w-3/6 h-210 ml-80 mt-20 flex border-black border-2 rounded-md">
        <input
          type="text"
          className=" w-11/12 h-12 p-4 outline-none rounded-l-md"
          placeholder="Enter your Todo"
          onChange={(e)=>{
            setTodo(e.target.value)
          }}
        />
        <button onClick={handlSubmit} className="w-16 bg-green-500 text-3xl rounded-r-md">+</button>
      </div>
    </>
  );
};

export default TodoForm;
