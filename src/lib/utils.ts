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
	return `${dayOfWeek} ${month} ${dayOfMonth}, ${hour}:${formattedMinutes}${amPm} ${timezone}`;
}

// Example usage:
// const timestamp = 1714554832;
// console.log(formatUnixTimestamp(timestamp));  // Output: "Tues Jan 2, 3:20pm PST"
