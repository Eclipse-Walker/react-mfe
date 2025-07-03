import React, { useState, useCallback } from 'react';
import { 
  Box, 
  Button, 
  IconButton, 
  Typography, 
  Card, 
  CardMedia,
  FormHelperText,
  Avatar
} from '@mui/material';
import { Control, FieldError, useController } from 'react-hook-form';
import { FileFieldConfig } from '../../../config/types';

interface PhotoFieldComponentProps {
  field: FileFieldConfig;
  control: Control<any>;
  error?: FieldError;
}

const PhotoFieldComponent: React.FC<PhotoFieldComponentProps> = ({ 
  field, 
  control, 
  error 
}) => {
  const { field: controllerField } = useController({
    name: field.name,
    control,
    rules: field.validation,
  });

  const [preview, setPreview] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileSelect = useCallback((file: File | null) => {
    if (file) {
      // Validate file size
      if (field.maxSize && file.size > field.maxSize * 1024 * 1024) {
        return;
      }

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setPreview(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);

      controllerField.onChange(file);
    } else {
      setPreview(null);
      controllerField.onChange(null);
    }
  }, [field.maxSize, controllerField]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0 && files[0].type.startsWith('image/')) {
      handleFileSelect(files[0]);
    }
  }, [handleFileSelect]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    handleFileSelect(file);
  };

  const handleRemove = () => {
    handleFileSelect(null);
  };

  return (
    <Box sx={{ width: '100%', textAlign: 'center' }}>
      <Typography variant="h6" component="label" sx={{ mb: 2, display: 'block', color: '#1976d2', fontWeight: 600 }}>
        {field.label}
      </Typography>
      
      {preview ? (
        <Box sx={{ position: 'relative', display: 'inline-block' }}>
          <Avatar
            src={preview}
            alt="Photo preview"
            sx={{ 
              width: 150, 
              height: 150, 
              mb: 2,
              border: '3px solid #1976d2',
              boxShadow: 2
            }}
          />
          <Box sx={{ mt: 1 }}>
            <Button
              variant="outlined"
              color="error"
              size="small"
              onClick={handleRemove}
              sx={{ mr: 1 }}
            >
              Remove
            </Button>
            <Button
              variant="contained"
              component="label"
              size="small"
            >
              Change Photo
              <input
                type="file"
                hidden
                accept={field.accept || 'image/*'}
                onChange={handleFileInputChange}
              />
            </Button>
          </Box>
        </Box>
      ) : (
        <Box>
          <Avatar
            sx={{ 
              width: 150, 
              height: 150, 
              mx: 'auto',
              mb: 2,
              backgroundColor: '#f5f5f5',
              border: '2px dashed #ccc',
              '&:hover': {
                borderColor: '#1976d2',
                backgroundColor: '#f3f8ff',
              },
            }}
          >
            <Typography variant="h1" sx={{ color: '#ccc' }}>
              📷
            </Typography>
          </Avatar>
          
          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              component="label"
              sx={{ 
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 600,
              }}
            >
              📷 Upload
              <input
                type="file"
                hidden
                accept={field.accept || 'image/*'}
                onChange={handleFileInputChange}
              />
            </Button>
            
            <Button
              variant="outlined"
              component="label"
              sx={{ 
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 600,
              }}
            >
              📸 Take Photo
              <input
                type="file"
                hidden
                accept="image/*"
                capture="user"
                onChange={handleFileInputChange}
              />
            </Button>
          </Box>
        </Box>
      )}

      {field.helpText && (
        <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
          {field.helpText}
        </Typography>
      )}

      {error && (
        <FormHelperText error sx={{ mt: 1, textAlign: 'center' }}>
          {error.message}
        </FormHelperText>
      )}
    </Box>
  );
};

export default PhotoFieldComponent; 