import { useState } from "react";

const InputBox = ({setInput,loading}) => {
    const [value,setValue]= useState('');
    const handleInputValue = (event) => {
        setValue(event.target.value);
    };
   const handleSubmit = (e) => {
        e.preventDefault();
        setInput(value);
        setValue('');
    };
    const handleReset = () => {
        setValue('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="form__wrapper">
                <div className="form__input--wrapper">
                    <label className="form__label">Review</label>
                    <input
                    className="form__input"
                    type="text"
                    value={value}
                    onChange={handleInputValue}
                    />
                </div>
                <div className="button__container">
                    <button
                      className="button reset"
                      onClick={handleReset}
                    >
                        Clear
                    </button>
                    <button
                    className="button submit"
                    type="submit"
                    disabled={loading}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
};

export default InputBox;