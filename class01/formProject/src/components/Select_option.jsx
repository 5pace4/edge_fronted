import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Select_option() {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Age</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        label="Age"
      >
        <MenuItem value="">
          <em>Select One</em>
        </MenuItem>
        <MenuItem value={10}>below 15</MenuItem>
        <MenuItem value={15}>15-19</MenuItem>
        <MenuItem value={20}>20-29</MenuItem>
        <MenuItem value={30}>above 30</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Select_option;
