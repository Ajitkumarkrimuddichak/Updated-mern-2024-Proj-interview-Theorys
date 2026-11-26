/*****  Dates Methods And Time  *****/

// 1. Current Date
let myDate = new Date();
// console.log(myDate);
// console.log(typeof myDate);

// 2. Date Formatting
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());

// 3. Custom Date
// let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toLocaleString());

// // 4. Date with Time
// let customDate = new Date(2023, 0, 23, 5, 3);
// console.log(customDate.toLocaleString());

// // 5. Timestamp
// let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// // 6. Get Timestamp of Existing Date
// console.log(myCreatedDate.getTime());

// // 7. Convert Milliseconds to Seconds
// console.log(Math.floor(Date.now() / 1000));

// 8. Get Date Values
// let newDate = new Date();
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getFullYear());

// 9. Get Time Values
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getSeconds());

// 10. Template Literals
// console.log(`Today is ${newDate.toDateString()}`);

// 11. Custom Weekday
// let fullDayOfWeek = newDate.toLocaleString("en-IN", {
//   weekday: "long",
// });
// console.log("Today is:", fullDayOfWeek);

// 12. Custom Month
// let monthName = newDate.toLocaleString("en-IN", {
//   month: "long",
// });
// console.log("Month:", monthName);


// ************* Example *************
// const newDate = new Date();
// console.log(
//   newDate.toLocaleString("en-IN")
// );
// console.log(
//   newDate.toLocaleDateString("en-IN")
// );
// console.log(
//   newDate.toLocaleTimeString("en-IN")
// );


// const newDate = new Date();
// const formattedDate = newDate.toLocaleString("en-IN", {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
//   hour: "2-digit",
//   minute: "2-digit",
// });
// console.log(formattedDate);


// const today = new Date();
// const deliveryDate = new Date("2026-12-10");
// if (deliveryDate > today) {
//   console.log("Delivery is pending");
// } else {
//   console.log("Delivery date has passed");
// }


// const startDate = new Date("2026-11-01");
// const endDate = new Date("2026-12-01");
// const difference = endDate.getTime() - startDate.getTime();
// console.log(difference);
// const days = difference / (1000 * 60 * 60 * 24);
// console.log(days);


// const date = new Date();
// date.setDate(30);
// console.log(date);
