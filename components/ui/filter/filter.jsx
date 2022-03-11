import React from 'react'
import classes from './filter.module.css'
import filters from '../../../global/displayed-filter-words'

function Filter(props) {
  const { onFilter } = props
  return (
    <div className={classes.filterWrapper}>
      <div className={classes.filter}>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={onFilter}
            onKeyDown={onFilter}
            value={filter}
            type="button"
          >
            {filter}
          </button>
        ))}
        <span />
      </div>
    </div>
  )
}

export default Filter
