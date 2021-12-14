import React from 'react';
import {Alignment, Fit, Layout, useRive, UseRiveParameters} from "rive-react";

const LoadingComponent = () => {
    const params: UseRiveParameters = {
        src: './aulaga-loading.riv',
        autoplay: true,
        artboard: 'main',
        animations: 'Animation 1',
        layout: new Layout({
            fit: Fit.Fill,
            alignment: Alignment.Center
        })
    };

    const {RiveComponent} = useRive(params);

    return (
        <>
            <RiveComponent />
        </>
    );

};

export default LoadingComponent;
