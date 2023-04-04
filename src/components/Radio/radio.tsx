import React, { useState } from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

export interface IRadio {
  doSomething: (params: any) => any
}

export default function RadioButtonsGroup({ doSomething }: IRadio) {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Odd or Even?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="whatever"
        name="radio-buttons-group"
        onChange={doSomething}
      >
        <FormControlLabel value="odd" control={<Radio />} label="Odd number" />
        <FormControlLabel
          value="even"
          control={<Radio />}
          label="Even number"
        />
        <FormControlLabel
          value="whatever"
          control={<Radio />}
          label="Whatever"
        />
      </RadioGroup>
    </FormControl>
  )
}
