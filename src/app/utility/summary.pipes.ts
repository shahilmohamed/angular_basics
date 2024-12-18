import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'summary'
})
export class SummaryPipe implements PipeTransform
{
    transform(value: any ) {
        let temp = (<string> value);
        return (temp.substring(0,15)+"...");

    }

}