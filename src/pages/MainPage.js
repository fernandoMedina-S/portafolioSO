import Projects from "../components/Projects/Projects";
import Conclusion from "../components/Conclusion/Conclusion";

const MainPage = () => {
    return (
        <>
            <div className="main-page__main-container">
                    <h1>Seminario de solución de propblemas de sistemas operativos</h1>
                    <h2>Sección D05</h2>
                    <h3>Profesor: FRANCISCO JAVIER QUINTANILLA MORENO</h3>
                    <h3>Alumno: Medina Sandoval José Fernando 215506121</h3>
                    <button><a href="#projects">Programas</a></button>
                    <button><a href="#conclusion">Conclusiones</a></button>
            </div>
            <Projects/>
            <Conclusion/>
        </>
    )
}

export default MainPage;