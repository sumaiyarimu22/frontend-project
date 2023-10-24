import { useState } from "react";
import Swal from "sweetalert2";

const EditForm = ({
  selectedEmployee,
  employees,
  setEmployees,
  setIsEditing,
}) => {
  const { id } = selectedEmployee;

  const [editInfo, setEditInfo] = useState({
    firstName: selectedEmployee.firstName,
    lastName: selectedEmployee.lastName,
    email: selectedEmployee.email,
    salary: selectedEmployee.salary,
    date: selectedEmployee.date,
  });

  const { firstName, lastName, email, salary, date } = editInfo;

  const handleUpdate = (e) => {
    const { name, value } = e.target;
    setEditInfo({ ...editInfo, [name]: value });
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "All fildes are required",
        showCancelButton: true,
      });
    }

    const updateEmployees = employees.map((employee) =>
      employee.id === id ? { id, ...editInfo } : employee
    );
    setEmployees(updateEmployees);
    setIsEditing(false);

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${firstName} ${lastName}'s data has been updated`,
      showConfirmButton: false,
      timer: 1500,
    });
  };
  console.log(editInfo);
  return (
    <div className='form-area'>
      <form onSubmit={handleUpdateSubmit}>
        <h2 className='form-title'>Edit Employee</h2>
        <label htmlFor='first_name'>First Name:</label>
        <input
          type='text'
          className='input'
          name='firstName'
          value={firstName}
          onChange={handleUpdate}
        />

        <label htmlFor='last_name'>Last Name:</label>
        <input
          type='text'
          className='input'
          name='lastName'
          value={lastName}
          onChange={handleUpdate}
        />

        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          className='input'
          name='email'
          value={email}
          onChange={handleUpdate}
        />

        <label htmlFor='salary'>Salary:</label>
        <input
          type='number'
          className='input'
          name='salary'
          value={salary}
          onChange={handleUpdate}
        />

        <label htmlFor='date'>Date:</label>
        <input
          type='date'
          className='input'
          name='date'
          value={date}
          onChange={handleUpdate}
        />

        <div className='input-btns'>
          <button type='submit' className='add-btn'>
            Update
          </button>
          <button className='cancle-btn'>cancle</button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
