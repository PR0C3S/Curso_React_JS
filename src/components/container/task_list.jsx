import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/level.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

// Importamos la hoja de estilos de task.scss
import '../../styles/task.scss'
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {

    const defaultTask = new Task("Example","Default descirption",false,LEVELS.NORMAL);
    const defaultTask2 = new Task("Example2","Default descirption",true,LEVELS.URGENT);
    const defaultTask3 = new Task("Example3","Default descirption",true,LEVELS.BLOCKING);

    //estado del componente
    const [tasks, setTasks] = useState([defaultTask,defaultTask2,defaultTask3]);
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
    
    function completeTask(task)
    {
        console.log(`Complete this task: ${task}`);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask[index].completed = !tempTask[index].completed;

        //We update the state of the component with the new list of tasks and it will update 
        //the iteration of the tasks in order to show the task updated 
        setTasks(tempTask);
    }

    function deleteTask(task)
    {
        console.log(`Complete this task: ${task}`);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.splice(index,1);
        //We update the state of the component with the new list of tasks and it will update 
        //the iteration of the tasks in order to show the task updated 
        setTasks(tempTask);
    }

    function addTask(task)
    {
        console.log(`Add this task: ${task}`);
        const tempTask = [...tasks];
        tempTask.push(task);
        //We update the state of the component with the new list of tasks and it will update 
        //the iteration of the tasks in order to show the task updated 
        setTasks(tempTask);

    }

    
    
    return (
        
            <div className='col-12'>
            <div class="card">
                <div class="card-header">
                <h1>Your Tasks:</h1>
                </div>
                <div className='card-body' 
                data-mdb-perfect-scrollbar='true'
                style={ {position: 'relative', color:'black'} }>

                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>Title</th>
                                <th scope='col'>Description</th>
                                <th scope='col'>Priority</th>
                                <th scope='col'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {/** TODO: Iterar sobre una lista de tareas */}
                            { tasks.map((task,index) => {
                                return(
                                <TaskComponent key={index} task={task} 
                                complete={completeTask}
                                deleted={deleteTask}>
                                </TaskComponent>

                                )
                            }) }
                        </tbody>
                    </table>
                    <TaskForm add={addTask}></TaskForm>

                </div>
                </div>
           
            </div>
        
    );
};


export default TaskListComponent;