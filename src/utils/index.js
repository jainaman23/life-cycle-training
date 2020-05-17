export default function getPastTime(date) {
  const diff = new Date().getTime() - new Date(date).getTime();

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let timePassed = 'today';

  if (days > 0 && days < 7) {
    timePassed = days === 1 ? `${days} day ago` : `${days} days ago`;
  } else if (days >= 7 && days < 31) {
    const week = Math.floor(days / 7);
    timePassed = week === 1 ? `${week} week ago` : `${week} weeks ago`;
  } else if (days >= 31 && days < 365) {
    const month = Math.floor(days / 30);
    timePassed = month === 1 ? `${month} month ago` : `${month} months ago`;
  } else if (days >= 356) {
    const year = Math.floor(days / 365);
    timePassed = year === 1 ? `${year} year ago` : `${year} years ago`;
  }

  return timePassed;
}
