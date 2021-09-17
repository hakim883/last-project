import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {
  createPoste,
  deletePoste,
  listPostes,
} from '../actions/posteActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {
  POSTE_CREATE_RESET,
  POSTE_DELETE_RESET,
} from '../constants/posteConstants';

export default function PosteListScreen(props) {
  const { pageNumber = 1 } = useParams();

  const sellerMode = props.match.path.indexOf('/seller') >= 0;
  const posteList = useSelector((state) => state.posteList);
  const { loading, error, postes, page, pages } = posteList;

  const posteCreate = useSelector((state) => state.posteCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    poste: createdPoste,
  } = posteCreate;

  const posteDelete = useSelector((state) => state.posteDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = posteDelete;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: POSTE_CREATE_RESET });
      props.history.push(`/poste/${createdPoste._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: POSTE_DELETE_RESET });
    }
    dispatch(
      listPostes({ seller: sellerMode ? userInfo._id : '', pageNumber })
    );
  }, [
    createdPoste,
    dispatch,
    props.history,
    sellerMode,
    successCreate,
    successDelete,
    userInfo._id,
    pageNumber,
  ]);

  const deleteHandler = (poste) => {
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deletePoste(poste._id));
    }
  };
  const createHandler = () => {
    dispatch(createPoste());
  };
  return (
    <div>
      <div className="row">
        <h1>Postes</h1>
        <button type="button" className="primary" onClick={createHandler}>
          Create Poste
        </button>
      </div>

      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}

      {loadingCreate && <LoadingBox></LoadingBox>}
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {postes.map((poste) => (
                <tr key={poste._id}>
                  <td>{poste._id}</td>
                  <td>{poste.name}</td>
                  <td>
                    <button
                      type="button"
                      className="small"
                      onClick={() =>
                        props.history.push(`/poste/${poste._id}/edit`)
                      }
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="small"
                      onClick={() => deleteHandler(poste)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row center pagination">
            {[...Array(pages).keys()].map((x) => (
              <Link
                className={x + 1 === page ? 'active' : ''}
                key={x + 1}
                to={`/postelist/pageNumber/${x + 1}`}
              >
                {x + 1}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
