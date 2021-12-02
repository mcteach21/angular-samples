import { Exchange } from './exchange';

export class Rate {
    base?: string;
    success?: boolean;
    timestamp?: number;
    password?: string;
    date?: Date;
    rates? : Array<Exchange>;

    toString = () : string => {
       return this.base+' '+this.rates;
    }
}
