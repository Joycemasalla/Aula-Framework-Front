import React from "react";
import SidebarItem from "./SidebarItem"
import styled from "styled-components";

const SidebarConteiner = styled.div`
  padding: 10px;
    cursor: pointer;
    transition: background 0.3s;
    border-radius: 4px;
    color: rgb(50, 251, 226);

    &:hover{
    background-color: rgba(50, 251, 226, 0.1);
    color: #ffffff;
    }
`

function Sidebar(props) {
  return (
    <div className="sidebar">
      <ul>
        <SidebarItem
          texto="Início"
          subtitulo="Clique para ver os vídeos em destaque"
        />
        <SidebarItem texto="Sobre" subtitulo="Saiba mais" />
        <SidebarItem texto="Contato" subtitulo="Entre em contato conosco" />

      </ul>
    </div>
  )
}
export default Sidebar;