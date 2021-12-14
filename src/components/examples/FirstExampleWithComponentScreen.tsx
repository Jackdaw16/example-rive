import React, {useState} from 'react';
import {Link, useHistory } from 'react-router-dom';
import LoadingComponent from "../LoadingComponent";

const FirstExampleWithComponentScreen = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    return (
        <div className={"container"}>
            <div className={(loading) ? "anim" : "not-anim"}>
                <LoadingComponent />
            </div>
            <button onClick={() => setLoading((loading) ? false : true)}>Change visibility</button>
            <button>
                <Link to={'/second'}>Go next</Link>
            </button>
        </div>
    );

}

export default FirstExampleWithComponentScreen;
