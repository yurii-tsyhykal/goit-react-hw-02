import Button from "../Button/Button";

const Options = ({ array, updateFeedback, totalFeedback }) => (
  <ul>
    <li>
      <Button
        textBtn={array[0]}
        onClick={() => updateFeedback("good")}
      ></Button>
    </li>
    <li>
      <Button
        textBtn={array[1]}
        onClick={() => updateFeedback("neutral")}
      ></Button>
    </li>
    <li>
      <Button textBtn={array[2]} onClick={() => updateFeedback("bad")}></Button>
    </li>
    {totalFeedback === 0 ? (
      ""
    ) : (
      <li>
        <Button
          textBtn={array[3]}
          onClick={() => updateFeedback("reset")}
        ></Button>
      </li>
    )}
  </ul>
);

export default Options;
