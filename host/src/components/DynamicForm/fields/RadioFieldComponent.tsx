import React from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormHelperText } from '@mui/material';
import { Control, FieldError, useController } from 'react-hook-form';
import { FieldWithOptions } from '../../../config/types';

interface RadioFieldComponentProps {
  field: FieldWithOptions;
  control: Control<any>;
  error?: FieldError;
}

const RadioFieldComponent: React.FC<RadioFieldComponentProps> = ({ 
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
    <FormControl component="fieldset" error={!!error} fullWidth>
      <FormLabel 
        component="legend"
        sx={{
          fontSize: '1rem',
          fontWeight: 500,
          color: '#1976d2',
          '&.Mui-focused': {
            color: '#1976d2',
          },
        }}
      >
        {field.label}
      </FormLabel>
      <RadioGroup
        {...controllerField}
        row={field.options.length <= 4}
        sx={{ mt: 1 }}
      >
        {field.options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={
              <Radio 
                color="primary"
                disabled={option.disabled || field.disabled}
                sx={{
                  '&.Mui-checked': {
                    color: '#1976d2',
                  },
                }}
              />
            }
            label={option.label}
            disabled={option.disabled || field.disabled}
            sx={{
              '& .MuiFormControlLabel-label': {
                fontSize: '0.95rem',
              },
            }}
          />
        ))}
      </RadioGroup>
      {(error?.message || field.helpText) && (
        <FormHelperText>
          {error?.message || field.helpText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default RadioFieldComponent; 