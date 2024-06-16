import React from 'react';

export function Rating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const stars = [];

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<div key={`full-${i}`} className="bi-star-fill"></div>);
  }

  // Add half star if needed
  if (hasHalfStar) {
    stars.push(<div key="half" className="bi-star-half"></div>);
  }

  // Fill remaining stars up to 5
  const remainingStars = 5 - stars.length;
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<div key={`empty-${i}`} className="bi bi-star"></div>);
  }

  return (
    <div className="d-flex justify-content-center small text-warning mb-2">
      {stars}
    </div>
  );
}
