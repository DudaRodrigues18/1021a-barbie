import Filme from './../filme/Filme'
import './Main.css'

export default function Main(){
    return(
        <>
        <div className="pesquisar">
            <input type="text" placeholder='pesquisar'/>
            <p>Digitado:</p>
        </div>
        <main className="content-main">
        <Filme titulo='Barbie' 
               sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de 
               aparência menos do que perfeita, Barbie parte para o mundo humano em 
               busca da verdadeira felicidade.'
               imagem='./barbie-filme.png'
               />
        <Filme titulo='Barbie' 
               sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de 
               aparência menos do que perfeita, Barbie parte para o mundo humano em 
               busca da verdadeira felicidade.'
               imagem='./barbie-sereia.webp'
               />
        <Filme titulo='Filme Barbie' 
               sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de 
               aparência menos do que perfeita, Barbie parte para o mundo humano em 
               busca da verdadeira felicidade.'
               imagem='./barbie-popstar.jpg'
               />
        <Filme titulo='Filme Barbie' 
               sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de 
               aparência menos do que perfeita, Barbie parte para o mundo humano em 
               busca da verdadeira felicidade.'
               imagem='./barbie-escoladeprincesas.jpg'
               />
        <Filme titulo='Filme Barbie' 
               sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de 
               aparência menos do que perfeita, Barbie parte para o mundo humano em 
               busca da verdadeira felicidade.'
               imagem='./barbie-portalsecreto.jpg'
               />
        <Filme titulo='Filme Barbie' 
               sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de 
               aparência menos do que perfeita, Barbie parte para o mundo humano em 
               busca da verdadeira felicidade.'
               imagem='./barbie-sapatilhasmagicas.webp'
               />
        <Filme titulo='Filme Barbie' 
               sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de 
               aparência menos do que perfeita, Barbie parte para o mundo humano em 
               busca da verdadeira felicidade.'
               imagem='./barbie-segredodasfadas.jpg'
               />
        <Filme titulo='Filme Barbie' 
               sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de 
               aparência menos do que perfeita, Barbie parte para o mundo humano em 
               busca da verdadeira felicidade.'
               imagem='./barbie-agentes.webp'
               />
        </main>
        </>
    )
}