import Imagem from "./../../assets/img/barbie-filme.png"
import './Filme.css'
type FilmeProps = {
    titulo:string,
    sinopse:string,
    imagem:string
}

function Filme(props:FilmeProps){
    return(
            <div className="film-content">
                <img src={Imagem} alt="" />
                <div className="text-barbie">
                    <h1>{props.titulo}</h1>
                    <p className="sinopse">{props.sinopse}</p>
                </div>
            </div>
    )
}

export default Filme