// LIB
import React from 'react';

class FormData extends React.Component {

    render() {
        const { onChange, value, type, label } = this.props;

        return (
            <div className="form-group">
                <label >{label}
                    <input type={type} className="form-control" value={value} onChange={ (e) => { onChange(e, label.toLowerCase()) } } />
                </label>
            </div>
        )
    }
}

export default FormData;