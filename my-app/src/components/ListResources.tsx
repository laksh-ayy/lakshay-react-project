import React, { useEffect, useState } from "react";
import axios from "axios";

interface ResourcesInterface {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

const ListResources: React.FC = () => {
  const [data, setData] = useState<[]>([]);

  async function getUsers() {
    let res = axios.get("https://reqres.in/api/unknown");
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
        data.map((user: ResourcesInterface) => (
          <table>
            <tr>
              <td>{user.id}</td>
              <td>
                <p>{user.name}</p>
              </td>
              <td>{user.color}</td>
              <td>{user.year}</td>
              <td>{user.pantone_value}</td>
            </tr>
          </table>
        ))}
    </div>
  );
};

export default ListResources;
