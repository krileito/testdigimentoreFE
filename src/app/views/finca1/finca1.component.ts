import { Component, OnInit } from '@angular/core';
//import { DatePipe } from "@angular/common";
import {MyserviceService} from './../../myservice.service';
//import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-finca1',
  templateUrl: './finca1.component.html',
  styleUrls: ['./finca1.component.css']
})
export class Finca1Component implements OnInit {

//fincadata : any;
date = Date;

public fincadata = { finc_cod_finc:'',
finc_nom_finc: '',
finc_dir_finc :'',
finc_ema_finc:'',
finc_tlf_finc:'',
finc_fec_inic: '',
finc_nom_respo:''};
  //dia : Date;
  listFinca       : any;
  listEmpl        : any;
  // dateLength = 10;
   //public today = new Date().toISOString().substring(0, this.dateLength);
  //public today = new Date().getDay();
  //fecha :today;
 //BirthDate:Date;
   //today: Date;
   
   
  constructor(private myservicio:MyserviceService) { 
    
    
  }

  ngOnInit(): void { 
    //this.fincadata.finc_fec_inic = new Date();
    this.mostrarEmpl();
  }

  mostrarFincas(){
    this.myservicio.mostarFinca().subscribe(
     (response)=>{
       if (response) {
       this.listFinca = response.data;
       } else {
         alert("no Existen datos");
       }
     },
     error=>{
     console.log(JSON.stringify(error));
     }
   )
  }

  mostrarEmpl(){
    this.myservicio.mostrarEmpl().subscribe(
     (response)=>{
       if (response) {
        this.listEmpl = response;
         console.log("esta aqui",this.listEmpl);
       } else {
         alert("no existen datos");
        // console.log("no hay datos");
       }
      
     },
     error=>{
     console.log(JSON.stringify(error));
     }
   )
  }

guardar(){

}

}
