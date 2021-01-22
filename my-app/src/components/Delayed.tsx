import React, { useEffect, useState } from "react";
import axios from "axios";

interface UsersInterface {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const Delayed: React.FC = () => {
  const [data, setData] = useState<[]>([]);

  async function getUsers() {
    let res = axios.get("https://reqres.in/api/users?delay=3");
    if ((await res).status === 200) {
      console.log(res);
      setData((await res).data.data);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      {data.length &&
        data.map((user: UsersInterface) => (
          <table>
            <tr>
              <td>{user.id}</td>
              <td>
                <img src={user.avatar} />
              </td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          </table>
        ))}
    </div>
  );
};

export default Delayed;
