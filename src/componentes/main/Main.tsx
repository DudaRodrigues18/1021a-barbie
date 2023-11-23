import { useState } from 'react';
import Filme from './../filme/Filme'
import axios from "axios"
import './Main.css'

type FilmeType = {
       id:number,
       titulo:string,
       sinopse:string,
       imagem:string
}

export default function Main(){
       const [texto, setTexto]=useState("")

       const [dados, setDados] = useState([]);

       useEffect(() => {
        const procurarFilmes = async ( => {
          try {
            const resposta = await axios.get('localhost:3000/filmes')

            setDados(resposta.data);
          }
        })
       })

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