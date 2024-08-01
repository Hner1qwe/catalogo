// Dentro do `map`, crie um botão para cada item.
// Utilize o atributo `onClick` para definir a ação do botão.
// No valor do `onClick`, chame a função `removerItemPedidos`.
// Passe o identificador (`id`) do item como parâmetro para `removerItemPedidos`, o mesmo que você usa no `map`.
// No conteúdo do botão, coloque o texto "Remover".

import { useState } from "react";

export default function Home() {

  const[listaProdutos, setlistaProdutos] = useState([
    {id: 0, 
    nome: "mouse",
    preço: 120.00
    },
    
      {id: 1, 
      nome: "teclado",
      preço: 200.00
      },
      
        {id: 2, 
        nome: "mousepad",
        preço: 97.80
        }])

        const [listaPedidos, setListaPedidos] = useState([]);

        const adicionarAlista = (objeto) => {
          setListaPedidos([...listaPedidos,objeto])
        }

  return (
    <div>
          <h1>Periféricos gamer</h1>
       { listaProdutos.map((Produto) =>
       <div> key={Produto.id}
       <p>{Produto.nome}</p>
       <p>{Produto.preço}</p>
       <button onClick={() => removerProduto(Produto)}>Remover</button>
       </div>
       )} 
    </div>
  );
}