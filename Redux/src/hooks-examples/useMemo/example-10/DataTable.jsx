import React from 'react';

function DataTable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Original</th>
          <th>Doubled</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.original}</td>
            <td>{item.doubled}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;