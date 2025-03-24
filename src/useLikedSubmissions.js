import { useEffect, useState } from "react";
import {
  fetchLikedFormSubmissions,
  saveLikedFormSubmission,
} from "./service/mockServer";

const useLikedSubmissions = () => {
  const [likedSubmissions, setLikedSubmissions] = useState([]);

  useEffect(() => {
    const loadLikedSubmissions = async () => {
      try {
        const response = await fetchLikedFormSubmissions();
        setLikedSubmissions(response.formSubmissions);
      } catch (error) {
        console.error("Error fetching submissions:", error);
      }
    };

    loadLikedSubmissions();
  }, []);

  const addLikedSubmission = async (submission) => {
    const updatedList = [...likedSubmissions, submission];
    setLikedSubmissions(updatedList);

    await saveLikedFormSubmission(submission);
  };

  return { likedSubmissions, addLikedSubmission };
};

export default useLikedSubmissions;
