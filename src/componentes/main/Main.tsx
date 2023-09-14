import { useState } from 'react';
import Filme from './../filme/Filme'
import './Main.css'

type FilmeType = {
       id:number,
       titulo:string,
       sinopse:string,
       imagem:string
}

export default function Main(){
       const [texto, setTexto]=useState("")

       const filmes = [
              {
                id: 1,
                titulo: 'Barbie',
                sinopse: "Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
                imagem: './barbie-filme.png'
              },
              {
                id: 2,
                titulo: 'Sereia',
                sinopse: 'Barbie é Lumina uma linda sereia, que sonha em ser uma princesa. Desde pequena, Lumina tem um poder mágico de fazer as pérolas dançarem e brilharem.',
                imagem: './barbie-sereia.webp'
              },
              {
                id: 3,
                titulo: 'Popstar',
                sinopse: 'Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.',
                imagem: './barbie-popstar.jpg'
              }
              {
                id: 4,
                titulo: 'Portal secreto',
                sinopse: "Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
                imagem: './barbie.portalsecreto.jpg'
              },
              {
                id: 5,
                titulo: 'Segredo das Fadas',
                sinopse: 'Barbie é Lumina uma linda sereia, que sonha em ser uma princesa. Desde pequena, Lumina tem um poder mágico de fazer as pérolas dançarem e brilharem.',
                imagem: './barbie-segredodasfadas.jpg'
              },
              {
                id: 6,
                titulo: 'Popstar',
                sinopse: 'Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.',
                imagem: './barbie-popstar.jpg'
              }
            ];

       function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
              setTexto(e.target.value)
       }
    return(
        <>
        <div className="pesquisar">
            <input type="text" className='botao-pesquisa' placeholder='Pesquise um filme' onChange={TrataTexto}/>
            {texto && <p>Resultados para: {texto}</p>}    
        </div>

        <main className="content-main">
        {
                    filmes.filter((filme)=>filme.titulo.toLowerCase().includes(texto)).map(
                        (filme)=>
                            <Filme 
                                key={filme.id}
                                sinopse={filme.sinopse}
                                titulo={filme.titulo}
                                imagem={filme.imagem}
                            />
                    )
                }
    </main>
        </>
    )
}