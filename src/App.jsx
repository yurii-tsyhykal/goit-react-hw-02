import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const keyLS = "counterValue";
function App() {
  const [counter, setCounter] = useState(
    () =>
      JSON.parse(localStorage.getItem(keyLS)) ?? {
        good: 0,
        neutral: 0,
        bad: 0,
      }
  );

  useEffect(() => {
    localStorage.setItem(keyLS, JSON.stringify(counter));
  }, [counter]);
  const resetCounter = () => setCounter({ good: 0, neutral: 0, bad: 0 });

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      resetCounter();
    } else {
      setCounter({ ...counter, [feedbackType]: counter[feedbackType] + 1 });
    }
  };

  const totalFeedback = counter.good + counter.neutral + counter.bad;
  const positiveFeedback = Math.round((counter.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          counter={counter}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
}

export default App;
