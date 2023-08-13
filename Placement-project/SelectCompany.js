import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function MultipleSelectCompany() {
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl sx={{  minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label"></InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          label=""
          onChange={handleChange}
        >

          <MenuItem cName="Test-1" value={"Test-1"}>Test-1</MenuItem>
          <MenuItem cName="Test-2" value={"Test-2"}>Test-2</MenuItem>
          <MenuItem cName="Test-3" value={"Test-3"}>Test-3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}