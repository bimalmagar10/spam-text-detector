import { useEffect,useState } from "react";
import DisplayResult from "./DisplayResult";
import InputBox from "./InputBox";
import { client } from "@gradio/client";

const HomePage = () => {
    const [inputValue,setInputValue] = useState('');
    const [loading,setLoading] = useState(false);
    const [output,setOutput] = useState('');
    const checkForSpam = async () => {
        try {
            setLoading(true);
            const app = await client("https://bimal590-text-classify.hf.space/");
            const result = await app.predict("/predict", [		
                        "Howdy!",
            ]);
            if(result?.data) {
                setOutput(result.data[0].label);
                setLoading(false);
            }
        } catch(err) {
            setLoading(false);
        }
     
    };

    useEffect(() => {
        if(!!inputValue) {
            checkForSpam();
        }
    },[inputValue])

    return (
        <div>
            <h1>Spam Text Detector</h1>
            <p>
                This application predicts whether the entered text is spam or not.
                It gives the probability of being the spam text.
            </p>
            <InputBox
               setInput={setInputValue}
               loading={loading}
            />
            <DisplayResult
              loading={loading}
              result={output}
            />
        </div>
    );
};

export default HomePage;

