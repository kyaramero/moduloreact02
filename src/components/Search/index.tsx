import React from 'react'
import { SearchPlace } from './style'
import { useTask } from '../../context/task.context'

const Search = () => {
  const { searchLabel, setSearchLabel } = useTask()
  return (
    <SearchPlace
      placeholder="Search task"
      value={searchLabel}
      onChange={e => setSearchLabel(e.target.value)}
    />
  )
}

export default Search
