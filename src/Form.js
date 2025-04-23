import React from "react";
import "./Form.css";

function Form({ isUserRegistered }) {
  console.log(isUserRegistered);
  return (
    <>
      <h3>{isUserRegistered ? "Login" : "Register"} form </h3>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />

        {/* {isUserRegistered ? null : (
          <input type="password" placeholder="Confirm Password" />
        )} */}
        {!isUserRegistered && (
          <input type="password" placeholder="Confirm Password" />
        )}

        {/* {isUserRegistered ? (
          <input type="button" value="login" />
        ) : (
          <input type="button" value="Register" />
        )} */}
        <input type="button" value={isUserRegistered ? "login" : "Register"} />
      </form>
    </>
  );
}
export default Form;
