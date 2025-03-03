import React, {useState} from "react";

export const DailyCheck = () => {
    const [sliderValue, setSliderValue] = useState<number>(3)
    useState<number>();
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [isChecked2, setIsChecked2] = useState<boolean>(false);
    const [isChecked3, setIsChecked3] = useState<boolean>(false);
    const [textValue, setTextValue] = useState<string>('');
    const [success, setSuccess] = useState<null|boolean>()

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue(parseInt(e.target.value));
    };
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
    };
    const handleCheckboxChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked2(e.target.checked);
    };
    const handleCheckboxChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked3(e.target.checked);
    };
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextValue(e.target.value);
    };
    const handleSubmit = () => {
        alert(
            'Slider Value: ${sliderValue}\nCheckbox Checked: ${isChecked}\nText Value: ${textValue}'
        );
    };
    const submitCheckin = async () => {
        let req = await fetch("/submitCheckin")
        setSuccess(req.ok)
    }
    return (
        <div className="flex justify-center">
            <div className="w-160 bg-gray-100 rounded-md p-4">
                    <h1 className="mt-1 text-xl font-bold mb-2">Daily Check-In</h1>
                    <div>
                        <label htmlFor="slider">Mood Scale: {sliderValue}</label>
                            <input
                                type="range"
                                id="slider"
                                min="1"
                                max="5"
                                value={sliderValue}
                                onChange={handleSliderChange}
                                className="block"
                            />
                            <p>Please rate on a scale from 1-5, 1 being the worst.</p>
                    </div>
                    <div className="mt-5 mb-5">
                        <label>
                            <input 
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            className="mr-1"
                            />
                            Sleep Disturbance
                        </label>
                 
                        <br />
                        <label>
                            <input 
                            type="checkbox"
                            checked={isChecked2}
                            onChange={handleCheckboxChange2}
                            className="mr-1"
                            />
                            Appetite/Cravings
                        </label>
                        <br>
                        </br>
                        <label>
                            <input 
                            type="checkbox"
                            checked={isChecked3}
                            onChange={handleCheckboxChange3}
                            className="mr-1"
                            />
                        </label>
                        Abnormal Energy Levels
                    </div>
                <div>
                    <label htmlFor="textbox">Adverse Reactions:</label>
                    <textarea 
                        id="textbox"
                        value={textValue}
                        onChange={handleTextChange}
                        className="block w-full h-50 border rounded-md"
                    />
                </div>

                <input
                    type="submit"
                    onClick={submitCheckin}
                    value="Submit"
                    className="p-2 bg-blue-500 rounded-md mt-5 text-white cursor-pointer"/>
                <p>
                    {success ?
                        "Check-in successfully submitted!"
                    : success === false ?
                        "Check-in failed to submit."
                    : ""}
                </p>
            </div>
        </div>
    );
};

