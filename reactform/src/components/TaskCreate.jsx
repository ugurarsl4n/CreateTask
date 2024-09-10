
import { useState } from 'react'
function TaskCreate({ onCreate, task, taskFormUpdate ,onUpdate}) {
    const [title, setTitle] = useState(task? task.title : "")
    const [desc, setDesc] = useState(task? task.desc : "")

    //inputtext değeri alma
    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    //textarea değeri alma
    const handleDesc = (event) => {
        setDesc(event.target.value)
    }

    //app.jsx'e props gönderimi
    const handleSubmit = (event) => {
        event.preventDefault()
        if(taskFormUpdate){
            onUpdate(task.id,title,desc)
        }
        else{
            onCreate(title, desc) 
        }
        setTitle("")
        setDesc("")
    }


    return (
        <div>{taskFormUpdate ? (
        <div className="task-update">
            <h1>Taskı Düzenleyiniz!</h1>
            <form className="task-form">
                <label className="task-label">Başlığı Düzenle</label>
                <input value={title} onChange={handleChange} className="task-input" />
                <label className="task-label">Taskı Düzenle!</label>
                <textarea value={desc} onChange={handleDesc} className="task-input"></textarea>
                <button className="task-btn btn-updated" onClick={handleSubmit}>Düzenle</button>
            </form>
        </div>) : (<div className="task-create">
            <h1>Lütfen Task Ekleyiniz!</h1>
            <form className="task-form">
                <label className="task-label">Başlık</label>
                <input value={title} onChange={handleChange} className="task-input" />
                <label className="task-label">Task giriniz!</label>
                <textarea value={desc} onChange={handleDesc} className="task-input"></textarea>
                <button className="task-btn" onClick={handleSubmit}>Oluştur</button>
            </form>
        </div>)}</div>

    );
}

export default TaskCreate;
