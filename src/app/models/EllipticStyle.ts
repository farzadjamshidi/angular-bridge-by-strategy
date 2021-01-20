import { Style } from './Style';

export class EllipticStyle extends Style {

    
    public getStyle(): {} {

        return {
            "border" : "4px solid green",
            "border-radius": "50%",

            "width" : "fit-content",
            "margin": "30px",
            "padding": "30px"
        }
    }



}