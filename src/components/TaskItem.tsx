import { useState } from 'react'
import type { Task } from '../types/task'
import { TaskForm } from './TaskForm'

interface Props {
  task: Task
  onToggle: (id: string) => void
  onUpdate: (id: string, title: string, description: string) => void
  onDelete: (id: string) => void
}

export function TaskItem({ task, onToggle, onUpdate, onDelete }: Props) {
  const [editing, setEditing] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)

  function handleUpdate(title: string, description: string) {
    onUpdate(task.id, title, description)
    setEditing(false)
  }

  function handleDelete() {
    if (confirmDelete) {
      onDelete(task.id)
    } else {
      setConfirmDelete(true)
    }
  }

  if (editing) {
    return (
      <li className="task-item task-item--editing">
        <TaskForm
          initial={task}
          onSubmit={handleUpdate}
          onCancel={() => setEditing(false)}
        />
      </li>
    )
  }

  return (
    <li className={`task-item${task.completed ? ' task-item--done' : ''}`}>
      <label className="task-item__check">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          aria-label={`Mark "${task.title}" as ${task.completed ? 'incomplete' : 'complete'}`}
        />
        <span className="task-item__status-dot" />
      </label>
      <div className="task-item__body">
        <p className="task-item__title">{task.title}</p>
        {task.description && (
          <p className="task-item__description">{task.description}</p>
        )}
      </div>
      <div className="task-item__actions">
        <button
          className="btn btn--icon"
          onClick={() => { setEditing(true); setConfirmDelete(false) }}
          aria-label={`Edit "${task.title}"`}
        >
          Edit
        </button>
        {confirmDelete ? (
          <span className="task-item__confirm">
            <button className="btn btn--danger" onClick={handleDelete} aria-label="Confirm delete">
              Confirm
            </button>
            <button className="btn btn--ghost" onClick={() => setConfirmDelete(false)}>
              No
            </button>
          </span>
        ) : (
          <button
            className="btn btn--icon btn--icon-danger"
            onClick={handleDelete}
            aria-label={`Delete "${task.title}"`}
          >
            Delete
          </button>
        )}
      </div>
    </li>
  )
}
