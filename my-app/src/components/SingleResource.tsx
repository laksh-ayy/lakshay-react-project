import React, { useEffect, useState } from "react";
import axios from "axios";

interface ResourceInterface {
  id?: number;
  color?: string;
  name?: string;
  year?: number;
  pantone_value?: string;
}

const SingleResource: React.FC = () => {
  const [data, setData] = useState<ResourceInterface>({});

  async function getUser() {
    let res = axios.get("https://reqres.in/api/unknown/2");
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
      <p>{data.color}</p>
      <p>{data.name}</p>
      <p>{data.year}</p>
      <p>{data.pantone_value} </p>
    </div>
  );
};

export default SingleResource;
