import React from 'react'
import classes from './search.module.css'

function Search(props) {
  const { onSearch } = props
  return (
    <section className={classes.search}>
      <input type="text" onChange={onSearch} placeholder="Search" />
    </section>
  )
}

export default Search
