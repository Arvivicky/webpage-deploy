import React, { useState } from "react";
import './Upload.css'

const Upload=()=>{

    let imageId='';
    const [imageid,setImageUrl]=useState('');
    const onUpload=(event)=>
    {
        preventDefault();
        console.log('uploaded',imageId)
        imageId=imageid;
    }
    const onClear=(event)=>
    {
        preventDefault();
        imageId='';
    }
    
    return(
        <div className="uploadcontainer">
        {/* <div className="upload"> */}
            {imageId && <img className="posterimg" src={imageId}/>}
            <div className="uploadcontent">
            <form className="imgform">
                <p className="imagetag">Upload Poster to display
                </p>
                <input className='imglink'
                type="text" 
                name="image"
                value={imageid}
                onChange={(event)=>{setImageUrl(event.target.value)}}
                />
                <button
                onClick={onUpload}
                >Upload</button>
                <button
                onChange={onClear}
                >Clear</button>
            </form>
            </div>
        {/* </div> */}
    </div>
    )
}
export default Upload;