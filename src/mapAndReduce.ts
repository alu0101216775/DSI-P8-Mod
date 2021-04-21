/**
 * Clase abstracta para representar la plantilla
 */
export abstract class mapAndReduce {
    protected dataList: number[];
    protected customMap: {key: number, value: number}[];
    protected reducedNumber: number;
    
    /**
     * Genera la clase y almacena las funciones usadas en las subclases para operar
     * @param dataList 
     * @param operateMap 
     * @param operateReduce 
     */
    constructor(dataList: number[], protected operateMap: (x: number) => number){
        this.dataList = dataList;
        this.customMap = [];
        this.reducedNumber = 0;
    }

    /**
     * Método plantilla
     */
    public run() {
        this.listMap();
        this.mapReduce();
    }

    /**
     * Método para crear el Map
     */
    protected listMap() {
        let tmpMapElement: {key: number, value: number} = {key: 0, value: 0};
        this.dataList.forEach(element => {
            this.customMap.push({key: element, value: this.operateMap(element)});
        })
    }

    protected abstract mapReduce(): void;


}