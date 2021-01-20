import {Message} from './Message';
import { Style } from './Style';

export class AgentMessage extends Message {

    constructor (
        private firstName : string,
        private lastName : string,
        private area : string,
        private text: string,

        private style: Style,
        
        ){

        super();

    }

    public getInfo(): string {

        return this.firstName + " " + this.lastName + " who is in " + this.area + " area, said: " + this.text;
    }

    public getStyle(): {} {

        return this.style.getStyle();
    }

}