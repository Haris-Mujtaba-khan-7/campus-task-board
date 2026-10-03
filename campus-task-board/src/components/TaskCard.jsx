function TaskCard({ task, taskNumber }) {
  return (
    <div className="task-card">
      
      <div className="task-number">
        #{taskNumber}
      </div>

      <div className="task-content">
        
        <h3>{task.title}</h3>

        <span className="category">
          {task.category}
        </span>

      </div>

    </div>
  );
}

export default TaskCard;