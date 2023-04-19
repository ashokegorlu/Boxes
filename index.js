const Box = (props) => {
  let { textElement, boxSize } = props;
  return (
    <div className={boxSize}>
      <p>{textElement}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="main-heading">Boxes</h1>
    <div className="boxes-container">
      <Box textElement="Small" boxSize="small-box" />
      <Box textElement="Medium" boxSize="medium-box" />
      <Box textElement="Large" boxSize="large-box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
