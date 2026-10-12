import { useState, useEffect } from 'react'
import type { Task } from '../types/task'

interface Props {
  onSubmit: (title: string, description: string) => void
  onCancel?: () => void
  initial?: Task
}

export function TaskForm({ onSubmit, onCancel, initial }: Props) {
  const [title, setTitle] = useState(initial?.title ?? '')
  const [description, setDescription] = useState(initial?.description ?? '')

  useEffect(() => {
    setTitle(initial?.title ?? '')
    setDescription(initial?.description ?? '')
  }, [initial])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!title.trim()) return
    onSubmit(title, description)
    if (!initial) {
      setTitle('')
      setDescription('')
    }
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-form__input"
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        aria-label="Task title"
      />
      <textarea
        className="task-form__textarea"
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={2}
        aria-label="Task description"
      />
      <div className="task-form__actions">
        <button className="btn btn--primary" type="submit">
          {initial ? 'Save' : 'Add Task'}
        </button>
        {onCancel && (
          <button className="btn btn--ghost" type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  )
}
