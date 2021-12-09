import { Component, OnInit,ViewChild } from '@angular/core';
import {MyserviceService} from './../../myservice.service';
//import {pedido} from './../pedido1/pedido';
import { NgOption,NgSelectModule } from '@ng-select/ng-select';
import {ViewEncapsulation} from '@angular/core';
import {clie} from './../pedido1/pedido';

@Component({
  selector: 'app-pedido1',
  templateUrl: './pedido1.component.html',
  styleUrls: ['./pedido1.component.css']
})
export class Pedido1Component implements OnInit {
listprod          : any;
listsearch        : string;
listclientes      : any;
seleccionado      : any;
Datos             :any;
datos1 ;
listFinca         :any;
// Seleccionamos o iniciamos el valor '0' del <select>
opcionSeleccionado: string  = '0';
verSeleccion: string        = '';

public datos: clie={id_cliente:0,apellidos_nombres:''}

private options: string[] = ["10", "20", "50"];
selectedQuantity = "10";

items = [
  {id: 1, name: 'Python'},
  {id: 2, name: 'Node Js'},
  {id: 3, name: 'Java'},
  {id: 4, name: 'PHP', disabled: true},
  {id: 5, name: 'Django'},
  {id: 6, name: 'Angular'},
  {id: 7, name: 'Vue'},
  {id: 8, name: 'ReactJs'},
];
selected = [
  {id: 2, name: 'Node Js'},
  {id: 8, name: 'ReactJs'}
];
lista:string[]=["hola","que","tal", "estas"];

  constructor(private myservicio:MyserviceService) {
    this.datos1 = [1,2,3,4,5,6,7,8,9,10];
   }

  ngOnInit(): void {
    this.mostrar();
    this.mostrarClientes();
    this.mostrarFinca();
  }


  mostrarClientes(){
    this.myservicio.mostarClientes().subscribe(
     (response)=>{
       this.listclientes = response.data;
     },
     error=>{
     console.log(JSON.stringify(error));
     }
   )
  }


mostrar(){
   this.myservicio.mostar().subscribe(
    (response)=>{
      console.log("que v",response);
      
      this.listprod = response.data;
      console.log("prod",this.listprod);
      
    },
    error=>{
    console.log(JSON.stringify(error));
    }
  )
}


mico(e) {
  console.log("que trae",e);
  //console.log("que trae", JSON.stringify(e));
  //this.seleccionado =  e;
}


capturar1() {
  // Pasamos el valor seleccionado a la variable verSeleccion
  this.verSeleccion = this.opcionSeleccionado;
  console.log("la nueva",this.verSeleccion);
  
}


searchDatos(id){
  this.myservicio.searchDatos(id).subscribe(
    (response1)=>{
   // this.mostar();
   this.listsearch = response1.data;
   
  },
  error=>{
    console.log(JSON.stringify(error));
    
  })
}

mostrarFinca(){
  this.myservicio.mostarFinca().subscribe(response=>{
    console.log("los datos de la finca",response);
    
  },
  error=>{
    console.log(JSON.stringify(error)); 
  })
}








// mostar()
//   {
//     this.servicio.mostar().subscribe(
//       (response)=>{
//         this.lsitprod = response.data,
//         console.log(response.data,'la lista');
//       },
//       error=>{
//         console.log(JSON.stringify(error));
//       }
//     );
//   }



}
