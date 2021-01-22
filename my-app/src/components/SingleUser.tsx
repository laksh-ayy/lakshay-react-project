import React, { useEffect, useState } from "react";
import axios from "axios";

interface UserInterface {
  id?: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  avatar?: string;
}

const SingleUser: React.FC = () => {
  const [data, setData] = useState<UserInterface>({});

  async function getUser() {
    let res = axios.get("https://reqres.in/api/users/2");
    if ((await res).status === 200) {
      console.log(res);
      setData((await res).data.data);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h1>Single User</h1>
      <p>{data.id}</p>
      <p>{data.email}</p>
      <p>{data.first_name}</p>
      <p>{data.last_name}</p>
      <img src={data.avatar} />
    </div>
  );
};

export default SingleUser;
