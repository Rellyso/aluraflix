import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'

function CadastroCategoria() {
    const [categorias, setCategorias] = useState([])
    const initialValues = {
        name: '',
        description: '',
        color: ''
    }
    const [values, setValues] = useState(initialValues)


    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value
        })
    }

    function functionHandler(e) {
        // const { getAttribute, value } = e.target
        setValue(
            e.target.getAttribute('name'),
            e.target.value
        )
    }
    return (
        <PageDefault>
            <h1>Cadastro de categoria: {values.name}</h1>

            <form onSubmit={function handleSubmit(e) {
                e.preventDefault()
                setCategorias([
                    ...categorias,
                    values
                ])

                setValues(initialValues)
            }}>
                <FormField
                    label="Nome da Categoria: "
                    type="text"
                    name="name"
                    value={values['name']}
                    onChange={functionHandler}
                />

                <FormField
                    label="Descrição: "
                    type="text"
                    name="description"
                    value={values['description']}
                    onChange={functionHandler}
                />
                <div>
                    <label htmlFor="description">Descrição: </label>
                    <textarea
                        name="description"
                        id="description"
                        value={values.description}
                        onChange={functionHandler}
                    />
                </div>

                <FormField
                    label="Cor: "
                    type="color"
                    name="color"
                    value={values['color']}
                    onChange={functionHandler}
                />

                <button type="submit">Cadastrar</button>

            </form>

            <ul>
                {categorias.map((categoria, index) => {
                    return (
                        <li key={`${categoria.name}${index}`} >
                            {categoria.name}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para home
        </Link>
        </PageDefault>
    )
}

export default CadastroCategoria