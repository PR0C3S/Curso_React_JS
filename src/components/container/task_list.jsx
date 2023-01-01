import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/level.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task("Example","Default descirption",false,LEVELS.NORMAL);

    //estado del componente
    const [tasks, setTasks] = useState([defaultTask]);
    const [loading, setLoading] = useState(true);

    //control del ciclo de vida del componente
    useEffect(() => {
        console.log("Task State has been modified");
        setLoading(false);
        return () => {
            setLoading(true);
            console.log("TaskList component is going to unmount...");
        };
    }, [tasks]);
    
    const changeCompleted = (id) =>{
        console.log("TODO: Cambiar estado de una tarea")
    }
    
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