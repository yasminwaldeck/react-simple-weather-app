import React from "react";
import styled from "styled-components/macro";


const Card = styled.h1`
    font-size: 4vw;
    padding: 5vw;
    `;

function Welcome(){


    return(

        <div className="Welcome">
            <Card>Don't have a window? Check out the current weather at your location!</Card>
        </div>

    );
}

export default Welcome;