import './form-input.styles.scss'

export const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="form-input_container">
      <input 
        className={`form-input ${otherProps.value.length ? 'not-empty' : ''}`} 
        {...otherProps} 
      />
      {label && (
        <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  )
}

export default FormInput;
