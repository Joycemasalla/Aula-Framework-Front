import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import ContentHeader from "./components/ContentHeader";
import CardVideo from "./components/CardVideo";

function App() {
  

  return (
    <div>
      <Topbar />

      <div className="container">
        <Sidebar />

        <div className="content">
          <ContentHeader title="Vídeos em destaques" />



          <div className="videos">

            <CardVideo title="Como Criar Componentes no React: Passo a Passo para Iniciantes"
              imagem="https://picsum.photos/250/150?random=1"
              alt="Como criar Componentes no React" />



            <CardVideo title="React Hooks: Entendendo useState e useEffect na Prática"
              imagem="https://picsum.photos/250/150?random=2"
              alt="React Hooks: Entendendo useState e useEffect na Prática"
            />



            <CardVideo title="Dominando JSX: Como Escrever Código Limpo e Eficiente em React"
              imagem="https://picsum.photos/250/150?random=3"
              alt="Dominando JSX: Como Escrever Código Limpo e Eficiente em React"
            />



            <CardVideo title="Gerenciamento de Estado em React com Context API"
              imagem="https://picsum.photos/250/150?random=4"
              alt="Gerenciamento de Estado em React com Context API"
            />



            <CardVideo title="Integrando APIs Externas no React: Consumindo Dados de Forma
                Eficiente"
              imagem="https://picsum.photos/250/150?random=5"
              alt="Integrando APIs Externas no React: Consumindo Dados de Forma Eficiente"
            />



            <CardVideo title="Roteamento no React com React Router: Guia Completo"
              imagem="https://picsum.photos/250/150?random=6"
              alt="Roteamento no React com React Router: Guia Completo"
            />



            <CardVideo title="Estilos no React com Styled-Components: A Forma Moderna de
                Trabalhar com CSS"
              imagem="https://picsum.photos/250/150?random=7"
              alt="Estilos no React com Styled-Components: A Forma Moderna de Trabalhar com CSS"
            />



            <CardVideo title="React vs Angular vs Vue: Qual Framework Escolher para seu
                Projeto Frontend?"
              imagem="https://picsum.photos/250/150?random=8"
              alt="React vs Angular vs Vue: Qual Framework Escolher para seu Projeto Frontend?"
            />

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
