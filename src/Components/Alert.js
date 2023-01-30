import React from "react";

export default function Alert(props) {
    const capitalise = (words)=>{
        const lower = words.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height : "20px"}}>
            {props.alert && (
                <>
                    <div className="alert alert-success" role="alert">
                        <strong>{capitalise(props.alert.type)}</strong> : {props.alert.mesg}
                    </div>
                </>
            )}
        </div>
    );
}
