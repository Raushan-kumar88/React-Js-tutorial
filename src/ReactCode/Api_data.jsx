import React, { useState } from 'react'
import './Apidata.css';
import ApiTable from "./ApiTable";
import { Users } from "./users";
function Api_data() {
  const [query, setQuery] = useState("");
    const keys = ["first_name", "last_name", "email"];
    const search = (data) => {
      return data.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(query))
      );
    };
  return (
    <div className=' api `mx-auto  mb-4 py-5 px-32 bg-gradient-to-br  h-fit`'>
        <input
          className="search"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      {<ApiTable data={search(Users)} />}
    </div>
  );
}

export default Api_data

