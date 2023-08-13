const allowedUnits = [
    'day',
    'days',
    'hour',
    'hours',
    'minute',
    'minutes',
    'second',
    'seconds'
];

function timeAdder(value1, value2, value3, value4) {
    
    /** FUNCTIONS */
    function validUnits(str1, str2, arr) {
        return arr.includes(str1) && arr.includes(str2);
    }

    function validnumbers(num1, num2) {
        return num1 >=1 && num2 >= 1;
    }

    function correctUnits(value, unit) {
        if (value > 1) {
            if (unit.charAt(unit.length - 1) != 's') {
                return false;
            }
        }

        if (value === 1) {
            if (unit.charAt(unit.length - 1) === 's') {
                return false;
            }
        }

        return true;
    }

    function convertToSeconds(num, units) {
            switch (units) {
                case 'days':
                    return convertFromDays(num);
                    // break;
                case 'day':
                    return convertFromDays(num);
                    // break;
                case 'hours':
                    return convertFromHours(num);
                    // break;
                case 'hour':
                    return convertFromHours(num);
                    // break;
                case 'minutes':
                    return convertFromMinutes(num);
                    // break;
                case 'minute':
                    return convertFromMinutes(num);
                    // break;
                case 'seconds':
                    return num;
                    // break;
                case 'second':
                    return num;
                    // break;
                default:
                    return null;
            }
        }
    
    function convertFromDays(input) {
        return input * 24 * 60 * 60;
    }

    function convertFromHours(input) {
        return input * 60 * 60;
    }

    function convertFromMinutes(input) {
        return input * 60;
    }

    function getTotalSeconds(s1, s2) {
        return s1 + s2;
    }

    function convertBack(s3) {
        const secsInDay = 86400;
        const secsInHour = 3600;
        const secsInMinute = 60;

        const numberOfDays = s3 / secsInDay;
        const totalNumberOfDays = Math.floor(numberOfDays);
        let remainingSeconds = s3 % secsInDay;

        const numberOfHours = remainingSeconds / secsInHour;
        const totalNumberOfHours = Math.floor(numberOfHours);
        remainingSeconds = remainingSeconds % secsInHour;

        const numberOfMinutes = remainingSeconds / secsInMinute;
        const totalNumberOfMinutes = Math.floor(numberOfMinutes);
        remainingSeconds = remainingSeconds % secsInMinute;

        const newTime = {
            days: totalNumberOfDays,
            hours: totalNumberOfHours,
            minutes: totalNumberOfMinutes,
            seconds: remainingSeconds
        }

        return newTime;
    }
    
    let message;

    if (!validnumbers(value1, value3) || !validUnits(value2, value4, allowedUnits)) {
        message = "check your arguments, incorrect numbers or units";
    }

    if (!correctUnits(value1, value2) || !correctUnits(value3, value4)) {
        message = "incorrect units";
    }

    const seconds1 = convertToSeconds(value1, value2);
    const seconds2 = convertToSeconds(value3, value4);

    const totalSeconds = getTotalSeconds(seconds1,seconds2);

    const newValues = convertBack(totalSeconds);
    
    if(!message) {
        message = newValues;
    }
        return message;
}

// console.log(timeAdder(86400,"seconds",60,"seconds"));
console.log(timeAdder(1,"second",58,"minutes"));