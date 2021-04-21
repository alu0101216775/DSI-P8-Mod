/**
 * Clase abstracta para representar a un luchador
 */
export abstract class mapAndReduce {
    protected dataList: number[];
    protected customMap: {key: number, value: number}[];
    
    constructor(dataList: number[], operate: (x: number, y: number) => ){
        this.dataList = dataList;
        this.customMap = [];
    }

    protected listMap() {
        let tmpMapElement: {key: number, value: number};
        this.dataList.forEach(element => {
            tmpMapElement.key = element;
            tmpMapElement.value =
        })
    }

    protected abstract mapReduce(): void;


}