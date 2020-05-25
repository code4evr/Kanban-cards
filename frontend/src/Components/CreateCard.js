import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { CreateTask } from '../actions/tasks';

const CreateCards = () => {
  const [modal, setModal] = useState(false);

  // sets and maintains the state values of each and every tasks that gets created by the user
  const [values, setValues] = useState({
    task: '',
    description: '',
    status: '',
  });

  const { task, description, status } = values;

  const toggle = () => setModal(!modal);

  const refreshPage = () => {
    window.location.reload(false);
  };

  //keeps track of change in values
  const handleChange = name => e => {
    setValues({
      ...values,
      [name]: e.target.value,
    });
  };

  //handles the task related values when user creates a new task on submitting the form
  const handleSubmit = e => {
    e.preventDefault();
    console.log('submitted');

    const taskInfo = { task, description, status };
    CreateTask(taskInfo).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setValues({
          ...values,
          task: '',
          description: '',
          status: '',
        });
      }
    });
    setModal(!modal);
    refreshPage();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="offset-md-8 col-md-2">
          <Button color="danger" onClick={toggle}>
            Create
          </Button>
          <Modal isOpen={modal} toggle={toggle} className="newtask">
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Task Name</label>
                  <input
                    type="text"
                    name="task"
                    id="task"
                    className="form-control"
                    onChange={handleChange('task')}
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <input
                    type="text"
                    name="desc"
                    id="desc"
                    className="form-control"
                    onChange={handleChange('description')}
                  />
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select
                    name="status"
                    id="status"
                    className="form-control"
                    onChange={handleChange('status')}
                  >
                    <option
                      value="choose"
                      selected="selected"
                      disabled="true"
                    >
                      --choose--
                    </option>
                    <option value="to do">ToDo</option>
                    <option value="doing" disabled="true">
                      Doing
                    </option>
                    <option value="doing to" disabled="true">
                      Doing To
                    </option>
                  </select>
                </div>
                <Button color="primary">Set Task</Button>
              </form>
            </ModalBody>
          </Modal>
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default CreateCards;
