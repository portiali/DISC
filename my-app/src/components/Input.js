import React from "react";


function Input({ id, value, onChange }) {
    return (
        <input id={id}
            className="input"
            value={value}
            onChange={onChange}
            required
        />

    );
}

export default Input;