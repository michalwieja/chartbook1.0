import React, { useState } from "react";
import { CardImg } from "reactstrap";

const ImageComponent = ({ post }) => {
  const [toggleDialog, setToggleDialog] = useState(false);

  const handleShowDialog = () => setToggleDialog(!toggleDialog);
  return (
    <>
      <CardImg
        className="rounded"
        top
        width="100%"
        src={post.image}
        alt="Card image cap"
        onClick={handleShowDialog}
      />
      {toggleDialog && (
        <dialog className="dialog" open onClick={handleShowDialog}>
          <img
            className="image"
            src={post.image}
            onClick={handleShowDialog}
            alt="screen"
          />
        </dialog>
      )}
    </>
  );
};

export default ImageComponent;
