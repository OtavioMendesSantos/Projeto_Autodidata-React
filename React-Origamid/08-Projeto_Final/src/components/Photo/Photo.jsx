import React, { useEffect } from "react";
import styles from "./PhotoContent.module.css";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "./PhotoContent";
import { PHOTO_GET } from "../../api/Api";
import Head from "../Helper/Head";

const Photo = () => {
  const { id } = useParams();
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    const { response, json } = request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) {
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent single={true} data={data} />
      </section>
    );
  } else return null;
};

export default Photo;
