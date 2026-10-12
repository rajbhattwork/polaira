import type { Task } from '../types/task'
import { TaskItem } from './TaskItem'

interface Props {
  tasks: Task[]
  onToggle: (id: string) => void
  onUpdate: (id: string, title: string, description: string) => void
  onDelete: (id: string) => void
}

export function TaskList({ tasks, onToggle, onUpdate, onDelete }: Props) {
  if (tasks.length === 0) {
    return <p className="task-list__empty">No tasks to show.</p>
  }

  return (
    <ul className="task-list" aria-label="Task list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}
