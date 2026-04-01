import { useState } from "react"

export default function Example2(){
    const [v,setV]=useState("something");
    return (
        <div className="flex flex-col gap-2.5">
            <h1 className="text-3xl">{v}</h1>
            <input value={v} onChange={(e)=>setV(e.target.value)} className="border py-2 px-4 w-full" type="text" />
        </div>
    )
}