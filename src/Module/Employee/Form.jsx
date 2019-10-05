import React from 'react';
import { withFormik } from 'formik';
import { object, number, date } from 'yup';
import { TextBox, DatePicker, hashObject } from 'joy-ui';


const employeeSchema = object().shape({
    salary: number().required('Salary is required'),
    joinDate: date().required('Join Date date is required'),
    leaveDate: date().nullable(true),
    payroll: number().required()
});

export const EmployeeModel = withFormik({
    validationSchema: employeeSchema,
    enableReinitialize:true,
    mapPropsToValues: props => props.data,
    handleSubmit: async (values, { props, setSubmitting, setErrors }) => {
        const hashValue = await hashObject(values);
        if (hashValue !== props.hashing) {
            await props.onSave(values);
        }
        setSubmitting(false);
    },
    displayName: 'edit-employee',
    validateOnChange: true
});

export const EmployeeForm = props => {
    const {
        dirty,
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue
    } = props;
    const commonProps = {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <TextBox
                    className="col-md-6"
                    label="name"
                    name="name"
                    {...commonProps}
                />
                <TextBox
                    className="col-md-6"
                    name="salary"
                    label="salary"
                    {...commonProps}
                />
            </div>
            <div className="form-row">
                <DatePicker
                    className="col-md-6"
                    name="joinDate"
                    label="Join Date"
                    {...commonProps}
                />
                <DatePicker
                    className="col-md-6"
                    name="leaveDate"
                    label="leave Date"
                    {...commonProps}
                />
            </div>
            <div className="form-row">
                <TextBox
                    className="col-md-12"
                    name="payroll"
                    label="payroll"
                    {...commonProps}
                >
                    >
                </TextBox>
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <button
                        type="submit"
                        className="btn btn-sm btn-primary"
                        disabled={isSubmitting || !dirty}
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};