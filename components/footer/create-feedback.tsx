"use client";

import supabase from "@/lib/supabaseClient";
import { useState, useTransition } from "react";
import { useFont } from '@/context/fontContext'; // Import useFont context

const CreateFeedback = () => {
  const [yap, setYap] = useState("");
  const [formError, setFormError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const { size } = useFont(); // Access dynamic font size

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!yap) {
      setFormError('Please fill in the fields correctly');
      return;
    }

    startTransition(async () => {
      const { data, error } = await supabase.from("feedbacks").insert([{ yap }]);

      if (error) {
        console.error(error);
        setFormError("Failed to submit feedback. Please try again.");
        return;
      }

      if (data) {
        console.log(data);
        setFormError(null);
        setYap(""); // Clear the textarea after successful submission
      }
    });
  };

  return (
    <div className="p-4 border-t mt-4">
      <form onSubmit={handleSubmit}>
        <label htmlFor="yap" className="block mb-2 text-sm font-medium">
        </label>
        <textarea
          id="yap"
          value={yap}
          onChange={(e) => setYap(e.target.value)}
          style={{ fontSize: size }} // Dynamic font size
          className="w-full p-2 border rounded-md mb-4"
        />
        <button
          type="submit"
          disabled={isPending}
          style={{ fontSize: size }} // Dynamic font size
          className="px-4 py-2 bg-green-600 text-white rounded-md disabled:bg-gray-400"
        >
          {isPending ? "Uploading..." : "Create Feedback"}
        </button>

        {formError && <p className="text-red-500 mt-2">{formError}</p>}
      </form>
    </div>
  );
};

export default CreateFeedback;
