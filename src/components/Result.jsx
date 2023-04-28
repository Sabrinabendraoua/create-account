const result = (props) => {
  return (
    <div>
      <p>Name : {props.lastname}</p>
      <p>Email : {props.email}</p>
      <p>Password : {props.password}</p>
      <button
        onClick={() => {
          props.setResult(false);
        }}
      >
        Edit your informations
      </button>
    </div>
  );
};
export default result;
