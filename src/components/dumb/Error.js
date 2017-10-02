import React from 'react';

class Error extends React.Component {
    render() {

        const { errorMsg, clearError } = this.props;
        return (
            <div className="alert alert-danger" role="alert" style={{transition: 'all 1s'}}>
                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                <span style={{float: 'right', cursor: 'pointer'}} onClick={(e) => { clearError(errorMsg) }}>
                    x
                </span>
                { errorMsg }
            </div>
        );
    }
}

export default Error;