import Card from "../Card/Card";

const Projects = () => {
  return (
    <div className="projects__main-container" id="projects">
      <Card
        title="Multiprogramación"
        description="Programa que simula la concurrencia en un SO, contrario a los lotes"
        link="https://fernandomedina-s.github.io/multiprogramacion/"
        type="multi"
      />
      <Card
        title="Administración de procesos"
        description="Se simula de manera breve el administrador de tareas de un SO"
        link="https://fernandomedina-s.github.io/administrador_procesos/"
        type="admin"
      />
      <Card
        title="Problema de lectura escritura"
        description="Se ve problema de la concurrencia en la SO"
        link="https://fernandomedina-s.github.io/problema-lec-esc/"
        type="lectura"
      />
      <Card
        title="Procesamiento por lotes"
        description="Actividad para simular el antiguo procesamiento por lotes"
        link="https://drive.google.com/file/d/1rR6YkA6kSdYEr02Jv79NsKARVMdenZ7X/view?usp=sharing"
        type="lotes"
      />
      <Card
        title="Administración de E/S"
        description="Se ven las funciones y resposabilidades que tiene un SO en controladores"
        link="https://fernandomedina-s.github.io/controladoresExt/"
        type="controladores"
      />
      <Card
        title="Almacenamiento intermedio"
        description="Similar a la anterior, pero se ve más a fondo en la memoria utilizada"
        link="https://fernandomedina-s.github.io/controladores/"
        type="almacenamiento"
      />
    </div>
  );
};

export default Projects;
