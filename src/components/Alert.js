import React from 'react'

export default function Alert(props) {
    const capatalize = (text) => {
        text = text.toLowerCase();
        let a = text.charAt(0).toUpperCase();
        return a + text.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capatalize(props.alert.title)}</strong> {props.alert.msg}
        </div>
    )
}
