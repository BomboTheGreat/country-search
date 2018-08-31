import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AjaxService{
  
    constructor(private ajaxParamService: HttpClient){}

    getPerson(callback_p: (x: any) => void): void {
        this.ajaxParamService.get("http://restcountries.eu/rest/v2/all").subscribe(callback_p);
    }

}