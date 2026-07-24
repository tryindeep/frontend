"use client"

import { useState } from "react";
export default function ChatBox(){
    const [message, setMessage] = useState("");
    return <div>
        <div className="flex justify-center">
            <span className="border rounded">
                <input onChange={(e) => {
                setMessage(e.target.value)
                }}
                type="text" placeholder="Start typing..." className="w-lg  p-8 "/>

                <button onClick={() => {
                }} className="p-4 cursor-pointer"> Send</button>
            </span>
        </div>
    </div>
}