import "mocha";
import {expect} from 'chai';
import {Volume} from '../src/ej2/Volume';
import {Speed} from '../src/ej2/Speed';
import {Length} from '../src/ej2/Length';
import {Temperature} from '../src/ej2/Temperature';
import {Time} from '../src/ej2/Time';
import {Mass} from '../src/ej2/Mass';
import {Force} from '../src/ej2/Force';

describe('Volume tests', () => {
    it('Liters to Cubic Meters works', () => {
        let vol: Volume = new Volume(1000);
        expect(vol.convertLitersToCubicMeters(false)).to.be.equal(1);
    });
    it('Cubic Meters to Liters works', () => {
        let vol: Volume = new Volume(1000);
        expect(vol.convertLitersToCubicMeters(true)).to.be.equal(1000000);
    });
    it('Liters to Gallons works', () => {
        let vol: Volume = new Volume(1000);
        expect(parseFloat(vol.convertLitersToGallons(false).toFixed(2))).to.be.equal(263.85);
    });
});

describe('Speed tests', () => {
    it('m/s to km/h works', () => {
        let spe: Speed = new Speed(1000);
        expect(spe.convertMetersPerSecondToKmPerHour(false)).to.be.equal(3600);
    });
    it('Knots to milles/hour works', () => {
        let spe: Speed = new Speed(1000);
        expect(spe.convertMillesPerHourToKnots(true)).to.be.equal(1150);
    });
});

describe('Length tests', () => {
    it('m to km works', () => {
        let len: Length = new Length(1000);
        expect(len.convertMetersToKilometers(false)).to.be.equal(1);
    });
    it('Km to milles works', () => {
        let len: Length = new Length(10);
        expect(len.convertKilometersToMilles(true)).to.be.equal(16.09);
    });
});

describe('Temperature tests', () => {
    it('C to K works', () => {
        let tem: Temperature = new Temperature(0);
        expect(tem.convertCelsiusToKelvin(false)).to.be.equal(273.15);
    });
    it('C to F works', () => {
        let tem: Temperature = new Temperature(0);
        expect(tem.convertCelsiusToFahrenheit(false)).to.be.equal(32);
    });
});

describe('Time tests', () => {
    it('s to min works', () => {
        let tim: Time = new Time(3600);
        expect(tim.convertSecondsToMinutes(false)).to.be.equal(60);
    });
    it('days to hours works', () => {
        let tim: Time = new Time(100);
        expect(tim.convertHoursToDays(true)).to.be.equal(2400);
    });
});

describe('Mass tests', () => {
    it('pounds to grams works', () => {
        let mas: Mass = new Mass(50);
        expect(mas.convertGramsToPounds(true)).to.be.equal(22700);
    });
});

describe('Force tests', () => {
    it('Newtons to Kiloponds works', () => {
        let forc: Force = new Force(50);
        expect(parseFloat(forc.convertNewtonsToKiloponds(false).toFixed(3))).to.be.equal(5.099);
    });
});