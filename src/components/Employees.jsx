import Header from "./Header/Header";
import TableView from "./TableView/TableView";
import { employeesData } from "../data/data";
import { useState } from "react";
import AddForm from "./FormView/AddForm";
import EditForm from "./FormView/EditForm";

const Employees = () => {
  const [employees, setEmployees] = useState([...employeesData]);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {};
  const handleEdit = () => {};

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
      {isEditing && <EditForm />}
    </div>
  );
};

export default Employees;
