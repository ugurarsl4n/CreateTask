import TaskCreate from "./TaskCreate"
import { useState } from 'react'


function TaskShow({ task, onDelete ,onUpdate}) {
    const [showEdit, setShowEdit] = useState(false)

    const fDelete = () => {
        onDelete(task.id)
    }
    const handleEditClick = () => {
        setShowEdit(true)
    }
    const handleSubmit = (id,updatedTitle,updatedDesc)=>{
        setShowEdit(false)
        onUpdate(id,updatedTitle,updatedDesc)
    }
    return (
        <div className="task-show">
            {showEdit ? (<TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit}/>) :(
                <div>
                    <h2 className="show-title">Göreviniz</h2>
                    <p>{task.title}</p>
                    <h2 className="show-title">Yapılacaklar</h2>
                    <p>{task.desc}</p>
                    <div className="list-buttons">
                        <button className="btn-delete" onClick={fDelete}>Sil</button>
                        <button className="btn-update" onClick={handleEditClick}>Düzenle</button>
                    </div></div>
            )}
        </div>
    );
}

export default TaskShow;