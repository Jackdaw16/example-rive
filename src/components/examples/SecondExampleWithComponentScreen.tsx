import React, {useState} from 'react';
import LoadingComponent from "../LoadingComponent";

const SecondExampleWithComponentScreen = () => {

    const [loading, setLoading] = useState(false);

    return (
        <div className={"container"}>
            <div className={(loading) ? "anim" : "not-anim"}>
                <LoadingComponent />
            </div>
            <button onClick={() => setLoading((loading) ? false : true)}>Change visibility</button>
        </div>
    );

};

export default SecondExampleWithComponentScreen;
