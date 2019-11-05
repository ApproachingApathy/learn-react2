import React from 'react'

export default class ErrorView extends React.Component {
    errorCode = <><h1 className='error-code'>{this.props.errorCode || ""}</h1><br/></>
    errorMsg = this.props.msg || 'An error has occured, please try again later.'
    render() {
        return (
            <div>
                {this.errorCode}
                <img src='https://via.placeholder.com/450png'/><br/>
                <h2>{this.errorMsg}</h2>
            </div>
        )
    }

    
}