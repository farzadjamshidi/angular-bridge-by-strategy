import { Style } from './Style';

export class DashedStyle extends Style {

    
    public getStyle(): {} {

        return {
            "border" : "4px dashed blue",
            "border-radius": "20px",

            "width" : "fit-content",
            "margin": "30px",
            "padding": "30px"
        }
    }



}