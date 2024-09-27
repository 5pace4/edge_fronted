import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
function RadioButton() {
  return (
    <div>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Select Your Gender:
        </FormLabel>

        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <Stack direction="row" spacing={2}>
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Other"
            />{' '}
          </Stack>
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default RadioButton;
