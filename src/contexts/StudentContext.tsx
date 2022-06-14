/* NÃO ESTÁ SENDO USADO */
/* NÃO ESTÁ SENDO USADO */

/* NÃO ESTÁ SENDO USADO */

/* NÃO ESTÁ SENDO USADO */

/* NÃO ESTÁ SENDO USADO */

/* NÃO ESTÁ SENDO USADO */

/* NÃO ESTÁ SENDO USADO */
/* NÃO ESTÁ SENDO USADO */
/* NÃO ESTÁ SENDO USADO */
/* NÃO ESTÁ SENDO USADO */


import { createContext, useReducer, Dispatch, useContext } from "react";

import { studentReducer, StudentType } from "../reducers/studentReducer";
import { reducerActionType } from "../types/reducerActionType";


export type StudentContextType = {
    students: StudentType[];
    dispatch: Dispatch<reducerActionType>;
}

export const StudentContext = createContext<StudentContextType | null>(null);

export function useStudentContext(): StudentContextType {
    const context = useContext(StudentContext);

    if(context === undefined){
        throw new Error("useStudentContext must be used within a StudentContextProvider");
    }

    if(context === null){
        throw new Error("Student context is null");
    }

    return context;
}   

export function StudentContextProvider({children}: {children: React.ReactNode}){
    const [students, dispatch] = useReducer(studentReducer, []);
    const context = {
        students,
        dispatch,
    }

    return(
        <StudentContext.Provider value={context}>
            {children}
        </StudentContext.Provider>
    )
}