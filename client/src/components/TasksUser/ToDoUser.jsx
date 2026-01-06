import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TasksUser.css';
import Task from '../Task';
import Button from '../Button';
import Option from '../Options';
import getUserTasks from '../../scripts/GetTasks';
import AddTask from '../../scripts/AddTask';
import DeleteTask from '../../scripts/DeleteTask';
import EditTask from '../../scripts/EditTask';
import DoneTask from '../../scripts/DoneTask';

const ToDoUser = () => {
  const [tasks, setTasks] = useState([]);
  const [textTask, setTextTask] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const userId = localStorage.getItem('userId');
    if (!userId || !token) {
      navigate('/login');
      return;
    }

    const data = await getUserTasks(userId, token);
    if (data.success) {
      setTasks(data.tasks); 
      console.table(data.tasks)
    } else {
      console.error('Ошибка загрузки задач:', data.message);
      setTasks([]);
    }
  }

  const addTask = async () => {
    if (textTask.trim() === '') {
      alert('Поле пустое');
      return;
    }
    for (const task of tasks) {
      if (task.task_name.toLowerCase() === textTask.trim().toLowerCase()) {
      alert('Такая задача уже есть');
      }
    }
    const newTask = {
      user_id: localStorage.getItem('userId'),
      text: textTask.trim(),
    };

    const data = await AddTask(newTask, token);
    if (data.success && data.newTask) {
      setTasks([...tasks, data.newTask]);
      setTextTask('');
    } 
  }

  const deleteTask = async taskId => {
    const data = await DeleteTask(taskId, token);
    if (data.success) {
      setTasks(tasks.filter(task => task.task_id !== taskId));
    } 
  }

  const editTask = async taskId => {
    for (const task of tasks) {
      if (task.task_id === taskId) {
        const newTaskName = prompt('Введите новую задачу', task.task_name);
        if (newTaskName === null || newTaskName.trim() === '') {
          return;
        }
        
        const data = await EditTask({ taskId, newTaskName: newTaskName.trim() }, token);
        if (data.success) {
          setTasks(prev => prev.map(task => 
            task.task_id === taskId 
              ? { ...task, task_name: newTaskName.trim() } 
              : task
          ));
        } else {
          alert(`Ошибка: ${data.message}`);
        }
        break; 
      }
    }
  }
  
  const doneTask = async taskId => {
    for (const task of tasks) {
      if (task.task_id === taskId) {
        const data = await DoneTask(taskId, token)
        if (data.success) {
          task.done = !task.done;
        } else {
          alert(`Ошибка: ${data.message}`);
        }
        break;
      }    
    }
  }

  const sortAZ = () => {
    setTasks([...tasks].sort((a, b) => 
      (a.task_name).localeCompare((b.task_name), 'ru')
    ));
  }
  
  const sortZA = () => {
    setTasks([...tasks].sort((a, b) => 
      (b.task_name).localeCompare((a.task_name), 'ru')
    ));
  }
  
  const sortTime = () => {
    setTasks([...tasks].sort((a, b) => 
      (a.created_at).localeCompare(b.created_at)
    ));
  }

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('ru-RU') + ' ' + date.toLocaleTimeString('ru-RU');
  }

  return (
    <div className="todo-page">
      <div className="todo-container">
        <div className="todo-content">
          <form className="todo-form" onSubmit={(e) => { e.preventDefault(); addTask(); }}>
            <div className="input-task">
              <input 
                type="text" 
                className="text-task" 
                placeholder="Введите задачу"
                value={textTask}
                onChange={e => setTextTask(e.target.value)}
              />
              <Button variant='add' type="button" onClick={addTask}>
                Добавить задачу
              </Button>
            </div>
          </form>
          <div className="todo-tasks">
            <Option onSortAZ={sortAZ} onSortZA={sortZA} onSortTime={sortTime}/>
            <div className="tasks-label">Ваши задачи</div>
            <ul className="tasks-list">
              {tasks.map(task => (
                <Task
                  key={task.task_id}
                  text={task.task_name || task.text}
                  time={formatDate(task.created_at)}
                  doneTask={task.done}
                  id={task.task_id}
                  onEdit={() => editTask(task.task_id)}
                  onDelete={() => deleteTask(task.task_id)}
                  onDone={() => doneTask(task.task_id)}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoUser;