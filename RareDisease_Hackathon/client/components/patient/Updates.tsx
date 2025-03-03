import React from "react";
import { useState, useEffect } from 'react';

export const Updates = () => {
    const [data, setData] = useState<any>()
    useEffect(() => {
        fetch("/getUpdates").then(res => res.json())
            .then(setData)
    }, [])
    return (
        <div>
            <h1 className="mt-1 text-xl font-bold mb-2">Updates</h1>
            <table>
                <tr>
                    <th className="p-2">Time</th>
                    <th className="p-2">Message</th>
                </tr>
                {data !== undefined && data.map((apt: any) => (<tr>
                    <td className="p-2">{new Date(apt.Date).toString()}</td>
                    <td className="p-2">{apt.Message}</td>
                </tr>))}
            </table>
        </div>
    )
}