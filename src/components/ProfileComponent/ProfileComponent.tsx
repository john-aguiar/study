import { useContext, useState } from 'react';
import { Context } from '../../contexts/Context';
import './style.css'

export const ProfileComponent = () => {

    const { state, dispatch } = useContext(Context);
    const [name, setName] = useState(state.profile.name);
    const [discipline, setDiscipline ] = useState(state.profile.discipline);
    const [birth, setBirth] = useState(state.profile.birth);

    function handleSaveNameChange() {
        dispatch({
            type: 'CHANGE_PROFILE',
            payload: {
                name: name,
            }
        })
    }

    return(
        <>
            <h1>Profile Component</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!</p>
        
            <span>Nome: {state.profile.name}</span>
            <input placeholder="Insira o novo nome" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={handleSaveNameChange}>Salvar</button>
            <h1>{state.profile.discipline}</h1>
        </>
    )
}