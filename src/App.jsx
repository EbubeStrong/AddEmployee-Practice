import "./App.css";
import { useState, useEffect } from "react";
import React from "react";
import { v4 as uuid4 } from "uuid";
import Employee from "./component/Employee.jsx";
import EditEmployee from "./component/EditEmployee.jsx";
import AddEmployee from "./component/AddEmployee.jsx";

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState( () => { 
    const savedEmployees = localStorage.getItem("employees")
    return savedEmployees ? JSON.parse(savedEmployees) :
    [
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
      image: "https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg",
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
  ]
});

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);
  // console.log('We are about to list the employees')

  const updateEmployee = (id, newName, newRole, newImage) => {
    // console.log("Employee is updated")
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole, image: newImage };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  };

  const addNewEmployee = (addName, addRole, addImg) => {
    const newEmployee = {
      id: uuid4(),
      name: addName,
      role: addRole,
      image: addImg,
    };
    setEmployees([...employees, newEmployee]);
  };

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

              const editEmployee = (
              <EditEmployee 
              id={employee.id}
              name={employee.name}
              role={employee.role}
              image={employee.img}
              updateEmployee={updateEmployee}
              removeEmployee={removeEmployee}
              />
            );
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  image={employee.image}
                  EditEmployee={editEmployee}
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

          <AddEmployee newEmployee={addNewEmployee} />
        </>
      ) : (
        <p>User doesn't exist</p>
      )}
    </div>
  );
}

export default App;
