import React from "react";
import {
  Button,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import ImageComponent from "./ImageComponent";
import { FaTrash, FaPen, FaThumbsUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../actions/postActions";
import { setCurrentPost } from "../actions/currentPostActions";
import { motion } from "framer-motion";

const Post = ({ post }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const isAuth = useSelector((state) => state.user.isAuth);
  let author = false;

  if (user) {
    author = user.email === post.authorEmail;
  }

  return (
    <motion.div
      key={post._id}
      layout
      className="col-lg-6 col-md-12 col-sm-12 col-xs-12"
    >
      <Card>
        <ImageComponent post={post} />

        <CardBody>
          <CardTitle tag="h5">{post.symbol}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {post.author}
          </CardSubtitle>
          <CardText>{post.desc}</CardText>
          {isAuth && (
            <>
              {author ? (
                <>
                  <Button
                    outline
                    color="danger"
                    onClick={() => dispatch(deletePost(post._id))}
                    className="mr-2 "
                  >
                    <FaTrash />
                  </Button>
                  <Button
                    outline
                    color="warning"
                    onClick={() => dispatch(setCurrentPost(post))}
                  >
                    <FaPen />
                  </Button>
                </>
              ) : (
                <Button
                  outline
                  color="info"
                  // onClick={() => dispatch(likePost(post._id))}
                  className="mr-2 "
                >
                  <FaThumbsUp />
                </Button>
              )}
            </>
          )}
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default Post;
