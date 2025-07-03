import React from 'react';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import { Control, FieldError, useController } from 'react-hook-form';
import { FieldWithOptions } from '../../../config/types';

interface SelectFieldComponentProps {
  field: FieldWithOptions;
  control: Control<any>;
  error?: FieldError;
}

const SelectFieldComponent: React.FC<SelectFieldComponentProps> = ({ 
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
    <FormControl variant="outlined" fullWidth margin="normal" error={!!error}>
      <InputLabel>{field.label}</InputLabel>
      <Select
        {...controllerField}
        label={field.label}
        value={controllerField.value || ''}
      >
        {field.options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{error.message}</FormHelperText>}
    </FormControl>
  );
};

export default SelectFieldComponent; 