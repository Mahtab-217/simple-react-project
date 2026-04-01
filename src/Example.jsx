import { useState } from "react"
import Example2 from "./Example2";

export default function Example(){
     const [value,setValue]= useState(0);
    return (
        <>
        <div className="w-full flex justify-between px-12 my-40">
            <button onClick={()=>setValue(value+1)} className="border px-2 py-1">Add</button>
            <h1 className="text-4xl font-bold">{value}</h1>
            <button  onClick={()=>setValue(value-1)} className="border px-2 py-1">Reduce</button>
            <Example2/>
        </div>
        </>
    )
}