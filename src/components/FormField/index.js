import React from 'react'

function FormField({ label, type, name, id, value, onChange }) {
    return (
        <div>
            <label>
                {label}
                <input
                    type={type}
                    name={name}
                    id= {id || name} 
                    value={value}
                    onChange={onChange}
                />
                </label>
        </div>
    )
}

export default FormField