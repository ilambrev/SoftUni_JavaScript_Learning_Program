function onTimeForTheExam(input) {
    let examStartHour = Number(input[0]);
    let examStartMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);

    let exameTimeInMinutes = examStartHour * 60 + examStartMinute;
    let arrivalTimeInMinutes = arrivalHour * 60 + arrivalMinute;

    let timeDifferenceInMinutes = arrivalTimeInMinutes - exameTimeInMinutes;

    let hoursDifference = Math.floor(Math.abs(timeDifferenceInMinutes / 60));
    let minutesDifference = Math.abs(timeDifferenceInMinutes % 60);

    if (timeDifferenceInMinutes > 0) {
        console.log("Late");

        if (hoursDifference > 0) {
            if (minutesDifference < 10) {
                console.log(`${hoursDifference}:0${minutesDifference} hours after the start`);
            } else {
                console.log(`${hoursDifference}:${minutesDifference} hours after the start`);
            }

        } else {
            console.log(`${minutesDifference} minutes after the start`);
        }

    } else if (timeDifferenceInMinutes < -30) {
        console.log("Early");

        if (hoursDifference > 0) {
            if (minutesDifference < 10) {
                console.log(`${hoursDifference}:0${minutesDifference} hours before the start`);
            } else {
                console.log(`${hoursDifference}:${minutesDifference} hours before the start`);
            }

        } else {
            console.log(`${minutesDifference} minutes before the start`);
        }

    } else {
        console.log("On time");

        if (minutesDifference > 0) {
            console.log(`${minutesDifference} minutes before the start`);
        }
    }
}

// onTimeForTheExam(["9", "30", "9", "50"]);
// onTimeForTheExam(["9", "00", "10", "30"]);
// onTimeForTheExam(["10", "00", "10", "00"]);
// onTimeForTheExam(["9", "00", "8", "30"]);
// onTimeForTheExam(["14", "00", "13", "55"]);
// onTimeForTheExam(["11", "30", "10", "55"]);
// onTimeForTheExam(["16", "00", "15", "00"]);
// onTimeForTheExam(["11", "30", "8", "12"]);
// onTimeForTheExam(["11", "30", "12", "29"]);