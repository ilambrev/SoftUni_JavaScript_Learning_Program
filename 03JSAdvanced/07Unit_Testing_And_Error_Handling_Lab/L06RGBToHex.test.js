const rgbToHexColor = require('./L06RGBToHex.js');
const assert = require('chai').assert;

describe('rgbToHexColor function test', () => {

    it('shoud return "#FF9EAA"', () => {
        const red = 255;
        const green = 158;
        const blue = 170;
        const expectedResult = '#FF9EAA';

        assert.equal(rgbToHexColor(red, green, blue), expectedResult);
    });

    it('shoud return "#000000"', () => {
        const red = 0;
        const green = 0;
        const blue = 0;
        const expectedResult = '#000000';

        assert.equal(rgbToHexColor(red, green, blue), expectedResult);
    });

    it('shoud return "#FFFFFF"', () => {
        const red = 255;
        const green = 255;
        const blue = 255;
        const expectedResult = '#FFFFFF';

        assert.equal(rgbToHexColor(red, green, blue), expectedResult);
    });

    it('shoud return "undefined"', () => {
        const red1 = -2;
        const red2 = 255;
        const red3 = null;
        const red4 = '100';
        const green1 = 266;
        const green2 = 158;
        const green3 = undefined;
        const green4 = '200';
        const blue1 = 300;
        const blue2 = 170;
        const blue3 = 'one';
        const blue4 = '55';
        const expectedResult = undefined;

        assert.equal(rgbToHexColor(red1, green2, blue2), expectedResult);
        assert.equal(rgbToHexColor(red2, green1, blue2), expectedResult);
        assert.equal(rgbToHexColor(red2, green2, blue1), expectedResult);
        assert.equal(rgbToHexColor(red1, green1, blue1), expectedResult);
        assert.equal(rgbToHexColor(red3, green2, blue2), expectedResult);
        assert.equal(rgbToHexColor(red2, green3, blue2), expectedResult);
        assert.equal(rgbToHexColor(red2, green2, blue3), expectedResult);
        assert.equal(rgbToHexColor(red3, green3, blue3), expectedResult);
        assert.equal(rgbToHexColor(red4, green2, blue2), expectedResult);
        assert.equal(rgbToHexColor(red2, green4, blue2), expectedResult);
        assert.equal(rgbToHexColor(red2, green2, blue4), expectedResult);
        assert.equal(rgbToHexColor(red4, green4, blue4), expectedResult);
    });

});