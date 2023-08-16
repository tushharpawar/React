import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function Options() {
    
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="yes" control={<Radio />} label=<h2 className='font-bold md:text-xl'>Yes</h2>/>
        <FormControlLabel value="no" control={<Radio />} label=<h2 className='font-bold md:text-xl'>No</h2> />
        
      </RadioGroup>
    </FormControl>
  );
}