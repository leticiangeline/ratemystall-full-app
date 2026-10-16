export function countRatings(ratings) {
  return ratings.length;
}

export function averageRating(ratings) {
  const total = ratings.reduce((sum, rating) => sum + rating, 0);
  return total / ratings.length;
}
