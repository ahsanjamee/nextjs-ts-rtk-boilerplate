import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchImages } from '../store/slices/imageSlice';

const Images: React.FC = () => {
    const dispatch = useAppDispatch();
    const images = useAppSelector((state) => state.images);

    useEffect(() => {
        dispatch(fetchImages());
    }, []);
    return (
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                    <h2 className="text-2xl font-extrabold text-gray-900">Collections</h2>

                    <div className="lg:grid lg:grid-cols-3 lg:gap-x-6 mt-6">
                        {images.map((image, idx) => {
                            if (idx < 9) {
                                return (
                                    <div key={image.id} className="group relative mt-6">
                                        <div className="relative w-full h-80  bg-white rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 transform transition duration-200 hover:scale-105 cursor-pointer">
                                            <img
                                                src={image.src.original}
                                                alt={image.alt}
                                                className="w-full h-full object-center object-cover"
                                            />
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Images;
