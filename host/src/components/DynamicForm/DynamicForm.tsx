import React from 'react';
import { Button, Box, Paper, Typography, Container } from '@mui/material';
import { useForm } from 'react-hook-form';
import { SectionConfig, FormData, FormSubmissionHandler } from '../../config/types';
import FieldRenderer from './fields/FieldRenderer';
import useConditionalFields from './hooks/useConditionalFields';

interface DynamicFormProps {
  config: SectionConfig[];
  onSubmit: FormSubmissionHandler;
  submitButtonText?: string;
  showResetButton?: boolean;
  resetButtonText?: string;
}

const DynamicForm: React.FC<DynamicFormProps> = ({
  config,
  onSubmit,
  submitButtonText = 'Submit',
  showResetButton = false,
  resetButtonText = 'Reset',
}) => {
  // Generate default values from config
  const defaultValues = React.useMemo(() => {
    const values: Record<string, string | number | boolean> = {};
    config.forEach((section) => {
      section.fields.forEach((field) => {
        if (field.type !== 'header') {
          values[field.name] = field.defaultValue ?? '';
        }
      });
    });
    return values;
  }, [config]);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues,
    mode: 'onChange',
  });

  const { shouldShowField } = useConditionalFields(control);

  const handleFormSubmit = async (data: FormData) => {
    try {
      await onSubmit(data);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const handleReset = () => {
    reset();
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={2} sx={{ p: 4 }}>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          {config.map((section) => (
            <Box key={section.section} sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
                {section.section}
              </Typography>
              {section.description && (
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                  {section.description}
                </Typography>
              )}
              
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 2 
              }}>
                {section.fields
                  .filter((field) => shouldShowField(field))
                  .map((field) => (
                    <Box key={field.name}>
                      <FieldRenderer
                        field={field}
                        control={control}
                        error={errors[field.name] as import('react-hook-form').FieldError}
                      />
                    </Box>
                  ))}
              </Box>
            </Box>
          ))}

          {/* Form Actions */}
          <Box sx={{ 
            display: 'flex', 
            gap: 2, 
            justifyContent: 'flex-end', 
            mt: 4,
            pt: 2,
            borderTop: '1px solid #e0e0e0'
          }}>
            {showResetButton && (
              <Button
                variant="outlined"
                onClick={handleReset}
                disabled={isSubmitting}
                sx={{ minWidth: 120 }}
              >
                {resetButtonText}
              </Button>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              sx={{ minWidth: 120 }}
            >
              {isSubmitting ? 'Submitting...' : submitButtonText}
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default DynamicForm;

/* the dogs is boring... */
