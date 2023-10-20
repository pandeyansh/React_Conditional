import React, { useState } from 'react';
function FormField() {
const [value, setValue] = useState('');
const isEmpty = value === '';
const handleInputChange = (e) => {
setValue(e.target.value);
};
return (
<div className={`form-field ${isEmpty ? 'error' : 'success'}`}>
<input
type="text"
value={value}
onChange={handleInputChange}
placeholder="Type something..."
/>
</div>
);
}
export default FormField;