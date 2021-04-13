import React, { useRef, useState, useEffect } from 'react';
import './ImageUpload.css';
import Button from './Button';
import { useHttpClient } from '../hooks/http-hook';



const ImageUpload =  props => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [file, setFile] = useState();
    const [previewUrl, setPreviewUrl] = useState(props.previewUrl);
    const [isValid, setIsValid] = useState(false);

    const filePickerRef = useRef();

    

    useEffect(() => {
        let myFile = new File(["foo"], props.previewUrl, {
            type: "image/jpeg"
        });
        console.log("myfile", myFile);

        if (!file) {
            loadedHandler(myFile);
            return;
        }   

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewUrl(fileReader.result);
        };

        fileReader.readAsDataURL(file);
    }, [file, props.previewUrl]);

    const loadedHandler = (myFile) => {
        const responseData = sendRequest(`${props.previewUrl}`);
        props.onInput(props.id, myFile, true);
    }

    const pickedHandler = (event) => {
        let pickedFile;
        let fileIsValid = isValid;


        if (event.target.files && event.target.files.length === 1) {
            pickedFile = event.target.files[0];
            console.log(pickedFile);
            setFile(pickedFile);
            setIsValid(true);
            fileIsValid = true;
        } else {
            setIsValid(false);
            fileIsValid = false;
        }
        console.log("pickedFile", pickedFile);

        props.onInput(props.id, pickedFile, fileIsValid);
    };

    const pickImageHandler = () => {
        filePickerRef.current.click();
    }

    return (
        <div className="form-control">
            <input 
                id={props.id}
                ref={filePickerRef}
                style={{display: 'none'}} 
                type="file" 
                accept=".jpg,.png,.jpeg"
                onChange={pickedHandler}
                />
            <div className={`image-upload ${props.center && 'center'}`}>
                <div className="image-upload__preview">
                    {previewUrl && <img src={previewUrl} alt="Preview" />}
                    {!previewUrl && <p>Please pick an image.</p>}
                </div>
                <Button type="button" onClick={pickImageHandler}>Alege Imagine</Button>
            </div>
            {!isValid && <p>{props.errorText}</p>}
        </div>
    );
};

export default ImageUpload;