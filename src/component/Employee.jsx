import React from "react";
import EditEmployeee from "./EditEmployee";

const Employee = (props) => {
  return (
    <>
      {/* LEARNING/MISTAKES CODE */}
      {/* <h3>Our Emloyee's name is {props.name ? props.name : "None"}</h3> */}

      {/* <h3>Employee's name is {props.showName ? (props.name ? props.name : "None") : "None"}</h3> */}

      {/* if(<h3>Employee's name is {props.name ? props.name : "None"}</h3>)
    else("None") */}

      {/* CORRECTED CODE */}
      {/* {props.showName ? (
      <>
        <h3>Employee's name is {props.name ? props.name : "None"}
        </h3>
        <h3>{props.role ? props.role : "None"}</h3>
      </>
      )
       : (
        <h3>None</h3>
      )} */}

      <div className="min-w-[30px] max-w-[350px] m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          className="object-cover rounded-full h-[100px] w-[100px] block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src={props.image}
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">{props.name}</p>
            <p className="text-slate-500 font-medium">{props.role}</p>
          </div>

          <EditEmployeee
            id={props.id}
            name={props.name}
            role={props.role}
            image={props.img}
            updateEmployee={props.updateEmployee}
            removeEmployee={props.removeEmployee}
          />
        </div>
      </div>
    </>
  );
};

export default Employee;
