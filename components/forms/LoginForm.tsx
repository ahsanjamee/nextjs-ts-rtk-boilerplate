import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { validateEmail } from '../../utils/utilityFunctions';

interface IState {
    email: string;
    password: string;
}

const LoginForm: React.FC = () => {
    const initialValue: IState = {
        email: '',
        password: '',
    };

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('invalid email address').required('Required'),
        password: Yup.string()
            .required('No password provided.')
            .min(8, 'Password should be 8 chars minimum.'),
    });

    const handleSubmit = (values: IState) => {
        console.log(values);
    };

    return (
        <div className="auth-wrap">
            <div className="card card-login">
                <div className="card-header">Exit App</div>
                <h1>Login</h1>
                <Formik
                    initialValues={initialValue}
                    validationSchema={LoginSchema}
                    onSubmit={(values) => {
                        handleSubmit(values);
                    }}
                >
                    {({ errors }) => (
                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field name="email" validate={validateEmail} />
                            {errors.email ? <div className="has-error">{errors.email}</div> : null}

                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" />

                            <div className="forgot-pass-link">
                                {errors.password ? (
                                    <div className="has-error">{errors.password}</div>
                                ) : null}
                                <Link href="/forgot-password">Forgot Password?</Link>
                            </div>

                            <div className="register-link">
                                <span>
                                    Dont&apos;t have an account?
                                    <Link href="/register"> Register</Link>
                                </span>
                                <button type="submit" className="btn-primary">
                                    Login
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default LoginForm;
