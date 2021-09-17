import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { detailsPoste, updatePoste } from '../actions/posteActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { POSTE_UPDATE_RESET } from '../constants/posteConstants';

export default function PosteEditScreen(props) {
  const posteId = props.match.params.id;
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const posteDetails = useSelector((state) => state.posteDetails);
  const { loading, error, poste } = posteDetails;

  const posteUpdate = useSelector((state) => state.posteUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = posteUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      props.history.push('/postelist');
    }
    if (!poste || poste._id !== posteId || successUpdate) {
      dispatch({ type: POSTE_UPDATE_RESET });
      dispatch(detailsPoste(posteId));
    } else {
      setName(poste.name);
      setImage(poste.image);
      setDescription(poste.description);
    }
  }, [poste, dispatch, posteId, successUpdate, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
    dispatch(
      updatePoste({
        _id: posteId,
        name,
       
        image,
       
      
       
        description,
      })
    );
  };
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setImage(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit Poste {posteId}</h1>
        </div>
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
           
            <div>
              <label htmlFor="image">Image</label>
              <input
                id="image"
                type="text"
                placeholder="Enter image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="imageFile">Image File</label>
              <input
                type="file"
                id="imageFile"
                label="Choose Image"
                onChange={uploadFileHandler}
              ></input>
              {loadingUpload && <LoadingBox></LoadingBox>}
              {errorUpload && (
                <MessageBox variant="danger">{errorUpload}</MessageBox>
              )}
            </div>
         
           
            
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                rows="3"
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label></label>
              <button className="primary" type="submit">
                Update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
