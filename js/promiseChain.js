const hasMeeting = false;
// const hasMeeting = true;

const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            name: 'Technical Meeting',
            location: 'Google Meet',
            time: '10.00 PM'
        };
        resolve(meetingDetails);
    }
    else {
        reject(new Error(`Meeting already scheduled !`));
    }
});

// const addToCalender = (meetingDetails) => {
//     return new Promise((resolve, reject) => {
//         const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;

//         resolve(calender);
//     })
// }

/* === Alternative of above codes ====== */

const addToCalender = (meetingDetails) => {

    const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;

    return Promise.resolve(calender);

}

meeting
    .then(addToCalender)
    .then((res) => {
        console.log(JSON.stringify(res));
    })
    .catch((err) => {
        console.log(err.message);
    })

console.log(`Hello !!!!!`);