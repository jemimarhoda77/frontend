import React from "react";
import "./Table.css";

const Table = ({ headings, children }) => {
  return (
    <table className="common_table">
      <thead>
        <tr>
          {headings.map((headings, index) => (
            <th key={index}>{headings}</th>
          ))}
        </tr>
      </thead>
      {children}
    </table>
  );
};

export default Table;
