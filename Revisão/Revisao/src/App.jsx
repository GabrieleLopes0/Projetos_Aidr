import "./App.css";
import Header from "./Components/Header";
import Card from "./Components/Card";
import img1 from "./assets/img/img1.jpg";
import img2 from "./assets/img/img2.jpg";

function App() {
  return (
    <>
        <div className="app">
        <Header title="Revisão de React" />

          <section className="cards-conteiner">
            <Card
            img1 = {img1}
            title="Componentes em React"
            description="Entenda como funciona os componentes"/>

            <Card
            img2 = {img2}
            title="Props e reutilização"
            description="aprendendo a reutilizar"/>
          </section>
        </div>
    </>
  )
}

export default App
