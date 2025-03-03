import React from "react";
import { useState, useEffect } from 'react';

export const Appointments = () => {
    const [data, setData] = useState<any>()
    useEffect(() => {
        fetch("/getAppointments").then(res => res.json())
            .then(setData)
    }, [])
    return (
        <div>
            <h1 className="mt-1 text-xl font-bold mb-2">Appointments</h1>
            <table>
                <tr>
                    <th className="p-2">Appointment Time</th>
                    <th className="p-2">Comments</th>
                </tr>
                {data !== undefined && data.map((apt: any) => (<tr>
                    <td className="p-2">{new Date(apt.Date).toString()}</td>
                    <td className="p-2">{apt.Comments}</td>
                </tr>))}
            </table>
        </div>
    )
}