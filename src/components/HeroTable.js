import React from "react";

export default props => {
    const rows = props.heros.map( hero =>{
        return(
            <tr key={hero.id}>
                <td>{hero.id}</td>
                <td>{hero.name}</td>
                <td>{hero.characterClass}</td>
                <td>{hero.level}</td>
                <td>
                    <button type="button" title ="Editar"
                        className="btn btn-primary"
                        onClick={e => props.edit(hero.id)}>
                        <i className="pi pi-pencil"></i>
                    </button>
                    <button type="button" title ="Excluir"
                        className="btn btn-danger"
                        onClick={e => props.edit(hero.id)}>
                        <i className="pi pi-trash"></i>
                    </button>
                </td>
            </tr>
        )
    })

    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scops = "col">Id</th>
                    <th scops = "col">Name</th>
                    <th scops = "col">CharacterClass</th>
                    <th scops = "col">Level</th>
                    <th scops = "col">Ações</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

