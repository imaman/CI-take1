const moment = require('moment');

function compute(d) {
    const a = '1995-03-20';
    return moment(a).from(d)
}


module.exports = {
    compute
}