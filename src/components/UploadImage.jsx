import { useEffect, useState } from 'react'
import { useImagesContext } from '../contexts/ImagesContext';

export const UploadImage = () => {
    const [file, setFile] = useState(null);
    const [images, setImages] = useState(null);
    const { getImagesURLsByCollection, uploadFile } = useImagesContext();

    useEffect(() => {
        getImagesURLsByCollection().then(urls => {
            setImages(urls);
        });
    }, []);

    const uploadFileHandler = async () => {
        try {
            const uploaded = await uploadFile(file);
            setImages(prev => [...prev, uploaded]);
        } catch (err) {
            alert(err.code);
        }
    }

    return (
        <div className='uploadImg-container'>
            <h2>Upload image</h2>
            <p>Must be authenticated, you can upload only 1 file with correct type (image)</p>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={uploadFileHandler}>Upload</button>
            <div className='images-list'>
                {!images && <p>Loading...</p>}

                {images?.length == 0
                    ? <p>No have images yet</p>
                    : <>
                        <div>
                            {images?.map(x => <img src={x} alt="img" key={x} style={{width: 200, height: 150, objectFit: 'cover'}}/>)}
                        </div>
                    </>}
            </div>
        </div>
    )
}
