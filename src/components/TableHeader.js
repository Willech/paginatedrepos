import React from 'react';
import _ from 'lodash';

const itemProperties = [
    "date",
    "Open",
    "Close",
    "High",
    "Low",
]

export const TableHeader = () => {
    return(
        <thead>
            <tr>
                {itemProperties.map((name, index) => {
                    return <th key={index}>{_.capitalize(name)}</th>
                })}
            </tr>
        </thead>
    )
}