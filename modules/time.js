var os = require('os');
var uptime = os.uptime();

function time() {
 var hours = Math.floor(uptime / 3600);
        var minutes = Math.floor((uptime - (hours * 3600)) / 60);
        var seconds = uptime - (hours * 3600) - (minutes * 60);

    if(uptime < 60) {
        console.log('Uptime ', seconds);
    }
    else if(uptime > 60) {
        console.log('Uptime ', minutes, ' min ' + seconds, ' sec ')
    }
    else {
        console.log('Uptime ', hours, 'h' + minutes, ' min ' + seconds, ' sec ');
    }
}
exports.print = time;