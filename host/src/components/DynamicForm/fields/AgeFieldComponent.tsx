import React, { useEffect } from 'react';
import { TextField, Box, Chip } from '@mui/material';
import { Control, FieldError, useController, useWatch } from 'react-hook-form';
import { NumberFieldConfig } from '../../../config/types';

interface AgeFieldComponentProps {
  field: NumberFieldConfig;
  control: Control<any>;
  error?: FieldError;
}

const AgeFieldComponent: React.FC<AgeFieldComponentProps> = ({ 
  field, 
  control, 
  error 
}) => {
  const { field: controllerField } = useController({
    name: field.name,
    control,
    rules: field.validation,
  });

  // Watch birth date field to auto-calculate age
  const birthDate = useWatch({
    control,
    name: 'birthDate'
  });

  useEffect(() => {
    if (birthDate) {
      const today = new Date();
      const birth = new Date(birthDate);
      let age = today.getFullYear() - birth.getFullYear();
      const monthDiff = today.getMonth() - birth.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
      }
      
      controllerField.onChange(age);
    }
  }, [birthDate, controllerField]);

  const formatAge = (age: number) => {
    if (age < 1) return "< 1 year";
    if (age === 1) return "1 year";
    return `${age} years`;
  };

  const displayAge = controllerField.value ? formatAge(controllerField.value) : "";

  return (
    <Box sx={{ position: 'relative' }}>
      <TextField
        {...controllerField}
        label={field.label}
        type="number"
        variant="outlined"
        fullWidth
        disabled={field.disabled}
        error={!!error}
        helperText={error?.message || field.helpText}
        inputProps={{
          min: field.min || 0,
          max: field.max || 150,
          step: field.step || 1,
        }}
        InputProps={{
          readOnly: field.disabled,
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
          },
        }}
      />
      {displayAge && (
        <Chip
          label={displayAge}
          color="primary"
          size="small"
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 1,
          }}
        />
      )}
    </Box>
  );
};

export default AgeFieldComponent; 