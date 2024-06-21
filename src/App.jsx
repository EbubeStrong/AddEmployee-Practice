import "./App.css";
import { useState } from "react";
import Employee from "./component/Employee.jsx";
import React from "react";
import {v4 as uuid4} from "uuid"
import AddEmployeee from "./component/AddEmployee.jsx";

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      id: uuid4(),
      name: "Samuel",
      role: "Developer",
      image: "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg",
    },
    {
      id: uuid4(),
      name: "Chidinma",
      role: "Designer",
      image: "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg",
    },
    {
      id: uuid4(),
      name: "Ruth",
      role: "Backend",
      image: "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg",
    },
    {
      id: uuid4(),
      name: "Princess",
      role: "Web3",
      image: "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg",
    },
    {
      id: uuid4(),
      name: "Ebuka",
      role: "Manager",
      image: "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg",
    },
    {
      id: uuid4(),
      name: "Love",
      role: "Junior Dev",
      image: "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg",
    },
  ]);
  // console.log('We are about to list the employees')

  const updateEmployee = (id, newName, newRole, newImage) => {
    // console.log("Employee is updated")
    const updatedEmployees = employees.map((employee) => {
      if(id === employee.id){
        return  {...employee, name: newName, role: newRole, image: newImage}
      }
      return employee
    })
    setEmployees(updatedEmployees)
  }

  const addNewEmployee = (addName, addRole, addImg) => {
    const newEmployee = {
      id: uuid4(),
      name: addName,
      role: addRole,
      image: addImg, 
    }
    setEmployees([...employees, newEmployee])
  }

  const removeEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  const showEmployees = true;

  return (
    <div>
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              // console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              // console.log(employee.id)
              return (
                <Employee
                  key={employee.id} 
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  image={employee.image}
                  updateEmployee={updateEmployee}
                  removeEmployee={removeEmployee}
                />
              );
            })}
            {/* <Employee
              name="Samuel"
              role={role}
              image="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg"
              showName={true}
            /> */}
            {/* <Employee
              name="Chidinma"
              role={role}
              image="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg"
              showName={true}
            />
            <Employee
              name="Emmanuel"
              role={role}
              image="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg"
              showName={false}
            />
            <Employee
              name="Samuel"
              role={role}
              image="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg"
              showName={true}
            />
            <Employee
              name="Chidinma"
              role={role}
              image="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg"
              showName={true}
            />
            <Employee
              name="Emmanuel"
              role={role}
              image="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg"
              showName={false}
            />
            <Employee
              name="Chidinma"
              role={role}
              image="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg"
              showName={true}
            />
            <Employee
              name="Emmanuel"
              role={role}
              image="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg"
              showName={false}
            />
            <Employee
              name="Chidinma"
              role={role}
              image="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg"
              showName={true}
            />
            <Employee
              name="Emmanuel"
              role={role}
              image="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg"
              showName={false}
            /> */}
          </div>

          <AddEmployeee newEmployee={addNewEmployee}/>
        </>
      ) : (
        <p>User doesn't exist</p>
      )}
    </div>
  );
}

export default App;
