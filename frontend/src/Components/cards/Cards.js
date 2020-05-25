import React, { useState } from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardFooter,
} from 'reactstrap';
import { UpdateTask } from '../../actions/tasks';
import './cards.css';

const KanbanCards = props => {
  // sets and maintains the state values of status updates
  const [val, setVal] = useState({
    status: '',
  });
  const { status } = val;
  const handleChange = name => e => {
    setVal({
      ...val,
      [name]: e.target.value,
    });
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const updateInfo = { status };
    console.log(status);
    UpdateTask(props.id, updateInfo).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setVal({
          ...val,
          status: '',
        });
        refreshPage();
      }
    });
  };
  return (
    <div className="container">
      <div>
        <Card className="card">
          <CardBody>
            <CardTitle>{props.task}</CardTitle>
            <CardText>{props.desc}</CardText>
            <CardText>{props.s}</CardText>
          </CardBody>
          <CardFooter className="cardfooter">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Change Status</label>
                <div className="row">
                  <div className="col-sm-8">
                    <select
                      name="status"
                      id="status"
                      className="form-control"
                      defaultValue="choose"
                      onChange={handleChange('status')}
                    >
                      <option value="choose" disabled={true}>
                        --choose--
                      </option>
                      <option value="to do">ToDo</option>
                      <option value="doing">Doing</option>
                      <option value="doing to">Doing To</option>
                    </select>
                  </div>
                  <div className="col-sm-4">
                    <button className="btn btn-primary">set</button>
                  </div>
                </div>
              </div>
            </form>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default KanbanCards;
