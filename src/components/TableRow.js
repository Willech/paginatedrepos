import React from 'react';

export const TableRow = (props) => {
    const { name, created_at, watchers_count, forks_count, html_url } = props.repoObject;
    return (
        <tr>
            <td>{props.rank}</td>
            <td><a href={html_url}>{name}</a></td>
            <td>{created_at.split('T')[0]}</td>
            <td>{watchers_count}</td>
            <td>{forks_count}</td>
        </tr>
    )
}

export default TableRow;