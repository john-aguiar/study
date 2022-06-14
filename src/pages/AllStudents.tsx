import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { StudentComponent } from "../components/StudentsComponent/StudentComponent";
import { Context } from "../contexts/Context";
import { useStudentContext } from "../contexts/StudentContext"

export const AllStudents = () => {

    return(
        <>
        <StudentComponent />
        <Link to="/"> Voltar ao Home</Link>
        </>
    )
}         