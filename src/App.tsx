import { useState, useMemo } from 'react'
import { useTasks } from './hooks/useTasks'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import { FilterBar } from './components/FilterBar'
import type { FilterStatus, SortOrder } from './components/FilterBar'
import './App.css'

function App() {
  const { tasks, addTask, updateTask, deleteTask, toggleTask } = useTasks()
  const [filter, setFilter] = useState<FilterStatus>('all')
  const [sort, setSort] = useState<SortOrder>('default')

  const visibleTasks = useMemo(() => {
    let result = tasks

    if (filter === 'incomplete') result = result.filter((t) => !t.completed)
    else if (filter === 'complete') result = result.filter((t) => t.completed)

    if (sort === 'status') {
      result = [...result].sort((a, b) => Number(a.completed) - Number(b.completed))
    }

    return result
  }, [tasks, filter, sort])

  return (
    <div className="page">
      <main className="app">
        <header className="app__header">
          <h1 className="app__title">gbf</h1>
          <p className="app__subtitle">Task Manager</p>
        </header>

        <section className="app__create" aria-label="Create task">
          <TaskForm onSubmit={addTask} />
        </section>

        <section className="app__list" aria-label="Tasks">
          <FilterBar
            filter={filter}
            sort={sort}
            onFilterChange={setFilter}
            onSortChange={setSort}
          />
          <TaskList
            tasks={visibleTasks}
            onToggle={toggleTask}
            onUpdate={updateTask}
            onDelete={deleteTask}
          />
        </section>
      </main>
    </div>
  )
}

export default App
