// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.

export default function Home() {
  const[listaProdutos, setlistaProdutos] = usestate([
  {id: 0, 
  nome: mouse,
  preço: 120.00
  },
  
    {id: 0, 
    nome: teclado,
    preço: 200.00
    },
    
      {id: 0, 
      nome: mousepad,
      preço: 97.80
      }])

  return (
    <div>
        
    </div>
   
  );
}

