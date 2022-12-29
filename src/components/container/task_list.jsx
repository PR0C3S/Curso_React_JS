import React from 'react';
import { LEVELS } from '../../models/level.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const changeState = (id) =>{
        console.log("Cambiar estado de una tarea")
    }
    
    const defaultTask = new Task("Example","Default descirption",false,LEVELS.NORMAL);
    return (
        <div>
            <div>
               <h1> Your Tasks:</h1>
            <TaskComponent task={defaultTask}></TaskComponent>
            </div>
        </div>
    );
};


export default TaskListComponent;
