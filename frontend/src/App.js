import './App.css';
import DataTable from 'react-data-table-component';
import { useState,useEffect } from 'react';
import Axios from 'axios'


function App() {
  const colNames=[
    {
      name: "Sno",
      selector: row => row.sno
    },
    {
      name: "Customer Name",
      selector: row => row.customer_name
    },
    {
      name: "Age",
      selector: row => row.age
    },
    {
      name: "PhNo",
      selector: row => row.phone
    },
    {
      name: "Location",
      selector: row => row.location
    },
    {
      name: "CreatedAt-Date",
      selector: row=>row.created_at.split("T")[0],
      sortable: true
    },
    {
      name: "CreatedAt-Time",
      selector: row=>row.created_at.split("T")[1].substring(0,8),
      sortable: true
    }
  ];


  const [records,Setrecords] = useState();
  const [search_name,Setsearch_name] = useState("");
  const fetchData = async ()=>{
    await Axios.get('http://localhost:9000/data/').then((res)=>{
      Setrecords(res.data);
      console.log("success");
    }).catch((error)=>{
      console.log(error);
    })
  }

  useEffect(()=>{
    fetchData();
  },[])
  
  const handleChange = (e) =>{
    Setsearch_name(e.target.value)
      if(e.target.value==="")return fetchData();
      const newData = records.filter(row =>
        {
          return row.customer_name.toLowerCase().includes(e.target.value.toLowerCase())||row.location.toLowerCase().includes(e.target.value.toLowerCase())
        })
        Setrecords(newData);
  }
  const handleSubmit = (search_name) =>{
    if(search_name==="")return fetchData()
    Setrecords(records.filter(row=>{
      return row.customer_name.toLowerCase()===search_name||row.location.toLowerCase()===search_name
    }))
    Setsearch_name("");
  }
  return (
    <div className="App">
      <div className='search_box'>
        <input type='text' onChange={handleChange} placeholder='search'style={{height: 15,width: 150}} value={search_name}/>
        <button onClick={()=>{handleSubmit(search_name)}}>search</button>
      </div>
      <DataTable
        columns={colNames}
        data={records}
        pagination 
        fixedHeader
        paginationPerPage={20}
      ></DataTable>
    </div>
  );
}

export default App;