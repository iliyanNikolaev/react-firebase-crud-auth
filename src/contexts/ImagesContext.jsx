import { createContext, useContext } from "react";
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../config/firebase';

const ImagesContext = createContext();

export const ImagesContextProvider = ({ children }) => {
    const assetsFolderRef = ref(storage, 'assets/');

    const getImagesURLsByCollection = async () => {
        const response = await listAll(assetsFolderRef);
        const references = response.items;
        const urls = await getImagesURLsFromRefs(references);
        return urls;
    }

    const getImagesURLsFromRefs = async (references) => {
        const result = [];
        for (const item of references) {
            const url = await getDownloadURL(item);
            result.push(url);
        }
        return result;
    }

    const uploadFile = async (file) => {
        if (!file) throw { code: 'you must to choose file from your pc' };

        const filePathRef = ref(storage, `assets/${file.name}`);

        try {
            const snapshot = await uploadBytes(filePathRef, file);
            const createdImageUrl = await getDownloadURL(snapshot.ref);
            return createdImageUrl;
        } catch (err) {
            throw err;
        }
    }

    const ctx = {
        getImagesURLsByCollection,
        uploadFile
    };

    return (
        <ImagesContext.Provider value={ctx}>
            {children}
        </ImagesContext.Provider>
    )
}

export const useImagesContext = () => {
    const ctx = useContext(ImagesContext);
    return ctx;
}