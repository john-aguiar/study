import { useState, useContext } from "react";
import { Context } from "../../contexts/Context";

import "./style.css";


export const StudentComponent = () => {


    const { dispatch, state } = useContext(Context);
    const [name, setName] = useState('')
    const [age, setAge]= useState('')
    const [grade, setGrade] = useState('')
    const [currentSemester, setCurrentSemester] = useState('')


    function handleAddAluno(){
        dispatch({
            type: 'ADD_STUDENT',
            payload: {
                name,
                age,
                grade,
                currentSemester,
            }
        })
    }

    function handleRemoveAluno(id: number){
        dispatch({
            type: "REMOVE_STUDENT",
            payload: {
                id
            }
        })
    }

    function handleEditAluno(id:number){
        dispatch({
            type:"UPDATE_STUDENT",
            payload: {
                name,
                age,
                grade,
                currentSemester,
                id
            }
        })
    }

    return (
        <>
            <h1>All Students</h1>
            <div className="students-list">
                {state.student.map((student)=> (
                    <div key={student.id}>
                        Nome: {student.name} <br/>
                        Idade: {student.age} <br/>
                        Grade: {student.grade} <br/>
                        Semestre: {student.currentSemester} <br/>
                        <button onClick={()=>handleRemoveAluno(student.id)}>Remove Student</button>
                        <button onClick={()=>handleEditAluno(student.id)}>EDIT ALUNO</button>
                    </div>
                ))}
            </div>

            <hr/>
            <input type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="age" value={age} onChange={(e)=>setAge(e.target.value)}/>
            <input type="text" placeholder="grade" value={grade} onChange={(e)=>setGrade(e.target.value)}/>
            <input type="text" placeholder="currentSemester" value={currentSemester}  onChange={(e) => {setCurrentSemester(e.target.value);
          }}/>
            <button onClick={handleAddAluno}> Add Aluno </button>
        </>
    )



}