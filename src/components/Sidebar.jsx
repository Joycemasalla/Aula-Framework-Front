import React from "react";
import SidebarItem from "./SidebarItem/SidebarItem"

function Sidebar (props){
    return(
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
export default  Sidebar;