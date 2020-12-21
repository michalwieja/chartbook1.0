import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/postActions";
import { Container, Row } from "reactstrap";
import AddPostForm from "./Form";
import Post from "./Post";

const Postlist = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  useEffect(() => dispatch(getPosts()), [dispatch]);

  return (
    <Container>
      <AddPostForm />
      <Row>
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </Row>
    </Container>
  );
};

export default Postlist;
