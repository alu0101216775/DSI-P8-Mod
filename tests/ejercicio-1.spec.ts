import "mocha";
import {expect} from 'chai';
import {Pokemon} from '../src/ej1/Pokemon';
import {FighterDex} from '../src/ej1/fighterDex';
import {Combat} from '../src/ej1/Combat';
import {Entry} from '../src/ej1/Entry';
import { Mythology } from "../src/ej1/Mythology";
import { Fighter } from "../src/ej1/Fighter";
import { DC } from "../src/ej1/DC";
import { DragonBall } from "../src/ej1/DragonBall";
import { Marvel } from "../src/ej1/Marvel";

describe('Fighterdex tests', () => {
    it('Charmander and Zeus entries are expected to store in dex and print properly', () => {
        let charmander = new Pokemon("CHARMANDER", 10, 0.5, ["FIRE", "ANIMAL"], "Char, char!", {atk: 130, def: 30, spe: 50, HP: 180});
        let zeus = new Mythology("ZEUS", 110, 2.10, ["GOD"], "No permitiré más insolencias", {atk: 500, def: 200, spe: 100, HP: 450}, "GOD", "GREEK");
        let currentDate: Date = new Date();
        let charmanderEntry = new Entry(currentDate, charmander);
        let zeusEntry = new Entry(currentDate, zeus);
        let dex = new FighterDex("Dex");
        dex.addNewEntry(zeusEntry);
        dex.addNewEntry(charmanderEntry);
        expect(dex.printDex()).to.be.equal("-------->    " + dex.name + "    <--------\n\n0 ---> " + dex.getEntryById(0).fighter.universe + " ||| " + dex.getEntryById(0).fighter.name + "\n1 ---> " + dex.getEntryById(1).fighter.universe + " ||| " + dex.getEntryById(1).fighter.name + "\n");
    });
});

describe('Combat tests', () => {
    it('Arceus is expected to win Batman in a battle', () => {
        let arceus: Fighter = new Pokemon("ARCEUS", 350, 3.10, ["GOD", "ANIMAL"], "Por el bien...de la paz", {atk: 400, def: 300, spe: 300, HP: 300});
        let batman: Fighter = new DC("BATMAN", 80, 1.70, ["HUMAN", "ANIMAL"], "Suerte, viejo... todo es gracias a la suerte", {atk: 200, def: 150, spe: 500, HP: 200}, "BAT");
        let battle = new Combat(arceus, batman);
        expect(battle.start().getName()).to.be.equal("ARCEUS");
    });
    it('Anubis is expected to win Hulk in a battle', () => {
        let anubis = new Mythology("ANUBIS", 70, 2, ["GOD", "GHOST"], "¿Quién osa perturbar mi descanso?", {atk: 200, def: 500, spe: 50, HP: 600}, "DARKGOD", "EGYPTIAN");
        let hulk: Fighter = new Marvel("HULK", 200, 2.50, ["HUMAN", "ANIMAL", "ALIEN"], "Mi secreto es que siempre estoy furioso.", {atk: 300, def: 250, spe: 50, HP: 300}, "GREENMAN");
        let battle = new Combat(anubis, hulk);
        expect(battle.start().getName()).to.be.equal("ANUBIS");
    });
    it('Goku is expected to win Charmander in a battle', () => {
        let charmander = new Pokemon("CHARMANDER", 10, 0.5, ["FIRE", "ANIMAL"], "Char, char!", {atk: 130, def: 30, spe: 50, HP: 180});
        let goku: Fighter = new DragonBall("GOKU", 100, 1.60, ["HUMAN", "FLYING"], "Puede que haya perdido todo, pero jamás dejaré de pelear por lo que creo", {atk: 450, def: 250, spe: 300, HP: 400}, "SAIJAN", 4);
        let battle = new Combat(charmander, goku);
        expect(battle.start().getName()).to.be.equal("GOKU");
    });
});