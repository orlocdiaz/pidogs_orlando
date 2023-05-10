import React, { useEffect } from "react";
import styles from "./Detail.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { detailDog } from "../../redux/actions";

const Detail = () => {
  const dogs = useSelector((state) => state.allDogs);
  const dog = useSelector((state) => state.detailDog);
  const { id } = useParams();
  const navigate = useNavigate();
  const dogDetail = dogs.length
    ? dogs.find((dog) => dog.id.toString() === id)
    : dog;
  const { image, breed, height, weight, temperament, life_span } = dogDetail;
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      axios.get(`http://localhost:3001/dogs/${id}`).then(async (results) => {
        await dispatch(detailDog(results.data));
      });
    } catch (error) {
      console.log(error.message);
    }
  }, [dispatch, id]);

  return (
    <div className={styles.container}>
      {dogDetail ? (
        <div className={styles.modal}>
          <div onClick={() => navigate(-1)} className={styles.closeDetail}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-x-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
            </svg>
          </div>
          <span className={styles.idSpan}>{dogDetail.id}</span>
          {image && (
            <img src={image} alt="Dog" className={styles.dogImage}></img>
          )}

          <svg
            viewBox="0 0 120 100"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.stainTL}
          >
            <path
              className={styles.stroke}
              fill="#b6b9f2"
              d="M54.3,-39.7C69.3,-39.3,79.6,-19.6,74.5,-5.2C69.3,9.3,48.5,18.5,33.5,19.2C18.5,19.9,9.3,12,3.7,8.3C-1.9,4.6,-3.7,5.1,-16.5,4.4C-29.2,3.7,-52.8,1.9,-61.2,-8.4C-69.6,-18.7,-62.9,-37.5,-50.2,-37.8C-37.5,-38.2,-18.7,-20.2,0.5,-20.6C19.6,-21.1,39.3,-40,54.3,-39.7Z"
              transform="translate(100 0)"
            />
          </svg>
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.stainBR}
          >
            <path
              fill="#b6b9f2"
              d="M22.3,-14.2C31.6,-13.1,43.4,-6.6,51.5,8C59.5,22.6,63.7,45.3,54.5,49.2C45.3,53.2,22.6,38.5,5.3,33.2C-12,27.8,-23.9,31.9,-39.9,27.9C-55.8,23.9,-75.8,12,-74.1,1.8C-72.3,-8.5,-48.8,-16.9,-32.9,-18C-16.9,-19,-8.5,-12.7,-0.9,-11.8C6.6,-10.8,13.1,-15.3,22.3,-14.2Z"
              transform="translate(100 100)"
            />
          </svg>

          <div className={styles.detailTxt}>
            <div className={styles.detailTitle}>
              <h2>{breed}</h2>
            </div>
            <div className={styles.detailsContainer}>
              <strong className={styles.detailTemps}>{temperament}</strong>
              <p className={styles.lsTxt}>
                The life expectancy for the {breed} is approximately {life_span}
              </p>
              <div className={styles.numericDetails}>
                {height && height !== "" && !height.includes("NaN") && (
                  <div className={styles.measureContainer}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-ruler-measure"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="#9592f2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      transform="rotate(270)"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M19.875 12c.621 0 1.125 .512 1.125 1.143v5.714c0 .631 -.504 1.143 -1.125 1.143h-15.875a1 1 0 0 1 -1 -1v-5.857c0 -.631 .504 -1.143 1.125 -1.143h15.75z"></path>
                      <path d="M9 12v2"></path>
                      <path d="M6 12v3"></path>
                      <path d="M12 12v3"></path>
                      <path d="M18 12v3"></path>
                      <path d="M15 12v2"></path>
                      <path d="M3 3v4"></path>
                      <path d="M3 5h18"></path>
                      <path d="M21 3v4"></path>
                    </svg>{" "}
                    <span>{height} cm</span>
                  </div>
                )}

                {weight && weight !== "" && !weight.includes("NaN") && (
                  <div className={styles.measureContainer}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-scale-outline"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="#9592f2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 3m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path>
                      <path d="M12 7c1.956 0 3.724 .802 5 2.095l-2.956 2.904a3 3 0 0 0 -2.038 -.799a3 3 0 0 0 -2.038 .798l-2.956 -2.903a6.979 6.979 0 0 1 5 -2.095z"></path>
                    </svg>
                    <span>{weight} kg</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Detail;
