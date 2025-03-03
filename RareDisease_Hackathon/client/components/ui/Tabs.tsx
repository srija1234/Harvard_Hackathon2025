import React, { useState } from "react";

interface Data {
    [name: string]: React.ReactNode|React.JSX.Element
}

interface Props {
    data: Data
}

export const Tabs = (props: Props) => {
    const [activeTab, setActiveTab] = useState<string>(Object.keys(props.data)[0]);

    return (
        <div className="flex h-screen flex-col">
            <div className="flex flex-grow h-full">
                <div className="w-1/4 bg-gray-100 p-4">
                    <ul className="space-y-4">
                        {Object.keys(props.data).map(tab => (
                            <li
                                key={tab}
                                className={`p-2 rounded cursor-pointer ${
                                    activeTab === tab ? "bg-gray-300 font-semibold" : "bg-pink-200"
                                }`}
                                onClick={() => setActiveTab(tab)}
                                >
                                {tab}
                            </li>
                        ))}
                    </ul>
                </div>
                {Object.keys(props.data).map(tab => (
                    <div key={`${tab}-content`}className={`w-3/4 h-full p-5 bg-white overflow-auto${activeTab === tab ? "" : " hidden"}`}>
                        {props.data[tab]}
                    </div>
                ))}
            </div>
        </div>
    )
}