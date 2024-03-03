import React from 'react';

const Table = ({ data }) => {
  return (
    <div>
      <h2>Table Component</h2>
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Customer Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.sno}>
              <td>{item.sno}</td>
              <td>{item.customer_name}</td>
              <td>{item.age}</td>
              <td>{item.phone}</td>
              <td>{item.location}</td>
              <td>{item.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
