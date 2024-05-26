export function formatUnixTimestamp(timestamp: number): string {
	// Convert the Unix timestamp from seconds to milliseconds
	const date = new Date(timestamp * 1000);

	// Get the day of the week
	const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
	const dayOfWeek = days[date.getDay()];

	// Get the month
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const month = months[date.getMonth()];

	// Get the day of the month
	const dayOfMonth = date.getDate();

	// Get the year
	const year = date.getFullYear();

	// Get hours in 12-hour format
	const hour = date.getHours() % 12 || 12; // Convert 0 (midnight) to 12

	// Get minutes
	const minutes = date.getMinutes();

	// Determine AM or PM
	const amPm = date.getHours() >= 12 ? 'pm' : 'am';

	// Get timezone - here assuming PST for demonstration
	const timezone = 'PST';

	// Format minutes to ensure two digits
	const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

	// Build the formatted date string
	return `${dayOfWeek} ${month} ${dayOfMonth}, ${year} ${hour}:${formattedMinutes}${amPm} ${timezone}`;
}

// Example usage:
// const timestamp = 1714554832;
// console.log(formatUnixTimestamp(timestamp));  // Output: "Tues Jan 2, 2024 3:20pm PST"




export function timeSince(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals: { [key: string]: number } = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (const [key, value] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / value);
    if (interval >= 1) {
      return interval === 1 ? `1 ${key} ago` : `${interval} ${key}s ago`;
    }
  }

  return 'just now';
}

// Example usage:
// const exampleDate = 'Fri May 24, 2024 8:06pm PST';
// console.log(timeAgo(exampleDate)); // Output depends on the current date and time
