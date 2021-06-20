import React, {useState, useEffect} from 'react';
import useClock from "../../hooks/Clock";

function Clock(props) {

    const {timeString} = useClock();

    return (
        <div style={{frontSize: '42px'}}>{timeString}</div>
    );
}

export default Clock;