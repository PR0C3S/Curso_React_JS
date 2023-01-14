import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

// Importamos la hoja de estilos de task.scss
import '../../styles/task.scss'
import { LEVELS } from '../../models/level.enum';
import { functionDeclaration } from '@babel/types';

const TaskComponent = ({ task, complete, deleted }) => {

    useEffect(() => {
        console.log("Created Task")
        return () => {
            console.log(`Task: ${task.name} is going to unmount`)
        };
    }, [task]);

    /**
     * Fuction that reutrns a Badge
     * depending on the level of the task
     */
    function taskLevelBadge()
    {
        switch(task.level)
        {
            case LEVELS.NORMAL:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-primary'> {task.level}</span>
                </h6>)

            case LEVELS.URGENT:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-warning'> {task.level}</span>
                </h6>)

            case LEVELS.BLOCKING:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-danger'> {task.level}</span>
                </h6>)

            default:
                break;


        }
    }

    function taskCompletedIcon()
    {
        if(task.completed)
        {
            return (<i onClick={ () => complete(task)} className='bi-toggle-on task-action' style={{ color: 'green'}}></i>)
        }else{
            return(<i onClick={ () => complete(task)} className='bi-toggle-off task-action' style={{ color: 'grey'}}></i>)
        }
    }
    return (
            <tr className='fw-normal'>
                <th>
                    <span className='ms-2'>{ task.name }</span>
                </th>
                <td className='align-middle'>
                    <span>{ task.description }</span>
                </td>
                <td className='align-middle'>
                {/**Execution of fuction return badge element*/}
                   {taskLevelBadge()}
                </td>
                <td className='align-middle'>
                {/**TODO: Sustituir por iconos */}
                    {taskCompletedIcon()}
                <i onClick={() => deleted(task)} className='bi-trash task-action' style={{color: 'tomato'}}></i>
                </td>
            </tr>
       
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    deleted: PropTypes.func.isRequired
};


export default TaskComponent;