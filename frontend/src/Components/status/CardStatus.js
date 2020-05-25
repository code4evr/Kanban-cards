import React, { useState, useEffect } from 'react';
import { getAllTasks } from '../../actions/tasks';
import KanbanCards from '../cards/Cards';

const CardStatus = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    listAllTasks();
  }, []);

  const listAllTasks = () => {
    getAllTasks().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setTasks(data);
      }
      console.log(data);
    });
  };

  const checkStatusTodo = () => {
    return tasks.map((t, i) => (
      <div key={i}>
        {t.status === 'to do' ? (
          <KanbanCards
            id={t._id}
            task={t.task}
            desc={t.description}
            s={t.status}
          />
        ) : (
          ''
        )}
      </div>
    ));
  };

  const checkStatusDoing = () => {
    return tasks.map((t, i) => (
      <div key={i}>
        {t.status === 'doing' ? (
          <KanbanCards
            id={t._id}
            task={t.task}
            desc={t.description}
            s={t.status}
          />
        ) : (
          ''
        )}
      </div>
    ));
  };

  const checkStatusDoingTo = () => {
    return tasks.map((t, i) => (
      <div key={i}>
        {t.status === 'doing to' ? (
          <KanbanCards
            id={t._id}
            task={t.task}
            desc={t.description}
            s={t.status}
          />
        ) : (
          ''
        )}
      </div>
    ));
  };

  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-md-4">
          <h5>to do</h5>
          {checkStatusTodo()}
        </div>
        <div className="col-md-4">
          <h5>doing</h5>
          {checkStatusDoing()}
        </div>
        <div className="col-md-4">
          <h5>doing to</h5>
          {checkStatusDoingTo()}
        </div>
      </div>
    </div>
  );
};

export default CardStatus;
