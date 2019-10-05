import React from 'react';
import { Link } from 'react-router-dom';
import ManageEntity from 'Module/ManageEntity';
import {EmployeeModel, EmployeeForm} from './Form';
import meta from './meta.json';

const SubHeader = ({ title }) => {
    return (
        <div className="sub-header d-flex flex-row shadow bg-white border rounded">
            <div className="card-icon">
                <i className="material-icons">people</i>
            </div>
            <div className="flex-grow-1">
                <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/" >Home</Link></li>
                        <li className="breadcrumb-item active" aria-current={title}>{title}</li>
                    </ol>
                </nav>
            </div>
        </div>
    );
}
export const Employee = () => {
    const title = "Employee";
    const props ={
        title,
        meta, 
        form: EmployeeModel(EmployeeForm),
        useModal: true,
        subheader: <SubHeader title={title}></SubHeader>
    };
    return (
        <div className="container-fluid py-5 h-100 w-100">
            <ManageEntity {...props} />
        </div>
    );
}
