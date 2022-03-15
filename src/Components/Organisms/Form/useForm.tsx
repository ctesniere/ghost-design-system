import React, { useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import * as yup from 'yup';
import { AnyObject } from 'yup/lib/object';

import Form from './Form';
import { IFieldProps, IFormSubmitReturnedType, IUseFormReturnedType } from './types';
import { yupResolver, FieldError } from './yupResolver';

export interface IUseFormProps<T extends AnyObject> {
  initialData: T;
  fields: Array<IFieldProps<T>>;
  previousData?: T;
  validationSchema?: yup.SchemaOf<T>;
}

const useForm = <T extends AnyObject>(props: IUseFormProps<T>): IUseFormReturnedType<T> => {
  const { fields, initialData, previousData, validationSchema } = props;

  const [currentData, setCurrentData] = useState<T>(cloneDeep(initialData));
  const [isModified, setIsModified] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<Record<keyof T, FieldError>>();

  const handleDataChange = (dataIndex: keyof T, newValue: T[keyof T]): void => {
    setCurrentData((prev) => {
      prev[dataIndex] = newValue;
      return { ...prev };
    });

    setValidationError((prev) => {
      if (prev === undefined) return;
      delete prev[dataIndex];
      return { ...prev };
    });
    setIsModified(true);
  };

  const getData = () => {
    return cloneDeep(currentData);
  };

  const reset = () => {
    setCurrentData(cloneDeep(initialData));
    setValidationError(undefined);
    setIsModified(false);
  };

  const submit = (): IFormSubmitReturnedType<T> => {
    let isValid = true;
    if (validationSchema) {
      const errors = yupResolver(validationSchema, { strict: true, abortEarly: false }, currentData);
      isValid = errors === undefined;
      setValidationError(errors);
    }

    return { data: cloneDeep(initialData), valid: isValid };
  };

  return {
    formElement: (
      <Form
        fields={fields}
        handleDataChange={handleDataChange}
        initialData={currentData}
        validationError={validationError}
        previousData={previousData}
        validationSchema={validationSchema}
      />
    ),
    getData,
    isModified: () => isModified,
    reset,
    submit,
  };
};

export default useForm;