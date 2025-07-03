import React from 'react';
import { Button, Typography, FormHelperText, Box, Chip } from '@mui/material';
import { Control, FieldError, useController } from 'react-hook-form';
import { FileFieldConfig } from '../../../config/types';

interface FileFieldComponentProps {
  field: FileFieldConfig;
  control: Control<any>;
  error?: FieldError;
}

const FileFieldComponent: React.FC<FileFieldComponentProps> = ({ 
  field, 
  control, 
  error 
}) => {
  const { field: controllerField } = useController({
    name: field.name,
    control,
    rules: field.validation,
  });

  const files = controllerField.value as FileList | File[] | null;
  const fileArray = files ? Array.from(files) : [];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      controllerField.onChange(field.multiple ? selectedFiles : selectedFiles[0]);
    }
  };

  const handleRemoveFile = (index: number) => {
    if (field.multiple && fileArray.length > 1) {
      const newFiles = fileArray.filter((_, i) => i !== index);
      controllerField.onChange(newFiles);
    } else {
      controllerField.onChange(null);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <Box>
      <Typography variant="h6" component="label" sx={{ mb: 2, display: 'block', color: '#1976d2', fontWeight: 600 }}>
        {field.label}
      </Typography>

      <Box sx={{ 
        border: '2px dashed #e0e0e0', 
        borderRadius: 2, 
        p: 3, 
        textAlign: 'center',
        backgroundColor: '#fafafa',
        '&:hover': {
          borderColor: '#1976d2',
          backgroundColor: '#f3f8ff',
        },
      }}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          📁 {field.multiple ? 'Select files' : 'Select a file'}
        </Typography>
        
        <Button
          variant="contained"
          component="label"
          disabled={field.disabled}
          sx={{ 
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 600,
          }}
        >
          Choose {field.multiple ? 'Files' : 'File'}
          <input
            type="file"
            hidden
            accept={field.accept}
            multiple={field.multiple}
            onChange={handleFileChange}
          />
        </Button>
      </Box>

      {fileArray.length > 0 && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
            Selected files:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {fileArray.map((file: File, index: number) => (
              <Chip
                key={index}
                label={`${file.name} (${formatFileSize(file.size)})`}
                onDelete={() => handleRemoveFile(index)}
                color="primary"
                variant="outlined"
                sx={{ maxWidth: 300 }}
              />
            ))}
          </Box>
        </Box>
      )}

      {field.helpText && (
        <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
          {field.helpText}
        </Typography>
      )}

      {error && (
        <FormHelperText error sx={{ mt: 1 }}>
          {error.message}
        </FormHelperText>
      )}
    </Box>
  );
};

export default FileFieldComponent; 