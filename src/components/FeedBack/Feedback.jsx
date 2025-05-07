import { useState } from "react";
import "./Feedback.css";
const Feedback = () => {
    const [suggestion, setSuggestion] = useState("")
  const [feedbacks, setFeedbacks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setFeedbacks([...feedbacks, suggestion])
    setSuggestion("")
  }
  return (
    <div className="feedback">
      <h2 className="section-title">Feedback</h2>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" className="input-field" />
        <textarea
          placeholder="Your Suggestions"
          className="textarea-field"
          value={suggestion}
          onChange={(e)=> setSuggestion(e.target.value)}
        ></textarea>
        <button className="submit-button" type="submit">
          Submit Feedback
        </button>
      </form>
      <div className="allfeedBack">
        { feedbacks.map((feedback, index)=> (
            <p key={index}>{feedback}</p>
        ))}
     </div>
    </div>
  );
};
export default Feedback;
