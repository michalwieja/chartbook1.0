import React from "react";
import {
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import ImageComponent from "./ImageComponent";
import { FaTrash, FaPen } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../actions/postActions";
import { setCurrentPost } from "../actions/currentPostActions";

const Post = ({ post }) => {
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.user.isAuth);

  return (
    <Card className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      {/* <ImageComponent post={post} /> */}
      <CardImg
        className="rounded"
        top
        width="100%"
        src={post.image}
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle tag="h5">{post.symbol}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {post.author}
        </CardSubtitle>
        <CardText>{post.desc}</CardText>
        {isAuth && (
          <Button
            outline
            color="danger"
            onClick={() => dispatch(deletePost(post._id))}
            className="mr-2 "
          >
            <FaTrash />
          </Button>
        )}
        {/* <Button
          outline
          color="primary"
          onClick={() => dispatch(setCurrentPost(post))}
        >
          <FaPen />
        </Button> */}
      </CardBody>
    </Card>
  );
};

export default Post;
