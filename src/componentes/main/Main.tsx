import { useState } from 'react';
import Filme from './../filme/Filme'
import './Main.css'

export default function Main(){
       const [textodigitado, funcaoMudaVariavel] = useState("Barbie")
       function TrataTexto(){

              console.log("Digitado")
              funcaoMudaVariavel("TERE")
       }
    return(
        <>
        <div className="pesquisar">
              <p>Busque um filme</p>
            <input type="text" className='botao-pesquisa' placeholder='pesquisar' onChange={TrataTexto}/>
            <p>Digitado: {textodigitado}</p>
        </div>
        <main className="content-main">
        <Filme titulo='Barbie' 
               sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de 
               aparência menos do que perfeita, Barbie parte para o mundo humano em 
               busca da verdadeira felicidade.'
               imagem='./barbie-filme.png'
               />
        <Filme titulo='Sereia' 
               sinopse='Barbie é Lumina uma linda sereia, que sonha em ser uma 
               princesa. Desde pequena, Lumina tem um poder mágico de fazer as 
               pérolas dançarem e brilharem.'
               imagem='./barbie-sereia.webp'
               />
        <Filme titulo='Popstar' 
               sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de 
               aparência menos do que perfeita, Barbie parte para o mundo humano em 
               busca da verdadeira felicidade.'
               imagem='./barbie-popstar.jpg'
               />
        <Filme titulo='Escola' 
               sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de 
               aparência menos do que perfeita, Barbie parte para o mundo humano em 
               busca da verdadeira felicidade.'
               imagem='./barbie-escoladeprincesas.jpg'
               />
        <Filme titulo='Portal' 
               sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de 
               aparência menos do que perfeita, Barbie parte para o mundo humano em 
               busca da verdadeira felicidade.'
               imagem='./barbie-portalsecreto.jpg'
               />
        <Filme titulo='Sapatilhas' 
               sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de 
               aparência menos do que perfeita, Barbie parte para o mundo humano em 
               busca da verdadeira felicidade.'
               imagem='./barbie-sapatilhasmagicas.webp'
               />
        <Filme titulo='Fadas' 
               sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de 
               aparência menos do que perfeita, Barbie parte para o mundo humano em 
               busca da verdadeira felicidade.'
               imagem='./barbie-segredodasfadas.jpg'
               />
        <Filme titulo='Agentes' 
               sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de 
               aparência menos do que perfeita, Barbie parte para o mundo humano em 
               busca da verdadeira felicidade.'
               imagem='./barbie-agentes.webp'
               />
        </main>
        </>
    )
}