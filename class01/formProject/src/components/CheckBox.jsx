import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function CheckBox() {
  return (
    <div>
      <Checkbox
        {...label}
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
      />
      <label htmlFor="">Agree with our terms and conditions.</label>
    </div>
  );
}

export default CheckBox;
