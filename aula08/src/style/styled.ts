import styled from "styled-components"

export const MeuH1 = styled.h1`
    background-color: blueviolet;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    width: 80%;
    border: 2px solid #0f0;
`

export const Header = styled.header`
  background-color: #4CAF50;
  padding: 20px;
  text-align: center;
  color: white;
  font-size: 1.5em;
`

// Estilizando o Footer
export const Footer = styled.footer`
  background-color: #333;
  padding: 10px;
  text-align: center;
  color: white;
  position: fixed;
  width: 100%;
  bottom: 0;
`

export const MainContent = styled.main`
  padding: 20px;
  margin-top: 60px; // Espaço para o Header
  margin-bottom: 40px; // Espaço para o Footer
`

// Estilizando o contêiner do menu
export const Nav = styled.nav`
  background-color: #333;
  padding: 10px;
`

// Estilizando a lista de itens do menu
export const MenuList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
`

// Estilizando o item de lista
export const MenuItem = styled.li`
  display: inline;
`

// Estilizando o item de link
export const MenuLink = styled.a`
  color:#fff;
  text-decoration: none;
  padding: 10px 20px;
  display: block;
`

export const ImgProdutos = styled.img`
  width: 40%;
  display: block;
  margin: 0 auto;

`

export const MinhaTabela = styled.table`
  width:100%;
  border-collapse: collapse;
  margin:20px 0;
  font-size:32px;
  text-align:center;

  &
  thead{
    background-color: #009879;
    color: #a40d0d;
    &
    th{
      padding: 12px 15px;
      border: 1px solid #dddddd;
    }
  }

  &
  tr{
    &:nth-child(even){
      background-color:#c0bebe;
    }
    &:nth-child(odd){
      background-color:#ffffff;
    }
  }

  & td{
    padding: 12px 15px;
    border: 2px solid #818080;
  }

`