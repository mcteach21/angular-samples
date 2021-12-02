export class Exchange {

	USD?: number;
	ALL?: number;
	AED?: number;
	AFN?: number;
	AMD?: number;
	ANG?: number;
	AOA?: number;

 	toString = () : string => {
       return this.AED+' '+this.ALL;
    }
}
