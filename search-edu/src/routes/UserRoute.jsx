import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styles from "../styles/user.module.css"

export const UserRoute = () => {
  const store = useSelector(s=>s)

  useEffect(()=>{
      console.log(store);
  },[store])
  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <h1>User Detailes</h1>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <td>{store.name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{store.email}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{store.phone}</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{store.gender.toUpperCase()}</td>
            </tr>
            <tr>
              <th>Hobbies</th>
              <td>{store.hobbies.map((ele) => ele).join(", ")}</td>
            </tr>
            <tr>
              <th>Documents Path</th>
              <td>{store.doc ? store.doc : "Details not available"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
