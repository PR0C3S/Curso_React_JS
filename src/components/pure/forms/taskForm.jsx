import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/level.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({ add }) => {

  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef(LEVELS.NORMAL);

  function addTask(e){
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value,
    );
    add(newTask);
  }
  return (
    <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
      <div className='form-outline flex-fill'>
        <input ref={nameRef} id='name' type='text' className='form-control form-control-lg' required autoFocus placeholder='Task Name'/>
        <input ref={descriptionRef} id='description' type='text' className='form-control form-control-lg' required placeholder='Task Description'/>

        <label htmlFor='selectLevel' className='sr-only'>Priority</label>
        <select ref={levelRef} defaultValue={LEVELS.NORMAL} id="level">
          <option value={LEVELS.NORMAL}> Normal</option>
          <option value={LEVELS.URGENT}> Urgent</option>
          <option value={LEVELS.BLOCKING}> Blocking</option>
        </select>
      </div>  
      <button type='submit' className='btn btn-primary btn-lg ms-1'>Guardar</button>
    </form>
  )
}

TaskForm.propTypes = {
 add: PropTypes.func.isRequired
}

export default TaskForm
