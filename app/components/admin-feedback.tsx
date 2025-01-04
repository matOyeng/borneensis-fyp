import supabase from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

import FeedbackCard from "./admin-feedback-card";

export default function AdminFeedbacks() {
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [feedbacks, setFeedbacks] = useState<any[]>([]); // Default to an empty array

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const { data, error } = await supabase.from('feedbacks').select();

      if (error) {
        setFetchError('Could not fetch the feedbacks');
        setFeedbacks([]);
        console.error(error);
      } else if (data) {
        setFeedbacks(data);
        setFetchError(null);
      }
    };

    fetchFeedbacks();
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="page feedback">
      {fetchError && <p>{fetchError}</p>}
      {feedbacks.length > 0 && (
        <div className="feedbacks">
          <div className="feedback-grid">
          {feedbacks.map((feedback) => (
            <FeedbackCard key={feedback.id} feedback={feedback} />
          ))}
          </div>
        </div>
      )}
    </div>
  );
}
