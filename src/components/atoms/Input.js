import React from 'react';

function Input({ label, id, type, value, onChange }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} value={value} onChange={onChange} />
    </div>
  );
}

export default Input;