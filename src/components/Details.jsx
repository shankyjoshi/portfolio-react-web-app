import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "pexels";
const Details = () => {
    const { id } = useParams();
    const [photo, setPhoto] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const client = createClient(
        "PrVbdLwHMiKXVG0T9xoLotZ9cG1ML5AqVoCMNwnq7ZXpQ2jfWt6S9q4Z"
    );

    useEffect(() => {
        //example response

        client.photos.show({ id: 2014422 }).then(photo => {
            setPhoto(photo);
            setLoading(false);
        });
    }, [])
    return (
        <>
            <h1>Hello</h1>
            <div className="container">
                <div className="row">
                    
                    
                    <div className="col-md-4">
                        <img src={photo.src?.large} alt="" />
                    </div>
                   
                 
                </div>
            </div>
        </>
    );
}
 
export default Details;