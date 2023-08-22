import Imagem from "./../../assets/img/barbie-filme.png"
import './Filme.css'

function Filme(){
    return(
            <div className="film-content">
                {/* o comentário dentro do JSX é desse formato */}
                <img src={Imagem} alt="" />
                <div className="text-barbie">
                    <h1>Barbie</h1>
                    <p className="sinopse">Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.</p>
                </div>
            </div>
    )
}

export default Filme