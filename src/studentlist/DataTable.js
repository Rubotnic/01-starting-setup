import React from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>lastName Name</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
            </thead>
    );
}

const TableRow = () => {
    return (
        <tbody>
            <tr>
                <td>1</td>
                <td>Robert</td>
                <td>Robertsson</td>
                <td>75</td>
                <td><TableAction /></td>
            </tr>

            <tr>
                <td>2</td>
                <td>Stefan</td>
                <td>Stefansson</td>
                <td>89</td>
                <td><TableAction /></td>
            </tr>

            <tr>
                <td>3</td>
                <td>Gunnar</td>
                <td>Gunnarsson</td>
                <td>83</td>
                <td><TableAction /></td>
            </tr>

        </tbody>
    );
}

const TableAction = () => {
    return(
        <>
        <button className='btn btn-primary'> Details</button>
    </>
    );
}

const DataTable = () => {
    return (
        <div> 
            <table className='table table-light table-striped' border="1" onClick='()'>
                <TableHeader />
                <TableRow/>
                </table>
            </div>
    );
};

export default DataTable;