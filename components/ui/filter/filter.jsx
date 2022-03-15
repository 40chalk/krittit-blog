import React from 'react'
import classes from './filter.module.css'
import { filters } from '../../../global/site-settings-and-info'

function Filter(props) {
  const { onFilter } = props
  return (
    <div className={classes.filterWrapper}>
      <div className={classes.filter}>
        {filters.map((filter) => (
          <label key={filter} htmlFor={filter}>
            <input
              onClick={onFilter}
              onKeyDown={onFilter}
              value={filter}
              name="filter"
              type="radio"
              id={filter}
            />
            <span>{filter}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default Filter
