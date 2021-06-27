import React from 'react';

const Image = (props) => {
    return <div>
        <img src={props.src} width={props.width} height={props.height} />
    </div>
}

export default Image;