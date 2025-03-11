import React from "react";
import styled from "styled-components";

const SidebarItemConteiner = styled.div`
  padding: 10px;
    cursor: pointer;
    transition: background 0.3s;
    border-radius: 4px;
    color: rgb(50, 251, 226);

    &:hover{
      background-color: rgba(50, 251, 226, 0.1);
    /* Hover com fundo translúcido */
    color: #ffffff;
    /* Muda a cor do texto ao passar o mouse */

    }
`



function SidebarItem(props) {
  function clickItem() {
    alert("Em breve...");
  }

  return (
    <SidebarItemConteiner>
      <li className="sidebar-item" onClick={clickItem} title={props.subtitulo}>
        {props.texto}
      </li>
    </SidebarItemConteiner>

  );
}

export default SidebarItem;
