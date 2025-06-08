import { FieldErrors, UseFormRegister } from 'react-hook-form';

export interface ReactHookFormFieldProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: FieldErrors<any>;
}
