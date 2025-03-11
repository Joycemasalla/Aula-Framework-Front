import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
    background: #1a0933;
    color: #e0e0e0;
    text-align: center;
    padding: 15px;
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;
    font-size: 0.9em;
    border-top: 1px solid #444;
`

function Footer(props) {
    return (
        <FooterContainer>
        <div className="footer">
            <p>&copy; 2025 PlayTube</p>
        </div>
        </FooterContainer>
    )
}
export default Footer;