import React from 'react';
import { 
  Button, 
  Box, 
  Paper, 
  Typography, 
  Container,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent,
  CardHeader
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { FormConfig, FormData, FormSubmissionHandler, SectionConfig, FieldConfig } from '../../config/types';
import FieldRenderer from './fields/FieldRenderer';
import useConditionalFields from './hooks/useConditionalFields';

interface DynamicFormProps {
  config: FormConfig;
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
    const values: Record<string, unknown> = {};
    config.sections.forEach((section) => {
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

  const renderSection = (section: any) => {
    const sectionContent = (
      <Grid container spacing={2}>
        {section.fields
          .filter((field: any) => shouldShowField(field))
          .map((field: any) => {
            const gridProps = field.grid || { xs: 12 };
            return (
              <Grid item key={field.name} {...gridProps}>
                <FieldRenderer
                  field={field}
                  control={control}
                  error={errors[field.name] as any}
                />
              </Grid>
            );
          })}
      </Grid>
    );

    if (section.collapsible) {
      return (
        <Accordion 
          key={section.section} 
          defaultExpanded={section.defaultExpanded !== false}
          sx={{ 
            mb: 2,
            boxShadow: 1,
            '&:before': {
              display: 'none',
            },
          }}
        >
          <AccordionSummary 
            expandIcon={<ExpandMore />}
            sx={{ 
              backgroundColor: '#f5f5f5',
              '&:hover': {
                backgroundColor: '#eeeeee',
              },
            }}
          >
            <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
              {section.section}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 3 }}>
            {section.description && (
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {section.description}
              </Typography>
            )}
            {sectionContent}
          </AccordionDetails>
        </Accordion>
      );
    }

    return (
      <Card key={section.section} sx={{ mb: 3, boxShadow: 1 }}>
        <CardHeader
          title={section.section}
          subheader={section.description}
          sx={{
            backgroundColor: '#f8f9fa',
            borderBottom: '1px solid #e0e0e0',
            '& .MuiCardHeader-title': {
              fontSize: '1.25rem',
              fontWeight: 600,
              color: '#1976d2',
            },
          }}
        />
        <CardContent sx={{ p: 3 }}>
          {sectionContent}
        </CardContent>
      </Card>
    );
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {config.title && (
        <Typography variant="h4" component="h1" sx={{ mb: 1, fontWeight: 700, color: '#1976d2' }}>
          {config.title}
        </Typography>
      )}
      {config.description && (
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          {config.description}
        </Typography>
      )}
      
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Box sx={{ mb: 4 }}>
          {config.sections.map((section) => renderSection(section))}
        </Box>

        {/* Form Actions */}
        <Paper 
          elevation={2} 
          sx={{ 
            p: 3,
            display: 'flex', 
            gap: 2, 
            justifyContent: 'flex-end',
            borderTop: '3px solid #1976d2',
            backgroundColor: '#f8f9fa',
          }}
        >
          {showResetButton && (
            <Button
              variant="outlined"
              onClick={handleReset}
              disabled={isSubmitting}
              sx={{ 
                minWidth: 120,
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 600,
              }}
            >
              {resetButtonText}
            </Button>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            sx={{ 
              minWidth: 120,
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 600,
              boxShadow: 2,
              '&:hover': {
                boxShadow: 4,
              },
            }}
          >
            {isSubmitting ? 'Submitting...' : submitButtonText}
          </Button>
        </Paper>
      </form>
    </Container>
  );
};

export default DynamicForm;

/* the dogs is boring... */
