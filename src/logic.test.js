const expect = require('chai').expect;
const logic = require('./logic.js');

describe('logic', () => {
    it('compute time difference', () => {
        const actual = logic.compute('2008-01-01');
        expect(actual).to.eql('13 years ago');
    });
});

