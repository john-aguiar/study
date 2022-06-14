import { reducerActionType } from "../types/reducerActionType";


export type StudentType = {
    name: string, 
    age: number | '',
    grade: number | '',
    id: number, 
    currentSemester: number | '',
}

export const studentInitialState: StudentType[]= [
    {
        name: "",
        age: "",
        grade: "",
        id: 0,
        currentSemester: ""
    }
]

export const studentReducer = (state: StudentType[], action: reducerActionType)=> {
    switch(action.type){
        case "ADD_STUDENT": {
           
            // const { name, age, grade, currentSemester } = action.payload.student; Com o Destructuring.
             return [
                ...state, {
                    name: action.payload.name,          // Forma bruta de fazer sem desestruturar
                    age: action.payload.age,
                    grade: action.payload.grade,
                    id: Math.random() * 100,
                    currentSemester: action.payload.currentSemester
                }
            ]
        }

        case "REMOVE_STUDENT":{
            return state.filter((student) => student.id !== action.payload.id)
        }

        case "UPDATE_STUDENT":{
            const { name, age, grade, id, currentSemester} = action.payload  // Exemplo com destructuring
            
            return state.map((student) => {
                if(student.id === id){
                    return {
                        name,
                        age,
                        grade,
                        id,
                        currentSemester
                    }
                } else 
                    return student
            })
        }

        default: 
            return state 
    }// end switch
} // end studentReducer