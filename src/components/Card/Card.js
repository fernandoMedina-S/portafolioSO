import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import cardImage from "../../assets/card.jpg";
import admin from "../../assets/admin.PNG";
import almacenamiento from "../../assets/almacenamiento.PNG";
import controladores from "../../assets/controladores.PNG";
import lectura from "../../assets/lectura.PNG";
import multi from "../../assets/multi.PNG";
import lotes from "../../assets/lotes.PNG";

const images = {
    admin: {type: "admin", image: admin},
    almacenamiento: {type: "almacenamiento", image: almacenamiento},
    controladores: {type: "controladores", image: controladores},
    lectura: {type: "lectura", image: lectura},
    multi: {type: "multi", image: multi},
    lotes: {type: "lotes", image: lotes},
}

const Card = (props) => {
  return (
    <div className="card__main-container">
      <img src={images[props.type].image} className="card__image"/>
      <div className="card__text-area">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <IconButton aria-label="view" color="primary" className="card__button">
          <a href={props.link} target="_blank"><ArrowForwardIcon /></a>
        </IconButton>
      </div>
    </div>
  );
};

export default Card;
