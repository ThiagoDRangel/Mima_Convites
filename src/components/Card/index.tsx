import './styles.css';
import image from '../../assets/images/fundo.png';

function Card () {
  return (
    <div className="container-img">
      <img src={image} alt="imagem de teste" />
      <img src={image} alt="imagem de teste" />
    </div>
  )
}

export default Card;
