import { Link } from "react-router-dom";
import { listaProdutos } from "../../listaProdutos";
import { BsBoxSeam as Editar} from "react-icons/bs";
import styled from "styled-components";
import { ImgProduto, ImgProdutos } from "../../style/styled";

const MinhaTabela = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 32px;
  text-align: center;

  &
  thead{
    background-color: #009879;
    color: #a40d0d
    &
    th{
      padding: 12px 15px;
      border: 1px solid #dddddd;
    }
  }

  &
  tr{
    &:nth-child(even){
      background-color: #f3f3f3;
    }
    &:nth-child(odd){
      background-color: #ffffff;
    }
  }

  &
  td{
    padding: 12px 15px;
    border: 1px solid #818080;
  }
` 

export default function Produtos(){

      //MUDANDO O TÍTULO DA PÁGINA!!!
      document.title = "PRODUTOS";

    return(
      <div>
        <h1>Produtos Eletrônicos</h1>
        <MinhaTabela>
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
                <td>R$ {produto.preco}</td>
                <td>{produto.qtd}</td>
                <td>{produto.descricao}</td>
                <td><ImgProdutos src={produto.imagem} alt={produto.nome} /></td>
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
        </MinhaTabela>
      </div>
    );
  }