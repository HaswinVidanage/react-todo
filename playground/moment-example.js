var moment  = require('moment');

console.log(moment().format());

//unix timestamps
//January  1st 1970 @ 12:00am -> 0
//January  1st 1970 @ 12:00am -> 60

var now = moment();
console.log('Current timestamp ', now.unix());

var timestamp = 1492713198;
var currentMoment = moment.unix(timestamp);
console.log('currentMoment ',currentMoment.format('MMM D, YY @ H:MM a'));


//January 3rd, 2017 @ 12:13 AM

console.log('Final Format : ', moment.unix(timestamp).format('MMMM Do, YYYY @ h:mm:ss A '));
