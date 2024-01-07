import React, { useEffect, useContext, useState } from "react";
import "./style.scss";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import contextValue from "../../context/blogs/BlogContext";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const UserBlogs = () => {
  const context = useContext(contextValue);
  const { getUserBlogs, userOnlyBlogs, deleteBlog } = context;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getUserBlogs();
    console.log(userOnlyBlogs);
  }, []);

  const navigate = useNavigate();

  const [blogToEdit, setBlogToEdit] = useState({
    newTitle: "",
    newDescription: "",
    newTag: "",
    newImgUrl: "",
  });

  const handleDeleteBlog = async (id) => {
    await deleteBlog(id);
    //redirecting to homepage after adding the blog
    // navigate("/")
  };

  const handleEditBlog = (currentBlog) => {
    setBlogToEdit({
      newTitle: currentBlog.title,
      newDescription: currentBlog.description,
      newTag: currentBlog.tag,
      newImgUrl: currentBlog.imgUrl,
    });
  };

  const deleteSubmit = (id) => {
    confirmAlert({
      title: "Confirm Deletion",
      message: "Are you sure to delete this blog?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            handleDeleteBlog(id);
          },
        },
        {
          label: "No",
          onClick: () => {
            navigate("/userBlogs");
          },
        },
      ],
    });
  };

  //   whenever any field updated, overwrite that field into the new temporary blog, and let the other things be as it is from before
  const onChange = (event) => {
    setBlogToEdit({ ...blogToEdit, [event.target.name]: event.target.value });
    // console.log(blogToAdd);
  };

  return (
    <>
      <div className="userBlogs">
        <p className="pageTitle">Your Blogs</p>

        <div className="row">
          {userOnlyBlogs.map((userBlog) => {
            return (
              <div
                className="col-md-3 col-sm-12 content-card"
                key={userBlog._id}
              >
                <div className="card-big-shadow">
                  <div
                    className="card card-just-text"
                    data-background="color"
                    data-color="blue"
                    data-radius="none"
                  >
                    <div className="editLogo">
                      {/* <button>
                        <AiFillEdit />
                      </button> */}
                      <Button
                        variant="primary"
                        className="editLogoBtn"
                        onClick={() => {
                          setBlogToEdit({
                            newTitle: userBlog.title,
                            newDescription: userBlog.description,
                            newTag: userBlog.tag,
                            newImgUrl: userBlog.imgUrl,
                          });
                          handleShow();
                        }}
                      >
                        <AiFillEdit />
                      </Button>

                      <Modal show={show} onHide={handleClose} centered>
                        <Modal.Header closeButton>
                          <Modal.Title className="fw-bold">
                            Edit Blog
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          {/* <Form>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Title</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder=""
                                autoFocus
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Thumbnail URL</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder=""
                                autoFocus
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <Form.Label>Example textarea</Form.Label>
                              <Form.Control as="textarea" rows={5} />
                            </Form.Group>
                          </Form> */}
                          <Form>
                            <div className="blogForm">
                              <div className="mb-3">
                                <label htmlFor="title" className="form-label">
                                  Title
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="newTitle"
                                  name="newTitle"
                                  placeholder="Blog title here..."
                                  onChange={onChange}
                                  value={blogToEdit.newTitle}
                                />
                              </div>
                              <div className="mb-3">
                                <label htmlFor="imgUrl" className="form-label">
                                  Thumbnail URL
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="newImgUrl"
                                  name="newImgUrl"
                                  value={blogToEdit.newImgUrl}
                                  onChange={onChange}
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="description"
                                  className="form-label"
                                >
                                  Description
                                </label>
                                <textarea
                                  className="form-control"
                                  id="newDescription"
                                  name="newDescription"
                                  rows="5"
                                  onChange={onChange}
                                  value={blogToEdit.newDescription}
                                ></textarea>
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="exampleDataList"
                                  className="form-label"
                                >
                                  Tags
                                </label>
                                <input
                                  className="form-control"
                                  list="datalistOptions"
                                  id="newTag"
                                  name="newTag"
                                  onChange={onChange}
                                  value={blogToEdit.newTag}
                                />
                                <datalist id="datalistOptions">
                                  <option value="Health" />
                                  <option value="Education" />
                                  <option value="Stocks" />
                                  <option value="Technology" />
                                  <option value="Must Read" />
                                  <option value="Politics" />
                                </datalist>
                              </div>
                            </div>
                          </Form>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                          <Button
                            variant="primary"
                            onClick={() => {
                              handleClose();
                              handleEditBlog();
                            }}
                          >
                            Save Changes
                          </Button>
                        </Modal.Footer>
                      </Modal>
                      {/* <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleDeleteBlog(userBlog._id);
                        }}
                      >
                        <AiFillDelete />
                      </button> */}

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          deleteSubmit(userBlog._id);
                        }}
                      >
                        <AiFillDelete />
                      </button>
                    </div>
                    <div className="content">
                      <h6 className="category">{userBlog.tag}</h6>
                      <h4
                        className="title"
                        onClick={(event) => {
                          //preventing unexpected redirect issue
                          event.preventDefault();
                          navigate(`/blog/${userBlog._id}`);
                        }}
                      >
                        {userBlog.title}
                      </h4>
                      <p className="description">
                        {userBlog.description.slice(0, 200) + "..."}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UserBlogs;
