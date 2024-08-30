import { Link } from "react-router-dom";
import { listaProdutos } from "../../listaProdutos";
import { BsBoxSeam as Editar} from "react-icons/bs";


export default function Produtos(){

      //MUDANDO O TÍTULO DA PÁGINA!!!
      document.title = "PRODUTOS";

    return(
      <div>
        <h1>Produtos Eletrônicos</h1>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Descrição</th>
              <th>Imagem</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {listaProdutos.map((produto) => (
              <tr key={produto.id}>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
                <td>{produto.qtd}</td>
                <td>{produto.descricao}</td>
                <td><img src={produto.imagem} alt={produto.nome} /></td>
                <td><Link to={`/editar/produtos/${produto.id}`}><Editar /></Link></td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={6}>
                Quantidade de produtos: <span>{listaProdutos.length}</span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }