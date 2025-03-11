import React from "react";
import styled from "styled-components";

const TopBarContainer = styled.div`
  background: rgb(111, 66, 193);
  color: white;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const SiteName = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

const Links = styled.a`
  color: white;
  text-decoration: none;
  margin-left: 20px;
  font-weight: 400;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

function Topbar(props) {
    return (
        <TopBarContainer>
        <div className="topbar">
            <SiteName>PlayTube</SiteName>
            <div className="links">
                <Links>Cadastrar</Links>
                <Links>Logar</Links>
            </div>
        </div>
        </TopBarContainer>
    )
}

export default Topbar;