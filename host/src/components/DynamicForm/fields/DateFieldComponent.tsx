import React from 'react';
import { TextField } from '@mui/material';
import { Control, FieldError, useController } from 'react-hook-form';
import { DateFieldConfig } from '../../../config/types';

interface DateFieldComponentProps {
  field: DateFieldConfig;
  control: Control<any>;
  error?: FieldError;
}

const DateFieldComponent: React.FC<DateFieldComponentProps> = ({ 
  field, 
  control, 
  error 
}) => {
  const { field: controllerField } = useController({
    name: field.name,
    control,
    rules: field.validation,
  });

  return (
    <TextField
      {...controllerField}
      label={field.label}
      type="date"
      variant="outlined"
      fullWidth
      error={!!error}
      helperText={error?.message || field.helpText}
      disabled={field.disabled}
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        min: field.min,
        max: field.max,
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: 2,
        },
      }}
    />
  );
};

export default DateFieldComponent; 