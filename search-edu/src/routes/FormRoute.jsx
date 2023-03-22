import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import {setData} from "../redux/action";
import {
  POST_DOC,
  POST_EMAIL,
  POST_GENDER,
  POST_HOBBIES,
  POST_NAME,
  POST_PHONE,
} from "../redux/types";
import styles from "../styles/form.module.css";

export const FormRoute = () => {
  const navigate = useNavigate()
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  const handleHobbies = ({target}) => {
    if (target.checked) {
      dispatch(
        setData({type: POST_HOBBIES, payload: [...store.hobbies, target.name]})
      );
    } else {
      const updateHobies = store.hobbies.filter((ele) => ele !== target.name);
      dispatch(setData({type: POST_HOBBIES, payload: updateHobies}));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(store)
    if(!store.gender){
      alert("Select Gender");
    }else{
      if(store.hobbies.length<=0){
        return alert("Select at least one hobby")
      }
      alert("Form Submitted successfully");
      navigate("/user");
    }
  };
  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <h1>Form</h1>
        <label className={styles.label}>Name</label>
        <br />
        <input
          value={store.name}
          className={styles.text}
          type="text"
          onChange={({target}) =>
            dispatch(setData({type: POST_NAME, payload: target.value}))
          }
          placeholder="Enter Name"
          required
          />
        <br />
        <br />
        <label className={styles.label}>Email</label>
        <br />
        <input
          value={store.email}
          onChange={({target}) =>
          dispatch(setData({type: POST_EMAIL, payload: target.value}))
        }
        className={styles.text}
        type="email"
        placeholder="Enter Email"
        required
        />
        <br />
        <br />
        <label className={styles.label}>Phone Number</label>
        <br />
        <input
          value={store.phone}
          onChange={({target}) =>
          dispatch(setData({type: POST_PHONE, payload: target.value}))
        }
        className={styles.text}
        type="number"
        placeholder="Enter Phone Number"
        required
        />
        <br />
        <br />
        <label className={styles.label}>Gender</label>
        <br />
        <label className={styles.options}>Male</label>
        <input
          checked={store.gender === "male" ? true : false}
          type="radio"
          onChange={() => {
            dispatch(setData({type: POST_GENDER, payload: "male"}));
          }}
        />
        <label className={styles.options}>Female</label>
        <input
          checked={store.gender === "female" ? true : false}
          onChange={() => {
            dispatch(setData({type: POST_GENDER, payload: "female"}));
          }}
          type="radio"
        />
        <br />
        <br />
        <label className={styles.label}>Hobbies</label>
        <br />
        <label className={styles.options}>Coding</label>
        <input type="checkbox" onChange={handleHobbies} name="Coding" />
        <label className={styles.options}>Dancing</label>
        <input type="checkbox" onChange={handleHobbies} name="Dancing" />
        <br />
        <br />
        <label className={styles.options}>Reading</label>
        <input type="checkbox" onChange={handleHobbies} name="Reading" />
        <label className={styles.options}>Cooking</label>
        <input type="checkbox" onChange={handleHobbies} name="Cooking" />
        <br />
        <br />
        <label className={styles.label}>Upload Documents</label>
        <br />
        <input
          onChange={({target}) =>
            dispatch(setData({type: POST_DOC, payload: target.value}))
          }
          type="file"
        />
        <br />
        <br />
        <input className={styles.btn} type="submit" value="Submit" />
      </form>
    </div>
  );
};
