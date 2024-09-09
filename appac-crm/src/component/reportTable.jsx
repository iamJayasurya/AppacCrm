import React from 'react';

function ReportTable({ reportdata, onEdit }) {
  return (
    <tr className="odd">
      <td>{reportdata.index + 1}</td> {/* Assuming index is handled in parent */}
      <td>{reportdata.reportdate}</td>
      <td>{reportdata.Client}</td>
      <td>{reportdata.startEnd}</td>
      <td>{reportdata.Totalhrs}</td>
      <td>{reportdata.description}</td>
      <td className="editor">
        <button onClick={() => onEdit(reportdata)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
            <path
              fill="#787878"
              d="M21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1m-15 .76V17a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .71-.29l6.92-6.93L21.71 8a1 1 0 0 0 0-1.42l-4.24-4.29a1 1 0 0 0-1.42 0l-2.82 2.83l-6.94 6.93a1 1 0 0 0-.29.71m10.76-8.35l2.83 2.83l-1.42 1.42l-2.83-2.83ZM8 13.17l5.93-5.93l2.83 2.83L10.83 16H8Z"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
}

export default ReportTable;
