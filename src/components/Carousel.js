import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { startLoadPhotos } from '../actions/photos';
import Photo from './Photo';
import socketIOClient from "socket.io-client";
import AwesomeSlider from 'react-awesome-slider';
import Carousel from 'nuka-carousel';
import Slider from "react-slick";

const socket = socketIOClient('http://localhost:3300')

const CarouselA = ({ errors, photos, dispatch }) => {
    const [isLoading, setIsLoading] = useState(false);
    var [index, setIndex] = useState(null);

    socket.on("setIndex", index => {
        setIndex(index);
    })

    const Left = () => {
       const left = () => {
            index = index - 1
            setIndex(index)
            socket.emit("left", index);
        }
    return(
        <Button onClick={left}>Left</Button>
    )}

    const Right = () => {
        const right = () => {
            index = index + 1
            setIndex(index)
            socket.emit("right", index);
        }
    return(
        <Button onClick={right}>Right</Button>
    )}

    useEffect(() => {
        setIsLoading(true);
        dispatch(startLoadPhotos());
    }, [dispatch]);

    useEffect(() => {
        if (photos.length > 0) {
        setIsLoading(false);
        }
    }, [photos]);

    return (
        <Carousel 
            renderCenterLeftControls={Left}
            renderCenterRightControls={Right}
            slideIndex={index}
        >
                    {isLoading ? (
                        <div className="loading-msg centered-message">Loading...</div>
                    ) : (
                        photos.map((photo) =>
                        <div>
                            <Photo key={photo._id} photo={photo}/> 
                        </div>
                        )
                    )}
        </Carousel>
    );
};

const mapStateToProps = (state) => ({
  photos: state.photos || [],
  errors: state.errors || {}
});

export default connect(mapStateToProps)(CarouselA);