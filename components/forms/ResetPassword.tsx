import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

interface IState {
    currentPassword: string;
    password: string;
    confirmPassword: string;
}

const ResetPasswordForm: React.FC = () => {
    const initialValue: IState = {
        currentPassword: '',
        password: '',
        confirmPassword: '',
    };

    const ResetPassSchema = Yup.object().shape({
        currentPassword: Yup.string().required('Required'),
        password: Yup.string()
            .required('No password provided.')
            .min(8, 'Password should be 8 chars minimum.'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords do not match'),
    });

    const handleSubmit = (values: IState) => {
        console.log(values);
    };

    return (
        <div className="profile-wrap">
            <div className="card">
                <h1>Reset Password</h1>
                <div className="card-content">
                    <Formik
                        initialValues={initialValue}
                        validationSchema={ResetPassSchema}
                        onSubmit={(values) => {
                            handleSubmit(values);
                        }}
                    >
                        {({ errors }) => (
                            <Form>
                                <label htmlFor="currentPassword">Current Password</label>
                                <Field name="currentPassword" type="password" />
                                {errors.currentPassword ? (
                                    <div className="has-error">{errors.currentPassword}</div>
                                ) : null}

                                <label htmlFor="password">New Password</label>
                                <Field name="password" type="password" />
                                {errors.password ? (
                                    <div className="has-error">{errors.password}</div>
                                ) : null}

                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <Field name="confirmPassword" type="password" />
                                {errors.confirmPassword ? (
                                    <div className="has-error">{errors.confirmPassword}</div>
                                ) : null}
                                <div
                                    className="register-link"
                                    style={{ marginTop: '30px', marginBottom: '15px' }}
                                >
                                    <button type="submit" className="btn-primary">
                                        Update
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordForm;
