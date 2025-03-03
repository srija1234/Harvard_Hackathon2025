import React, { useState } from "react";

export const SubmitAppointments = () => {
    const [text, setText] = useState<string>()
    const [comment, setComment] = useState<string>()
    const [success, setSuccess] = useState<boolean>()
    const [isDisabled, setIsDisabled] = useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value); // Update the state with the new text
    };
    const handleChangeComments = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value); // Update the state with the new text
    };
    const submitAppointment = async () => {
        setIsDisabled(true)
        let req = await fetch("/postAppointment")
        setSuccess(req.ok)
        setIsDisabled(false)
    }
    return (
        <div>
            <p>Submit appointment with patient:</p>
            <textarea
                onChange={handleChange}
                value={text}
                className="w-full border"
            />
            <p>Add any comments about patient:</p>
            <textarea
                onChange={handleChangeComments}
                value={comment}
                className="w-full border"
            />
            <input
                disabled={isDisabled}
                type="submit"
                onClick={submitAppointment}
                value="Submit"
                className="p-2 bg-blue-500 rounded-md mt-5 text-white cursor-pointer"/>
            <p>
                {success ?
                    "Appointment successfully submitted!"
                : success === false ?
                    "Appointment failed to submit."
                : ""}
            </p>
        </div>
    )
}