import {Message} from './Message';
import { Style } from './Style';

export class LandlordMessage extends Message {

    constructor (
        private firstName : string,
        private lastName : string,
        private houseName : string,
        private text: string,

        private style: Style,

        ){
            super();
        
    }

    public getInfo(): string {
        
        return this.firstName + " " + this.lastName + ", landlord of " + this.houseName + ", said: " + this.text;
    }
    
    public getStyle(): {} {

        return this.style.getStyle();
    }



}