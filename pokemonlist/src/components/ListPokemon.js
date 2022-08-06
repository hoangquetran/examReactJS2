import React, { Component} from "react";
import axios from "axios";

class ListPokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listpoke: [],
            loading: false
        };
    }

    componentDidMount() {
        this.setState({
            loading: true
        });
        axios
            .get("http://localhost:3001/api/users")
            .then(res => {
                this.setState({ users: res.data.results });
            })
            .catch(err => {
                throw err;
            });
    }

    render() {
        const listpokemon = this.state,
            loading = this.state;
        if(loading) return( <div>Loading...</div> )
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>URL</th>
                        </tr>
                    </thead>
                    <tbody>
                    {listpokemon.map((pokemon, index) => (
                        <tr key={pokemon.id}>
                            <td> {pokemon.index}</td>
                            <td> {pokemon.name} </td>
                            <td> {pokemon.url} </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListPokemon;