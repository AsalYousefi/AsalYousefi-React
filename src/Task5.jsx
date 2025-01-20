function StringsList() {
  const strings = ["one", "two", "three"];
  return (
    <ul>
      {strings.map((el, index) => (
        <li key={index}>{el}</li>
      ))}
    </ul>
  );
}

export default StringsList;
