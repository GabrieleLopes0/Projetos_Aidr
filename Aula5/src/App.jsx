import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Button from "./Components/Button";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import ImgCard from "./Components/ImgCard";
import Count from "./Components/Count";
import "./app.css";

function App() {
  const handleClick = () => {
    alert("Botão clicado!");
  }

  const handleClickConsole = () => {
    console.log("Botão clicado no console");
  }

  return (
    <>
     <div className="container">
        <Header title="Meu site" subTitulo="New Title" />
        <Card />

        <Count />

        <ImgCard caption="Uma imagem interessante" />
        <ImgCard />

        <Button text="Clique aqui" onClickTeste={handleClick} /><br /><br />
        <Button text="Clique aqui, console" onClickTeste={handleClickConsole} /> 

        <Banner>
          <h1>Bem-vindo ao Meu site</h1>
          <p>Aqui você encontra as melhores ofertas!</p>
        </Banner>

        <Footer title="Todos os direitos reservados - 2024" />
     </div>
    </>
  )
}

export default App
