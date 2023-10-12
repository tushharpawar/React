import { databases } from "./appwrite/auth";
import { useState, useEffect } from "react";
import conf from "./conf/conf";

const Todos = () => {
  const [todos, setTodos] = useState();

  useEffect(() => {
    const getTodos = databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId
    );
    getTodos.then(
      function (response) {
        setTodos(response.documents);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);


  const deleteTodo=(id)=>{
        const promise=databases.deleteDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,id)
        promise.then(
          function(response){
            console.log(response);
          },
          function(error){
            console.log(error);
          }
        )
             
  }

  return (
    <>
      <div>
        {todos &&
          todos.map((item) => (
            <div key={item.$id}>
              <div className="w-3/6 h-12 text-center p-3 border-black border-2 rounded-md text-xl ml-80 mt-20 bg-purple-400 flex justify-between items-center">
                <div>
                  <p className="text-black text-lg">{item.todos}</p>
                </div>
                <div>
                  <span onClick={()=>{
                    deleteTodo(item.$id)
                  }} className=" text-red-700 cursor-pointer">Delete</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Todos;
