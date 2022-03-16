import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { validateEmail } from '../../utils/utilityFunctions';
import ImageUpload from '../Upload/ImageUpload';

interface IState {
    name: string;
    email: string;
    address: string;
}

const ProfileForm: React.FC = () => {
    const initialValue: IState = {
        name: '',
        email: '',
        address: '',
    };

    const ProfileSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
        email: Yup.string().email('invalid email address').required('Required'),
        address: Yup.string(),
    });

    const handleSubmit = (values: IState) => {
        console.log(values);
    };

    return (
        <div className="profile-wrap">
            <div className="card">
                <div className="card-image">
                    <ImageUpload />
                </div>
                <div className="card-content">
                    <Formik
                        initialValues={initialValue}
                        validationSchema={ProfileSchema}
                        onSubmit={(values) => {
                            handleSubmit(values);
                        }}
                    >
                        {({ errors }) => (
                            <Form>
                                <label htmlFor="name">Name</label>
                                <Field name="name" />
                                {errors.name ? (
                                    <div className="has-error">{errors.name}</div>
                                ) : null}

                                <label htmlFor="email">Email</label>
                                <Field name="email" validate={validateEmail} />
                                {errors.email ? (
                                    <div className="has-error">{errors.email}</div>
                                ) : null}

                                <label htmlFor="address">Address</label>
                                <Field name="address" type="address" />
                                {errors.address ? (
                                    <div className="has-error">{errors.address}</div>
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

export default ProfileForm;
