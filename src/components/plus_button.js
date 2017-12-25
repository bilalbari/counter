import React from 'react';

const MyButton = (props) => {
    return <div>
        <button type="button" onClick={() => {
            props.onclick('-')
        }}> --
        </button>
        <button type="button" onClick={() => {
            props.onclick('+')
        }}> ++
        </button>
        <button type="button" onClick={() => {
            props.onclick('>>')
        }}> contsum
        </button>
        <button type="button" onClick={() => {
            props.onclick('<<')
        }}> contdiff
        </button>
        <button type="button" onClick={() => {
            props.onclick('exit')
        }}> exit
        </button>
    </div>
};

export default MyButton;