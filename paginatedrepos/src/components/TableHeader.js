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
        <thead><tr>{itemProperties.map(propName => {
            return <th>{_.capitalize(propName)}</th>
        })}</tr></thead>
    )
}