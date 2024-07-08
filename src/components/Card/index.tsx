import './styles.css';
import image from '../../assets/images/fundo.png';

function Card () {
  return (
    <div className="container-img">
      <img className="img-1" src={image} alt="imagem de teste" />
      <div className="container-img-2">
        <img className="img-2" src={image} alt="imagem de teste" />
        <div className="container-img-3">
          <img className="img-3" src={image} alt="imagem de teste" />
          <img className="img-4" src={image} alt="imagem de teste" />
        </div>
      </div>
    </div>
  );
}

export default Card;
