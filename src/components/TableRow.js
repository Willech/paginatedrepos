import React from 'react';

export const TableRow = (props) => {
    const { open, close, high, low, time } = props.btcObject;
    const prevHigh = props.prevBtcObject.high;
    const highDiff = high - prevHigh;
    let date = new Date(0)
    date.setUTCSeconds(time);

    return (
        <tr>
            <td>{date.toDateString()}</td>
            <td>{open}</td>
            <td>{close}</td>
            <td className={ highDiff > 0 ? "positive-background" : "negative-background"}>{high}</td>
            <td>{low}</td>
        </tr>
    )
}

export default TableRow;