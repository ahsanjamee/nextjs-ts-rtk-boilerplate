import React, { useState } from 'react';
import { Upload, message, Image } from 'antd';
import ProfileImg from '../../public/assets/img/profile.png';
import { EditOutlined } from '@ant-design/icons';

const ImageUpload: React.FC = () => {
    // const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState('');

    //eslint-disable-next-line
    const getBase64 = (img: File, callback: (imageUrl: string) => void) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result as string));
        reader.readAsDataURL(img);
        // setLoading(false);
    };

    const beforeUpload = (file: File) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must be smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    };

    //eslint-disable-next-line
    const handleChange = (info: any) => {
        console.log(info);
        // if (info.file.status === 'uploading') {
        //     setLoading(true);
        //     return;
        // }
        getBase64(info.file.originFileObj, (imageUrl: string | ArrayBuffer | null) =>
            setImageUrl(imageUrl as string)
        );
    };

    const uploadButton = (
        <>
            <div className="upload-img">
                <EditOutlined />
            </div>
        </>
    );
    return (
        <>
            <Image src={imageUrl ? imageUrl : ProfileImg.src} />
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                beforeUpload={beforeUpload}
                onChange={handleChange}
                maxCount={1}
            >
                {uploadButton}
            </Upload>
        </>
    );
};

export default ImageUpload;
