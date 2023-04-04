import React, { useState, useEffect } from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

export interface IButtonCounter {
  title: string
  active?: boolean
  count: number
  doSomething: (params: any) => any
}

const ButtonCounter = ({
  title,
  doSomething,
  count,
  active = false,
}: IButtonCounter) => {
  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        onClick={doSomething}
        disabled={!active}
      >
        {title}
      </Button>
    </>
  )
}

export default ButtonCounter
