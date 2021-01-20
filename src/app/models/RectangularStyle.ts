import { Style } from './Style';

export class RectangularStyle extends Style {

    
    public getStyle(): {} {

        return {
            "border" : "4px solid orange",
            "background-color" : "yellow",
            
            "width" : "fit-content",
            "margin": "30px",
            "padding": "30px"
        }
    }



}