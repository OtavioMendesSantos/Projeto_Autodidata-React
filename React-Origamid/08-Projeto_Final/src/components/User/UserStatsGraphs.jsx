import React, { useEffect } from "react";
import styles from "./UserStatsGraphs.module.css";

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  useEffect(() => {
    console.log(data);
    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0)
    );
  }, [data]);

  return (
    <section className={`animeLeft ${styles.graphs}`}>
      <div className={`${styles.total}`}>
        <p>Acessos: {total}</p>
      </div>
    </section>
  );
};

export default UserStatsGraphs;
