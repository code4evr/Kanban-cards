import fetch from 'isomorphic-fetch';
import { API } from '../config';

/* CreateTask module takes in
taskInfo (task related info entered by the user)
as an argument and is sent to the backend where it gets stored finally in the database
*/

export const CreateTask = taskInfo => {
  return fetch(`${API}/tasks`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskInfo),
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

/* getAllTasks modulesfetches all the cards and the related info
from the backend and displays it on the frontend in the form of card
*/

export const getAllTasks = () => {
  return fetch(`${API}/getTasks`, {
    method: 'GET',
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err));
};

/* updateTask module takes in id and updateInfo
as arguments in order to find the exact card that needs to be updated
*/

export const UpdateTask = (id, updateInfo) => {
  return fetch(`${API}/getTask/${id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateInfo),
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err));
};
