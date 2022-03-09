import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { validateEmail } from '../../utils/utilityFunctions';

interface IState {
    email: string;
}

const ForgotPassword: React.FC = () => {
    const initialValue: IState = {
        email: '',
    };

    const forgotpassSchema = Yup.object().shape({
        email: Yup.string().email('invalid email address').required('Required'),
    });

    const handleSubmit = (values: IState) => {
        console.log(values);
    };

    return (
        <div className="auth-wrap">
            <div className="card card-login">
                <div className="card-header">Exit App</div>
                <h1>Forgot Password</h1>
                <Formik
                    initialValues={initialValue}
                    validationSchema={forgotpassSchema}
                    onSubmit={(values) => {
                        handleSubmit(values);
                    }}
                >
                    {({ errors }) => (
                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field name="email" validate={validateEmail} />
                            {errors.email ? <div className="has-error">{errors.email}</div> : null}

                            <div className="register-link">
                                <span>
                                    Back to
                                    <Link href="/login"> Login</Link>
                                </span>
                                <button type="submit" className="btn-primary">
                                    Submit
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default ForgotPassword;
