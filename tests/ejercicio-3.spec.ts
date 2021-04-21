import "mocha";
import {expect} from 'chai';
import {collectionType} from '../src/ej3/collectionType';
import {Streamable} from '../src/ej3/Streamable'
import {SearchableStreamable} from '../src/ej3/SearchableStreamable'
import {BasicStreamableCollection} from '../src/ej3/BasicStreamableCollection';
import {Documentary} from '../src/ej3/Documentary';
import {DocumentaryCollection} from '../src/ej3/DocumentaryCollection';
import {Series} from '../src/ej3/Series';
import {SeriesCollection} from '../src/ej3/SeriesCollection';
import {Film} from '../src/ej3/Film';
import {FilmCollection} from '../src/ej3/FilmCollection';

describe('Series tests', () => {
    it('Series Search by keyword works', () => {
        let ser: Series = new Series("La casa de papel", ["accion"], ["España", "accion", "Netflix"], ["Tokyo", "Berlín"], 2016, 4, 30);
        let ser2: Series = new Series("Ragnarok", ["accion", "mitologia"], ["Noruega", "accion", "Netflix","mitologia"], ["Thor"], 2020, 1, 6);
        let serCol: SeriesCollection = new SeriesCollection("series", [ser, ser2]);
        expect(serCol.searchItem("keyword", "España")).to.be.eql([ser]);
    });
});

describe('Documentary tests', () => {
    it('Documentary Search by year works', () => {
        let doc: Documentary = new Documentary("El águila", ["naturaleza"], ["ave", "aguila", "naturaleza"], 2020, 114);
        let docCol: DocumentaryCollection = new DocumentaryCollection("documentales", [doc]);
        expect(docCol.searchItem("year", 2020)).to.be.eql([doc]);
    });
});

describe('Film tests', () => {
    it('Film Search by duration works', () => {
        let flm: Film = new Film("Parque Jurásico", ["Ciencia Ficción"], ["Dinosaurios", "Ficción"], ["Trex", "Velociraptor"], 1993, 108)
        let flmCol: FilmCollection = new FilmCollection("pelis", [flm]);
        expect(flmCol.searchItem("duration", 108)).to.be.eql([flm]);
    });
});