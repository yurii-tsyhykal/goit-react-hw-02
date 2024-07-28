import Button from "../Button/Button";

const Options = ({updateFeedback, totalFeedback }) => (
  <ul>
    <li>
      <Button
        onClick={() => updateFeedback("good")}
      >Good</Button>
    </li>
    <li>
      <Button
        onClick={() => updateFeedback("neutral")}
      >Neutral</Button>
    </li>
    <li>
      <Button onClick={() => updateFeedback("bad")}>Bad</Button>
    </li>
    {totalFeedback === 0 ? (
      ""
    ) : (
      <li>
        <Button
          onClick={() => updateFeedback("reset")}
        >Reset</Button>
      </li>
    )}
  </ul>
);

export default Options;
