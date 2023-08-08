import React from 'react'
import ComB from './ComB'

const ComA = ({data}) => {
  return (
    <>
        <div>ComA</div>
        <ComB data={data}/>
    </>
  )
}

export default ComA