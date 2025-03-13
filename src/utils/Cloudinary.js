import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
cloudinary.config({ 
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME, 
    api_secret: process.env.CLOUDINARY_API_SECRET, 
    api_key: process.env.CLOUDINARY_API_KEY, 
});

const uploadOnCloudinary = async (localFilePath)=>{
    try{
        if(!localFilePath) return null
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        //File has been uploaded
        console.log("file has been uploaded successfully ",response.url);
        return response
    }
    catch(error){
        fs.unlinkSync(localFilePath) //remove the locally saved temp file as the upload operation got failed    
        return null;
    }
}
export {uploadOnCloudinary}