import React from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

function CadastroCategoria() {
    return(
      <PageDefault>
        <h1>Cadastro de categoria</h1>

        <form>
            <label for="category">Nome da Categoria</label>
            <input type="text" name="category" id="category"/>

            <button type="submit">Cadastrar</button>

        </form>

        <Link to="/">
          Ir para home
        </Link>
      </PageDefault>
    )
  }

export default CadastroCategoria