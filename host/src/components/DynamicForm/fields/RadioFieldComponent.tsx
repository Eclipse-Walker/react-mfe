import React from 'react';
import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material';
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
    <FormControl component="fieldset" margin="normal" fullWidth error={!!error}>
      <FormLabel component="legend">{field.label}</FormLabel>
      <RadioGroup
        {...controllerField}
        row
        aria-label={field.name}
        value={controllerField.value || ''}
      >
        {field.options.map((option) => (
          <FormControlLabel
            key={option}
            value={option}
            control={<Radio />}
            label={option}
          />
        ))}
      </RadioGroup>
      {error && <FormHelperText>{error.message}</FormHelperText>}
    </FormControl>
  );
};

export default RadioFieldComponent; 