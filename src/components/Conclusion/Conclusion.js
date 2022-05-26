const Conclusion = () => {
  return (
    <div className="conclusion__main-container" id="conclusion">
      <h1>Conclusiones</h1>
      <p>
        Los sistemas operativos son algo con lo que interactuamos todos los
        días, y aún así, yo solo conocía unaparte de su funcionamiento.<br/>
        Los drivers son una parte fundamental del sistema operativo, después de 
        realizar estas actividades se puede demostrar que si no se implementaran de manera correcta, 
        el sistema tendría muchísimas deficiencias.
        Otro punto que se pudo ver de mejor manera fue el manejo de la concurrencia: Habiendo
        sistemas que permiten el uso de varios usuarios a la vez (siendo lo más frecuente en estos días),
        se cae en el dilema de cómo manejar los procesos con el menor número de errores posibles. El procesamiento
        por lotes y la multiprogramación entran en juego, ya que puede haber módulos del mismo que no 
        estén con el mismo patron de diseño.<br/>
        Y hablando de la misma concurrencia, el diseño que se tiene al acceso a la memoria principal
        puede ser aplicable fuera del ámbito de los SO, esto porque controla las entradas y también la
        lectura de diferentes fuentes, pueden ser cosas como bases de datos o incluso archivos de texto.<br/>
        Aún hay muchísimos procesos en los sistemas operativos que pueden invesigarse a fondo, pero los fundamentos
        son los más importantes y en base a estas actividades, y de manera personal, he podido comprender los 
        conceptos detrás de su funcionamiento, por lo que puedo investigar más o incluso aplicar estos patrones de
        diseño y algoritmos en otras áreas.
      </p>
    </div>
  );
};

export default Conclusion;
