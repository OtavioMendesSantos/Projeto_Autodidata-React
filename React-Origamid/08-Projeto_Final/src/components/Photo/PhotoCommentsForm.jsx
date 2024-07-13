import React, { useState } from "react";
import Enviar from "../../Assets/enviar.svg?react";
import useFetch from "../../Hooks/useFetch";
import { COMMENT_POST } from "../../api/Api";
import Error from "../Helper/Error";

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = useState("");
  const { request, error } = useFetch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setComment("");
    const {url, options} = COMMENT_POST(id, {comment});
    const {response, json} = await request(url, options)
    if (response.ok) {
      setComments((comments) => [...comments, json]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Adicione um comentário..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
