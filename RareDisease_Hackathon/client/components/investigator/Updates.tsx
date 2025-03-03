import React, { useState } from "react";

export const Updates = () => {
    const [text, setText] = useState<string>()
    const [success, setSuccess] = useState<boolean>()
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value); // Update the state with the new text
      };
    const submitUpdate = async () => {
        let req = await fetch("/postUpdate")
        setSuccess(req.ok)
    }
    return (
        <div>
            <p>Send update to patient:</p>
            <textarea
                onChange={handleChange}
                value={text}
                className="w-full border"
            />
            <input
                type="submit"
                onClick={submitUpdate}
                value="Submit"
                className="p-2 bg-blue-500 rounded-md mt-5 text-white cursor-pointer"/>
            <p>
                {success ?
                    "Update successfully submitted!"
                : success === false ?
                    "Update failed to submit."
                : ""}
            </p>
        </div>
    )
}