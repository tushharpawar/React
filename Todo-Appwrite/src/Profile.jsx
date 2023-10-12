import { useEffect, useState } from "react";
import { account } from "./appwrite/auth";
import { useNavigate } from "react-router-dom";
import TodoForm from "./TodoForm";
import Todos from "./Todos";

const Profile = () => {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    const getData = account.get();
    getData.then(
      function (response) {
        setUserDetails(response);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {userDetails ? (
        <>
          <div className=" w-full bg-purple-400 flex justify-center">
            <div className="p-6 text-xl font-bold text-center">Todo App</div>

            <div>
              <button
                className=" p-2 m-4 rounded-md border-black border-2 text-xl font-semibold w-auto"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>

          <h1 className="text-center text-xl font-bold mt-3 ">
            Hi! {userDetails.name}
          </h1>
          <TodoForm />
          <Todos/>
        </>
      ) : (
        <>
          <div>
            <p>Loading...</p>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
