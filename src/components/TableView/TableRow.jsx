const TableRow = ({ employee, index, handleDelete, handleEdit }) => {
  const { id, firstName, lastName, email, salary, date } = employee;

  const formatcurrency = (amount) => {
    return new Intl.NumberFormat("en-Us", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{formatcurrency(salary)}</td>
      <td>{date}</td>
      <td>
        <div className='user-btn'>
          <button onClick={() => handleEdit(id)}>Edit</button>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
