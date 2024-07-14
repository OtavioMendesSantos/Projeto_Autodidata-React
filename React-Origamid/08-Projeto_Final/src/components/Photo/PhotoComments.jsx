import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
import styles from "./PhotoComments.module.css";

const PhotoComments = (props) => {
  const { login } = useContext(UserContext);
  const [comments, setComments] = useState(() => props.comments);
  const commentsSection = useRef(null);

  useEffect(() => {
    commentsSection.current.scroll({
      top: commentsSection.current.scrollHeight,
      behavior: "smooth",
    });
  }, [comments])

  return (
    <>
      <ul className={`${styles.comments} ${props.single ? styles.single : ""}`} ref={commentsSection} >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}:</b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm single={props.single} id={props.id} setComments={setComments}/>}
    </>
  );
};

export default PhotoComments;
