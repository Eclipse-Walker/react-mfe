import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { useForm, useWatch } from "react-hook-form";

type FieldType =
  | "text"
  | "number"
  | "select"
  | "radio"
  | "checkbox"
  | "textarea"
  | "date"
  | "password"
  | "header";

type FieldConfig = {
  name: string;
  label: string;
  type: FieldType;
  defaultValue?: any;
  validation?: any;
  options?: string[];
  showIf?: { field: string; value: any };
  grid?: { xs?: number; sm?: number; md?: number; lg?: number };
};

type SectionConfig = {
  section: string;
  fields: (FieldConfig | { group: FieldConfig[] })[];
};

interface Props {
  config: SectionConfig[];
  onSubmit: (data: any) => void;
}

const DynamicForm: React.FC<Props> = ({ config, onSubmit }) => {
  const defaultValues = config
    .flatMap((section) =>
      section.fields.flatMap((field) =>
        "group" in field ? field.group : field
      )
    )
    .reduce((acc, field) => {
      acc[field.name] = field.defaultValue ?? "";
      return acc;
    }, {} as any);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues });

  const watchedFields = useWatch({ control });

  const shouldShowField = (field: FieldConfig) => {
    if (!field.showIf) return true;
    const fieldValue = watchedFields[field.showIf.field];
    if (field.showIf.field === "birthDate" && fieldValue) {
      const selectedDate = new Date(fieldValue);
      const formattedDate = selectedDate.toISOString().split("T")[0];
      return formattedDate === field.showIf.value;
    }
    return fieldValue === field.showIf.value;
  };

  const renderField = (field: FieldConfig) => {
    if (!shouldShowField(field)) return null;
    const commonProps = { ...register(field.name, field.validation) };

    switch (field.type) {
      case "text":
      case "password":
      case "date":
        return (
          <TextField
            {...commonProps}
            label={field.label}
            type={field.type}
            variant="outlined"
            fullWidth
            error={!!errors[field.name]}
            helperText={errors[field.name]?.message as React.ReactNode}
            margin="normal"
          />
        );
      case "radio":
        return (
          <FormControl component="fieldset" margin="normal" fullWidth>
            <FormLabel component="legend">{field.label}</FormLabel>
            <RadioGroup row aria-label={field.name} {...commonProps}>
              {field.options?.map((opt) => (
                <FormControlLabel
                  key={opt}
                  value={opt}
                  control={<Radio />}
                  label={opt}
                />
              ))}
            </RadioGroup>
            {errors[field.name] && (
              <FormHelperText error>
                {errors[field.name]?.message as React.ReactNode}
              </FormHelperText>
            )}
          </FormControl>
        );
      case "checkbox":
        return (
          <FormControlLabel
            control={<input type="checkbox" {...commonProps} />}
            label={field.label}
          />
        );
      case "select":
        return (
          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel>{field.label}</InputLabel>
            <Select {...commonProps} label={field.label}>
              {field.options?.map((opt) => (
                <MenuItem key={opt} value={opt}>
                  {opt}
                </MenuItem>
              ))}
            </Select>
            {errors[field.name] && (
              <FormHelperText error>
                {errors[field.name]?.message as React.ReactNode}
              </FormHelperText>
            )}
          </FormControl>
        );
      case "textarea":
        return (
          <TextField
            {...commonProps}
            label={field.label}
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            error={!!errors[field.name]}
            helperText={errors[field.name]?.message as React.ReactNode}
            margin="normal"
          />
        );
      case "header":
        return (
          <div style={{ margin: "5px" }}>
            <p>{field.label}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        {config.map((section) => (
          <Grid item xs={12} key={section.section}>
            <div style={{ marginBottom: "1.5rem" }}>
              <h3>{section.section}</h3>
            </div>
            <Grid container spacing={3}>
              {section.fields.map((field, idx) => {
                if ("group" in field) {
                  return (
                    <React.Fragment key={`group-${idx}`}>
                      {field.group.map((subField) => (
                        <Grid
                          item
                          key={subField.name}
                          {...(subField.grid || { xs: 12 })}
                        >
                          {renderField(subField)}
                        </Grid>
                      ))}
                    </React.Fragment>
                  );
                } else {
                  const gridProps = field.grid || { xs: 12 };
                  return (
                    <Grid item {...gridProps} key={field.name}>
                      {renderField(field)}
                    </Grid>
                  );
                }
              })}
            </Grid>
          </Grid>
        ))}

        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default DynamicForm;
