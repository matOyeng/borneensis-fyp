import supabase from "@/lib/supabaseClient";
import { useState } from "react";

const CreateFeedback = () => {
  const [yap, setYap] = useState('');
  const [formError, setFormError] = useState<string | null>(null); // Add formError state

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!yap) {
      setFormError('Please fill in the fields correctly');
      return;
    }

    const { data, error } = await supabase
      .from('feedbacks')
      .insert([{ yap }]);

    if (error) {
      console.error(error);
      setFormError('Failed to submit feedback. Please try again.');
    }

    if (data) {
      console.log(data);
      setFormError(null);
      setYap(''); // Clear the textarea after successful submission
    }
  };

  return (
    <div className="page create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="yap">Feedback:</label>
        <textarea
          id="yap"
          value={yap}
          onChange={(e) => setYap(e.target.value)}
        />
        <button type="submit">Create Feedback</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default CreateFeedback;
