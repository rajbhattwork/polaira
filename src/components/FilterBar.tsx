export type FilterStatus = 'all' | 'incomplete' | 'complete'
export type SortOrder = 'default' | 'status'

interface Props {
  filter: FilterStatus
  sort: SortOrder
  onFilterChange: (f: FilterStatus) => void
  onSortChange: (s: SortOrder) => void
}

const FILTERS: { value: FilterStatus; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'incomplete', label: 'Incomplete' },
  { value: 'complete', label: 'Complete' },
]

export function FilterBar({ filter, sort, onFilterChange, onSortChange }: Props) {
  return (
    <div className="filter-bar">
      <div className="filter-bar__filters" role="group" aria-label="Filter tasks">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            className={`btn btn--filter${filter === f.value ? ' btn--filter-active' : ''}`}
            onClick={() => onFilterChange(f.value)}
            aria-pressed={filter === f.value}
          >
            {f.label}
          </button>
        ))}
      </div>
      <button
        className={`btn btn--sort${sort === 'status' ? ' btn--sort-active' : ''}`}
        onClick={() => onSortChange(sort === 'status' ? 'default' : 'status')}
        aria-pressed={sort === 'status'}
      >
        Sort by status
      </button>
    </div>
  )
}
