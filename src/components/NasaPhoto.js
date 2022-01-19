import React from 'react';
import '../App.css';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';



const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);
    const [like, setLike] = useState(false);

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
                // we'll update the KEYHERE soon!
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            );
            const data = await res.json();
            setPhotoData(data);
        }
    }, []);

    if (!photoData) return <div />;


    return (
        <div className="nasa-photo">
            {/* {isLoading && <div>Loading....</div>} */}

            <NavBar />
            <div className="card">
            <Card className="card" sx={{ maxWidth: 600 }}>
                <CardHeader
                    title={photoData.title}
                        className="header"

                    subheader={photoData.copyright}
                />
                {photoData.media_type === "image" ? (
                <CardMedia
                    component="img"
                    className=""
                    height="194"
                    image={photoData.url}
                    alt={photoData.title}
                />
                ) : (
                    <iframe
                        title="space-video"
                        src={photoData.url}
                        frameBorder="0"
                        allow="encrypted-media"
                        className='photo'
                    />
                )}
                <CardContent>
                    <Typography variant="body2" 
                    className="date"
                    color="text.secondary">
                        {photoData.date}
                    </Typography>
                    <Typography 
                    className="explanation"
                    variant="body2" 
                    color="text.secondary">
                        {photoData.explanation}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites" onClick={() => setLike((prevLike) => !prevLike)}>
                     {like ? " 💖 " : " 🖤 "}
                    </IconButton>
                   
                </CardActions>

            </Card>
            </div>
        </div>
            
    );
}
