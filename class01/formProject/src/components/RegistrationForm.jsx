import { Typography } from '@mui/material';
import CheckBox from './CheckBox';
import RadioButton from './RadioButton';
import Select_option from './Select_option';
import SubmitButton from './SubmitButton';
import TextFields from './TextFields';

function RegistrationForm() {
  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '50vh',
        width: '25%',
        margin: '0 auto',
        backgroundColor: 'white',
        padding: '24px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Registration Form
      </Typography>
      <TextFields />
      <RadioButton />
      <Select_option />
      <CheckBox />
      <SubmitButton />
    </form>
  );
}

export default RegistrationForm;
