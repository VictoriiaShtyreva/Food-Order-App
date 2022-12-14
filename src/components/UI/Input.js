import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input}/> 
    </div> //all the key value pairs in this input object, which we receive on props input are added as props to input with helps spread operator
  );
};

export default Input;
