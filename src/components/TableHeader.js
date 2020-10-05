import React from 'react';
import _ from 'lodash';

const itemProperties = [
    "Rank",
    "Name",
    "Date created",
    "Watchers",
    "Forks"
]

export const TableHeader = () => {
    return(
        <thead>
            <tr>
                {itemProperties.map((propName, index) => {
                    return <th key={index}>{_.capitalize(propName)}</th>
                })}
            </tr>
        </thead>
    )
}