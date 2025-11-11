import './form-input.styles.scss'
import { InputHTMLAttributes, FC } from 'react';

type FormInputProps = { 
  label: string; 
} & InputHTMLAttributes<HTMLInputElement>;

export const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  const hasValue = otherProps.value && (otherProps.value as string).length > 0;
  
  return (
    <div className="form-input_container">
      <input 
        className={`form-input ${hasValue ? 'not-empty' : ''}`} 
        id={otherProps.name}
        {...otherProps} 
      />
      {label && (
        <label 
          htmlFor={otherProps.name} 
          className={`${hasValue ? 'shrink' : ''} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
}

export default FormInput;