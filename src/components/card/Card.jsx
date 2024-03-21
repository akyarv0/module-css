import Buton from "../buttons/Buton";

const Card = ({ lang, img }) => {
    return (
      <div>
        <div className="wrapper">
          <h1>{lang} </h1>
        </div>
        <img className= "images" src={img} alt={lang} />
        <Buton />
      </div>
    );
  };
  export default Card;
  