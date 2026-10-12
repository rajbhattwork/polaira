import { useState, useEffect } from 'react'
import type { Task } from '../types/task'

const STORAGE_KEY = 'gbf_tasks'

function loadTasks(): Task[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Task[]) : []
  } catch {
    return []
  }
}

function saveTasks(tasks: Task[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(loadTasks)

  useEffect(() => {
    saveTasks(tasks)
  }, [tasks])

  function addTask(title: string, description: string): void {
    const task: Task = {
      id: crypto.randomUUID(),
      title: title.trim(),
      description: description.trim(),
      completed: false,
      createdAt: Date.now(),
    }
    setTasks((prev) => [task, ...prev])
  }

  function updateTask(id: string, title: string, description: string): void {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, title: title.trim(), description: description.trim() } : t
      )
    )
  }

  function deleteTask(id: string): void {
    setTasks((prev) => prev.filter((t) => t.id !== id))
  }

  function toggleTask(id: string): void {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  return { tasks, addTask, updateTask, deleteTask, toggleTask }
}
