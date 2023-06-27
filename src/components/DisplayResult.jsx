const DisplayResult = ({result,loading}) => {
    return (
        <div className="result__container">
            {
                loading ? (
                    <span className="result__text loading">
                        Calculating...
                    </span>
                    ) : (
                    <span className="result__text">
                        {result}
                    </span>
                )
            }
        </div>
    )
};

export default DisplayResult;