import React from 'react'
import {FaBeer, FaPen, FaRegCircle, FaTimes} from "react-icons/fa"

export default function Icons({name}) {
    if(name=="circle") return <FaRegCircle/>
    else if(name=="cross") return <FaTimes/>
    else return <FaPen/>
}
