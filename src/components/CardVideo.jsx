import React from "react";

function CardVideo(props) {
    return (
        <div>
            <img
                src={props.imagem}
                alt={props.alt}
            />
            <h3>{props.title}</h3>
        </div>
    )
}

export default CardVideo;