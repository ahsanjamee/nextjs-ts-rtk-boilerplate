import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { validateEmail } from '../../utils/utilityFunctions';

interface IState {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const SignupForm: React.FC = () => {
    const initialValue: IState = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const SignupSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
        email: Yup.string().email('invalid email address').required('Required'),
        password: Yup.string()
            .required('No password provided.')
            .min(8, 'Password should be 8 chars minimum.'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords do not match'),
    });

    const handleSubmit = (values: IState) => {
        console.log(values);
    };

    return (
        <div className="auth-wrap">
            <div className="card card-login">
                <div className="card-header">Exit App</div>
                <h1>Register</h1>
                <Formik
                    initialValues={initialValue}
                    validationSchema={SignupSchema}
                    onSubmit={(values) => {
                        handleSubmit(values);
                    }}
                >
                    {({ errors }) => (
                        <Form>
                            <label htmlFor="name">Name</label>
                            <Field name="name" />
                            {errors.name ? <div className="has-error">{errors.name}</div> : null}

                            <label htmlFor="email">Email</label>
                            <Field name="email" validate={validateEmail} />
                            {errors.email ? <div className="has-error">{errors.email}</div> : null}

                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" />
                            {errors.password ? (
                                <div className="has-error">{errors.password}</div>
                            ) : null}

                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <Field name="confirmPassword" type="password" />
                            {errors.confirmPassword ? (
                                <div className="has-error">{errors.confirmPassword}</div>
                            ) : null}

                            <div className="register-link">
                                <span>
                                    Already Registered?
                                    <Link href="/login"> Login</Link>
                                </span>
                                <button type="submit" className="btn-primary">
                                    Register
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default SignupForm;
