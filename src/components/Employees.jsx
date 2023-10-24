import Header from "./Header/Header";
import TableView from "./TableView/TableView";
import { employeesData } from "../data/data";
import { useState } from "react";
import AddForm from "./FormView/AddForm";
import EditForm from "./FormView/EditForm";
import Swal from "sweetalert2";

const Employees = () => {
  const [employees, setEmployees] = useState([...employeesData]);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "you won't to revert this",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete It",
      cancelButtonText: "No! calcle",
    }).then((res) => {
      if (res.value) {
        const [deleteValue] = employees.filter(
          (employee) => employee.id === id
        );

        Swal.fire({
          icon: "success",
          title: "Deleted",
          text: `${deleteValue.firstName} ${deleteValue.lastName} data has been delete`,
          showConfirmButton: false,
          timer: 1500,
        });
        const filteredValue = employees.filter(
          (employee) => employee.id !== id
        );
        setEmployees(filteredValue);
      }
    });
  };
  const handleEdit = (id) => {
    const employee = employees.find((employee) => employee.id === id);
    setSelectedEmployee(employee);
    setIsEditing(true);
  };

  return (
    <div>
      {!isAdding && !isEditing && (
        <div className='employees-view'>
          <Header setIsAdding={setIsAdding} />
          <TableView
            employees={employees}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      )}
      {isAdding && (
        <AddForm
          setIsAdding={setIsAdding}
          employees={employees}
          setEmployees={setEmployees}
        />
      )}
      {isEditing && (
        <EditForm
          selectedEmployee={selectedEmployee}
          employees={employees}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Employees;
