import {Message} from './Message';
import { Style } from './Style';

export class TradeMessage extends Message {

    constructor (
        private firstName : string,
        private lastName : string,
        private grade : number,
        private text: string,

        private style: Style

        ){
            
        super();

    }

    public getInfo(): string {

        return this.firstName + " " + this.lastName + " who has grade of " + this.grade + ", said: " + this.text;
    }

    public getStyle(): {} {

        return this.style.getStyle();
    }

}