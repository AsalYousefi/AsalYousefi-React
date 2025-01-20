function PrintMsg() {
  const isLoggedIn = true;
  return (
    <>
      <p>{isLoggedIn ? "Welcome" : "You Have To Log In"}</p>
    </>
  );
}
export default PrintMsg;