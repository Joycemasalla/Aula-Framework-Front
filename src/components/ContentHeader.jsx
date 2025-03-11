import React from "react";
import styled from "styled-components";

const ContentHeaderConteiner = styled.div`

    padding: 15px;
    border-bottom: 1px solid #444;
    margin-bottom: 20px;

`
const ContentHeaderTexto = styled.h1`

    font-size: 2em;
    font-weight: bold;
    color: #bb86fc;

`

function ContentHeader(props) {
    return (
        <ContentHeaderConteiner>
        <div className="content-header">
            <ContentHeaderTexto>{props.title}</ContentHeaderTexto>
        </div>
        </ContentHeaderConteiner>
    )
}

export default ContentHeader;