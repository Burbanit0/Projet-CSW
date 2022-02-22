import axios from 'axios';
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Photo = ({ photo }) => {

  // eslint-disable-next-line no-undef
  async function deleteImage(event) {
    const photoInfo = await axios.delete(`http://localhost:3300/photos/${photo._id}`)
    console.log(photoInfo)
    window.location.reload()
  }


  return (
    <Card className="photo">
      <Card.Img
        variant="top"
        src={`http://localhost:3300/photos/${photo._id}`}
        alt="Photo"
      />
      <Card.Text>
      {photo.description}
    </Card.Text>
      <Button
        variant="primary"
        onClick={deleteImage}
      >
        Delete this image
      </Button>
    </Card>
    
  );
};

export default Photo;