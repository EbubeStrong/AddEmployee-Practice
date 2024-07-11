import { useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddEmployeee(props) {
  const [show, setShow] = useState(false);
  const [inputName, setInputName] = useState("");
  const [inputRole, setInputRole] = useState("");
  const [inputImg, setInputImg] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changeName = (e) => {
    setInputName(e.target.value)
  }
  const changeRole = (e) => {
    setInputRole(e.target.value)
  }
  const changeImg = (e) => {
    setInputImg(e.target.value)
  }

  return (
    <>
      <button
        onClick={handleShow}
        className="block mx-auto m-3 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      >
        + Add Employee
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form 
          onSubmit={(e) => {
            e.preventDefault()
            props.newEmployee(inputName, inputRole, inputImg)
            setInputImg("")
            setInputName("")
            setInputRole("")
            handleClose()
            // console.log("Updated")
            // console.log(props.id, inputName, inputRole)
          }}
          id="editmodal" className="w-full max-w-sm">
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="name"
                >
                  Full Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="name"
                  type="text"
                  placeholder="Faithful Love"
                  value={inputName}
                  onChange={changeName}
                />
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="name"
                >
                  Role
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="name"
                  type="text"
                  placeholder="Citizen"
                  value={inputRole}
                  onChange={changeRole}
                />
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="img"
                >
                  Image URL
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="img"
                  type="text"
                  placeholder="https://goggle.com"
                  value={inputImg}
                  onChange={changeImg}
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}

          <button
            className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
            onClick={handleClose}
          >
            Close
          </button>

          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            form="editmodal"
            // onClick={(e)=>{
            //     updateEmployee()
            // }}
          >
            Add
          </button>

          {/* <Button variant="primary">Update</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default AddEmployeee;
