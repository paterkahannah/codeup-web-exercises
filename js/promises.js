'use strict';

const username = function usersLastCommit(username) {
    fetch('https://api.github.com/users/' + username + '/events', {
        headers: {'Authorization': `PROMISES` }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let lastPush;
            for(let event of data) {
                if (event.type === 'PushEvent') {
                    lastPush = new Date(event.created_at);
                    break;
                }
            }
            // var date = new Date(data[0].created_at)
            var humanMonth = lastPush.toLocaleString('en-us', {month: 'long'});
            var humanDay = lastPush.toLocaleString('en-us', {weekday: 'short'});
            var year = lastPush.getFullYear();
            var humanDate = lastPush.toLocaleString('en-us', {day: 'numeric'});
            $("button").click(function() {
                $("p").html("");
                $('p').append(`${username}'s last commit was on ${humanMonth} ${humanDate}, ${year}`);
            });
            console.log(lastPush);
        });
}
username('paterkahannah');
function wait(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
                resolve();
        }, number);
    });
}
wait(2000).then(() => {
    console.log('You\'ll see this after 2 seconds'),
    ($("h1").html(""),
        $('h1').append(`it's been 2 seconds and you made it`))
});
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
