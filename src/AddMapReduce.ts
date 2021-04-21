import {mapAndReduce} from '../src/mapAndReduce';

export class AddMapReduce extends mapAndReduce {
    constructor(dataList: number[], protected operateMap: (x: number) => number) {
        super(dataList, operateMap);
    }

    /**
     * Reduce el map a un escalar
     */
    mapReduce() {
        let tmp: number = 0;
        this.customMap.forEach(element => {
            tmp += element.value;
        });
        this.reducedNumber = tmp;
    }

    /**
     * @returns customMap El mapa una vez aplicado a la lista
     */
    public getMapList() {
        return this.customMap;
    }

    /**
     * Genera el map desde la lista
     */
    public generateMap() {
        return this.listMap();
    }

    /**
     * @returns reducedNumber El resultado de aplicar reduce al map
     */
    public getMapReduced(): number {
        return this.reducedNumber;
    }

    /**
     * Genera el resultado escalar del reduce al map
     */
    public generateMapReduce() {
        return this.mapReduce();
    }
}