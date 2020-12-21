import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, editPost, getPosts } from "../actions/postActions";
import { removeCurrentPost } from "../actions/currentPostActions";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import FileBase from "react-file-base64";

const AddPostForm = (props) => {
  const [post, setPost] = useState({
    likeCount: 0,
    symbol: "",
    author: "",
    desc: "",
    image: "",
  });

  let currentPost = useSelector((state) => state.currentPost);
  useEffect(() => {
    if (currentPost) {
      setPost(currentPost);
    }
  }, [currentPost]);

  const isAuth = useSelector((state) => state.user.isAuth);

  const dispatch = useDispatch();
  const handleForm = (e) => {
    e.preventDefault();

    if (currentPost) {
      dispatch(editPost(post));
      dispatch(removeCurrentPost());
      clearForm();
    } else {
      dispatch(createPost(post));
      clearForm();
    }
    toggle();
    dispatch(getPosts());
  };

  const clearForm = () => {
    setPost({ symbol: "", author: "", desc: "" });
    dispatch(removeCurrentPost());
    toggle();
  };

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
      {isAuth && (
        <Button color="primary" onClick={toggle} className="mb-2">
          Add chart
        </Button>
      )}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <Form className="mb-5" onSubmit={handleForm}>
          <ModalBody>
            <FormGroup>
              <Label for="symbol">Symbol</Label>
              <Input
                required={true}
                type="text"
                name="symbol"
                placeholder="MSFT"
                value={post.symbol}
                onChange={(e) => setPost({ ...post, symbol: e.target.value })}
              />
            </FormGroup>

            <FormGroup>
              <Label for="author">Author</Label>
              <Input
                required={true}
                type="text"
                name="author"
                placeholder="trader"
                value={post.author}
                onChange={(e) => setPost({ ...post, author: e.target.value })}
              />
            </FormGroup>

            <FormGroup>
              <Label for="desc">Description</Label>
              <Input
                required={true}
                type="textarea"
                placeholder="short description of trade you've taken"
                name="desc"
                value={post.desc}
                onChange={(e) => setPost({ ...post, desc: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <FileBase
                typ="file"
                multiple={false}
                onDone={({ base64 }) => setPost({ ...post, image: base64 })}
              ></FileBase>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit">
              Submit
            </Button>
            <Button color="secondary" onClick={clearForm}>
              Clear
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};

export default AddPostForm;
