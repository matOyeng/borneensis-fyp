interface Feedback {
    id: number;
    yap: string;
  }
  
  interface FeedbackCardProps {
    feedback: Feedback;
  }
  
  const FeedbackCard = ({ feedback }: FeedbackCardProps) => {
    return (
      <div className="feedback-card">
        <p>{feedback.yap}</p>
      </div>
    );
  };
  
  export default FeedbackCard;
  