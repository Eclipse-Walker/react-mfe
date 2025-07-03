import React from 'react';
import { Checkbox, FormControlLabel, FormHelperText } from '@mui/material';
import { Control, FieldError, useController } from 'react-hook-form';
import { CheckboxFieldConfig } from '../../../config/types';

interface CheckboxFieldComponentProps {
  field: CheckboxFieldConfig;
  control: Control<any>;
  error?: FieldError;
}

const CheckboxFieldComponent: React.FC<CheckboxFieldComponentProps> = ({ 
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
    <>
      <FormControlLabel
        control={
          <Checkbox
            {...controllerField}
            checked={!!controllerField.value}
            onChange={(e) => controllerField.onChange(e.target.checked)}
          />
        }
        label={field.label}
      />
      {error && <FormHelperText error>{error.message}</FormHelperText>}
    </>
  );
};

export default CheckboxFieldComponent; 