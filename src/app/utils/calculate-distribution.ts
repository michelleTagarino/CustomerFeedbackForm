import Comment from "../shared/interfaces/comment";

/**
 * Calculates the count of each feedback rating
 * @param data 
 * @returns number[]
 */
export const calculateDistribution = (data: Comment[]) => {
  const ratingDistribution: number[] = [0, 0, 0, 0, 0];
  
  if (!data?.length) {
    return ratingDistribution;
  }

  data.forEach((comment: Comment) => {
    let rating: number = Number(comment.rating);

    if (rating >= 1 && rating <= 5) {
      ratingDistribution[rating - 1]++;
    }
  });

  return ratingDistribution;
};