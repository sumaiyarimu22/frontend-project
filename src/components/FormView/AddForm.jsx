import { useState } from "react";
import Swal from "sweetalert2";

const INIT_EMPLOYEE = {
  firstName: "",
  lastName: "",
  email: "",
  salary: "",
  date: "",
};

const AddhtmlForm = ({ employees, setEmployees, setIsAdding }) => {
  const [newEmployee, setNewEmployee] = useState({ ...INIT_EMPLOYEE });
  const { firstName, lastName, email, salary, date } = newEmployee;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !salary || !date) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Must be all fields are required",
        showConfirmButton: true,
      });
    }
    const id = employees.length + 1;
    const employeeWithId = {
      id,
      ...newEmployee,
    };

    setEmployees([...employees, employeeWithId]);

    setIsAdding(false);
    Swal.fire({
      icon: "success",
      title: "added",
      text: `${firstName} ${lastName} data has been added`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className='form-area'>
      <form onSubmit={handleSubmit}>
        <h2 className='form-title'>Add Employee</h2>
        <label htmlFor='firstName'>First Name:</label>
        <input
          type='text'
          className='input'
          id='firstName'
          name='firstName'
          value={firstName}
          onChange={handleChange}
        />

        <label htmlFor='lastName'>Last Name:</label>
        <input
          type='text'
          className='input'
          name='lastName'
          value={lastName}
          onChange={handleChange}
        />

        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          className='input'
          name='email'
          id='email'
          value={email}
          onChange={handleChange}
        />

        <label htmlFor='salary'>Salary:</label>
        <input
          type='number'
          className='input'
          name='salary'
          id='salary'
          value={salary}
          onChange={handleChange}
        />

        <label htmlFor='date'>Date:</label>
        <input
          type='date'
          className='input'
          id='date'
          name='date'
          value={date}
          onChange={handleChange}
        />

        <div className='input-btns'>
          <button type='submit' className='add-btn'>
            Add
          </button>
          <button className='cancle-btn'>cancle</button>
        </div>
      </form>
    </div>
  );
};

export default AddhtmlForm;
