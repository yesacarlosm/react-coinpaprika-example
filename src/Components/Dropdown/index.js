import React from 'react';

const Dropdown = (props) => {

    const handleChange = (val) => {
        if (props.setSelected) {
            props.setSelected(val);
        }
    }

    return (
        <div>
            <label htmlFor={props.label}>
                {props.label}
                <select
                    className="btn btn-secondary dropdown-toggle"
                    id={props.label}
                    value={props.selected || ''}
                    onChange={e => handleChange(e.target.value)}
                    disabled={props.options && !props.options.length}
                >
                    <option>Select</option>
                    {props.options && props.options.map(item =>
                        <option key={Math.random()} value={item.id}>{item.name}</option>)}
                </select>
            </label>
        </div>
    );
}

export default Dropdown;