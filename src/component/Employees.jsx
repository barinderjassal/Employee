import React, { Component } from 'react'

export default function Employee(props) {
    return (
        <React.Fragment>
            {props.isEdit ?
                <form>
                    <input value={props.fname}>{props.fname}</input>
                </form>
                
            : <input></input>
            }
        </React.Fragment>
    )
};