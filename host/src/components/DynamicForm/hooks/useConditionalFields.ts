import { useWatch } from 'react-hook-form';
import { FieldConfig, ConditionalDisplay } from '../../../config/types';

export const useConditionalFields = (control: any) => {
  const watchedFields = useWatch({ control });

  const shouldShowField = (field: FieldConfig): boolean => {
    if (!field.showIf) return true;

    const condition = field.showIf;
    const fieldValue = watchedFields[condition.field];

    // Handle date comparison specially
    if (condition.field.toLowerCase().includes('date') && fieldValue) {
      const selectedDate = new Date(fieldValue);
      const formattedDate = selectedDate.toISOString().split('T')[0];
      return evaluateCondition(formattedDate, condition.value, condition.operator);
    }

    return evaluateCondition(fieldValue, condition.value, condition.operator);
  };

  const evaluateCondition = (
    fieldValue: any,
    conditionValue: any,
    operator: ConditionalDisplay['operator'] = 'equals'
  ): boolean => {
    switch (operator) {
      case 'equals':
        return fieldValue === conditionValue;
      case 'not-equals':
        return fieldValue !== conditionValue;
      case 'greater-than':
        return Number(fieldValue) > Number(conditionValue);
      case 'less-than':
        return Number(fieldValue) < Number(conditionValue);
      default:
        return fieldValue === conditionValue;
    }
  };

  return { shouldShowField };
};

export default useConditionalFields; 