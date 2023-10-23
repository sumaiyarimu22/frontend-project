import TableRow from "./TableRow";
const TableView = ({ employees, handleDelete, handleEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Salary</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.length > 0 ? (
          employees.map((employee, index) => (
            <TableRow
              key={employee.id}
              employee={employee}
              index={index}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))
        ) : (
          <tr>
            <td>No employee</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TableView;
