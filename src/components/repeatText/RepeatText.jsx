const RepeatText = ({ count, text }) => {
  const array = [];
  for (let index = 0; index < count; index++) {
    array.push(text);
  }
  return (
    <div className="repeat-box">
      {array.map((p, index) => (
        <p key={index}>{p}</p>
      ))}
    </div>
  );
};

export default RepeatText;
