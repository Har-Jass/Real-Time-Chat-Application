// // time format - 24hr
// export function extractTime(dateString) {
// 	const date = new Date(dateString);
// 	const hours = padZero(date.getHours());
// 	const minutes = padZero(date.getMinutes());
// 	return `${hours}:${minutes}`;
// }

// // time format - 12hr
// export function extractTime(dateString) {
//     const date = new Date(dateString);
//     const hours = date.getHours();
//     const minutes = padZero(date.getMinutes());
//     const period = hours >= 12 ? 'PM' : 'AM';
//     const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
//     return `${formattedHours}:${minutes} ${period}`;
// }

// // time format - 24hr + today yesterday functionality
// export function extractTime(dateString) {
//     const date = new Date(dateString);
//     const hours = date.getHours();
//     const minutes = padZero(date.getMinutes());
    
//     // Get today's date
//     const today = new Date();
//     const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    
//     // Get yesterday's date
//     const yesterday = new Date(today);
//     yesterday.setDate(yesterday.getDate() - 1);
//     const yesterdayDate = new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate());
    
//     // Compare message date with today and yesterday
//     const messageDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    
//     if (messageDate.getTime() === todayDate.getTime()) {
//         return `Today ${padZero(hours)}:${minutes}`;
//     } else if (messageDate.getTime() === yesterdayDate.getTime()) {
//         return `Yesterday ${padZero(hours)}:${minutes}`;
//     } else {
//         const period = hours >= 12 ? 'PM' : 'AM';
//         const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
//         return `${formattedHours}:${minutes} ${period}`;
//     }
// }

// // time format - 12hr + today yesterday functionality
// export function extractTime(dateString) {
//     const date = new Date(dateString);
//     const hours = date.getHours();
//     const minutes = padZero(date.getMinutes());

//     // Get today's date
//     const today = new Date();
//     const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

//     // Get yesterday's date
//     const yesterday = new Date(today);
//     yesterday.setDate(yesterday.getDate() - 1);
//     const yesterdayDate = new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate());

//     // Compare message date with today and yesterday
//     const messageDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

//     if (messageDate.getTime() === todayDate.getTime()) {
//         return `Today ${format12HourTime(hours, minutes)}`;
//     } 
//     else if (messageDate.getTime() === yesterdayDate.getTime()) {
//         return `Yesterday ${format12HourTime(hours, minutes)}`;
//     } 
//     else {
//         return `${format12HourTime(hours, minutes)}`;
//     }
// }

// function format12HourTime(hours, minutes) {
//     const period = hours >= 12 ? 'PM' : 'AM';
//     const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
//     return `${formattedHours}:${minutes} ${period}`;
// }


// // Helper function to pad single-digit numbers with a leading zero
// function padZero(number) {
// 	return number.toString().padStart(2, "0");
// }

export function extractTime(dateString) {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = padZero(date.getMinutes());

    // Get today's date
    const today = new Date();
    const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    // Get yesterday's date
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayDate = new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate());

    // Compare message date with today, yesterday, and two days ago
    const messageDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    if (messageDate.getTime() === todayDate.getTime()) {
        return `Today, ${format12HourTime(hours, minutes)}`;
    } 
    else if (messageDate.getTime() === yesterdayDate.getTime()) {
        return `Yesterday, ${format12HourTime(hours, minutes)}`;
    } 
    else if (messageDate < yesterdayDate) {
        // If the message date is before yesterday, show the full date
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
        const year = date.getFullYear();
        return `${day} ${month} ${year}, ${format12HourTime(hours, minutes)}`;
    }
    else {
        return `${format12HourTime(hours, minutes)}`;
    }
}

function format12HourTime(hours, minutes) {
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
    return `${formattedHours}:${minutes} ${period}`;
}

function padZero(num) {
    return num < 10 ? '0' + num : num; // Add leading zero if needed
}