import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Control, FieldError, useController } from 'react-hook-form';
import { NumberFieldConfig } from '../../../config/types';

interface NumberFieldComponentProps {
  field: NumberFieldConfig;
  control: Control<any>;
  error?: FieldError;
}

const NumberFieldComponent: React.FC<NumberFieldComponentProps> = ({ 
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
      type="number"
      variant="outlined"
      fullWidth
      error={!!error}
      helperText={error?.message || field.helpText}
      disabled={field.disabled}
      inputProps={{
        min: field.min,
        max: field.max,
        step: field.step,
      }}
      InputProps={{
        startAdornment: field.prefix ? (
          <InputAdornment position="start">{field.prefix}</InputAdornment>
        ) : undefined,
        endAdornment: field.suffix ? (
          <InputAdornment position="end">{field.suffix}</InputAdornment>
        ) : undefined,
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: 2,
        },
      }}
    />
  );
};

export default NumberFieldComponent; 