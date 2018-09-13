import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../shared/services/app.ajax.service'
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  constructor(private ajaxService:AjaxService){}
  filteredArr:any;////filtered Array that is displayed
  originalArr:any;///unfilteredVersion
  inputStr:string;/////used for the text input
  nameFilter=(x:any):boolean=>{return x.name.startsWith(this.inputStr)};///name filter for the input string

  funcParam:(y:any)=>void;

  filter():void{/////filters the array on a key up or backspace!
    this.inputStr=this.inputStr.charAt(0).toUpperCase()+this.inputStr.slice(1);///sets the input first letter to uppercase

    if(this.inputStr==""){
    this.filteredArr=this.originalArr;
    return;
  }
    this.filteredArr=this.originalArr.filter(this.nameFilter);
  }

  ngOnInit(){
    this.funcParam=(x:any):void => {this.filteredArr=x};
    this.ajaxService.getPerson(this.funcParam);
    this.funcParam=(x:any):void => {this.originalArr=x};
    this.ajaxService.getPerson(this.funcParam);
}
}
