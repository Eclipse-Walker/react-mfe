import React from 'react';
import { FormControlLabel, Checkbox, FormHelperText, Box } from '@mui/material';
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
    <Box>
      <FormControlLabel
        control={
          <Checkbox
            {...controllerField}
            checked={!!controllerField.value}
            onChange={(e) => {
              const value = e.target.checked 
                ? (field.checkedValue ?? true)
                : (field.uncheckedValue ?? false);
              controllerField.onChange(value);
            }}
            disabled={field.disabled}
            color="primary"
            sx={{
              '&.Mui-checked': {
                color: '#1976d2',
              },
            }}
          />
        }
        label={field.label}
        sx={{
          margin: 0,
          '& .MuiFormControlLabel-label': {
            fontSize: '1rem',
            fontWeight: 500,
          },
        }}
      />
      {(error?.message || field.helpText) && (
        <FormHelperText error={!!error} sx={{ ml: 0, mt: 0.5 }}>
          {error?.message || field.helpText}
        </FormHelperText>
      )}
    </Box>
  );
};

export default CheckboxFieldComponent; 