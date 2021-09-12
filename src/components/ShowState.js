const ShowState = ({ name, password, rememberMe }) => {
    console.log(rememberMe);
  return (
    <div>
      <b>{name}</b>
      <b>{password}</b>
      <b>{rememberMe ?"ckecked":"unchecked"}</b>
    </div>
  );
};

export default ShowState;
