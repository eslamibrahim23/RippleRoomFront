import React, { useEffect, useState } from "react";
import UserDetails from "./UserDetails";
import axios from "axios";

function Users() {
  const [user, setUserData] = useState([]);
  useEffect(() => {
    const fetchAllUsers = async () => {
      const getAllAsers = await axios.get(
        "https://rippleroomback.onrender.com/user/users"
      );
      console.log(getAllAsers);

      setUserData(getAllAsers.data);
    };
    fetchAllUsers();
  }, []);


  // const [search, setSearch] = useState("");
  const [data, setData] = useState({
    search: "",
  });

  const onChaneHandler = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  const searched = user.filter((u) =>
    u.userName.toLowerCase().includes(`${data.search.toLowerCase()}`)
  );

  return (
    <>
      <div className="w-full h-full rounded-e-3xl bg-violet-900 flex flex-col ">
        <div className="p-5 w-12/12 h-full flex flex-col ">
          <h1 className="w-12/12 mx-auto text-white text-4xl">Messages</h1>
          <div className="w-11/12 mt-5 mx-auto">
            <input
              value={data.search}
              onChange={onChaneHandler}
              className="w-full mx-auto  p-2 rounded border-none focus:outline-violet-800 outline-offset-1"
              type="text"
              name="search"
              id="search"
              placeholder="Search here ..."
            />
          </div>

          <div className="mt-5 h-5/6 overflow-auto">
            {searched
              ? searched.map((u, i) => {
                  return (
                    <div key={i}>
                      <UserDetails user={u} />
                    </div>
                  );
                })
              : "loading"}
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;