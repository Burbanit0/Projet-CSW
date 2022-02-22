import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Form, Button, FormGroup } from 'react-bootstrap';
import { beginAddPhoto } from '../actions/photos';

const UploadForm = ({ errors, dispatch }) => {
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErroMsg] = useState(null);

  useEffect(() => {
    setErroMsg(errors);
  }, [errors]);

  useEffect(() => {
    setErroMsg(''); // reset error message on page load
  }, []);

  const handleOnChange = (event) => {
    const file = event.target.files[0];
    setPhoto(file);
  };

  const handleOnChange1 = (event) => {
    const description = event.target.value;
    setDescription(description);
  };


  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFile({photo: photo, description: description})
    if (file) {
      console.log(file)
      setErroMsg('');
      dispatch(beginAddPhoto(file));
      setIsSubmitted(true);
    }
  };

  return (
    <React.Fragment>
      {errorMsg && errorMsg.upload_error ? (
        <p className="errorMsg centered-message">{errorMsg.upload_error}</p>
      ) : (
        isSubmitted && (
          <p className="successMsg centered-message">
            Photo uploaded successfully.
          </p>
        )
      )}
      <Form
        onSubmit={handleFormSubmit}
        method="post"
        encType="multipart/form-data"
        className="upload-form"
      >
        <Form.Group>
          <Form.Label>Choose photo to upload</Form.Label>
          <Form.Control type="file" name="photo" onChange={handleOnChange} />
        </Form.Group>
        <FormGroup>
          <Form.Label>Add a descritpion</Form.Label>
          <Form.Control type='text' name="description" onChange={handleOnChange1} />
        </FormGroup>
        <Button
          variant="primary"
          type="submit"
          className={`${!photo ? 'disabled submit-btn' : 'submit-btn'}`}
          disabled={photo ? false : true}
        >
          Upload
        </Button>
      </Form>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  photos: state.photos || [],
  errors: state.errors || {}
});

export default connect(mapStateToProps)(UploadForm);