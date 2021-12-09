import { Component, OnInit,ViewChild } from '@angular/core';
import { MyserviceService } from './../../myservice.service';
import { Router, ActivatedRoute } from '@angular/router';
//import {ModalDirective} from 'ngx-bootstrap/modal';
// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';
//import { ModalsComponent } from './modals.component';
//import {MapInfoWindow, MapMarker} from '@angular/google-maps';
@Component({
  //selector: 'app-formulario',
  templateUrl: './formularioco.component.html',
  //styleUrls: ['./formulario.component.css']
})
export class FormulariocoComponent implements OnInit {
  @ViewChild('myModalDatos') public myModalDatos: ModalModule;
  // @ViewChild('largeModal') public largeModal: ModalDirective;
  // @ViewChild('smallModal') public smallModal: ModalDirective;
  // @ViewChild('primaryModal') public primaryModal: ModalDirective;
  // @ViewChild('successModal') public successModal: ModalDirective;
  // @ViewChild('warningModal') public warningModal: ModalDirective;
  // @ViewChild('dangerModal') public dangerModal: ModalDirective;
  // @ViewChild('infoModal') public infoModal: ModalDirective;
  lsitprod : any;
  public credential = { id:'',nombre: '',marca :'',descripcion:'',precio:'' };
  public credential1 = { nombre: '',marca :'',descripcion:'',precio:'' };
  placeholder = 'Angular';

  title = 'Como usar el Componente Google Maps de Angular 9'; 
 
  // Configuración de Google Maps 
  center = {lat: 24, lng: 12};
  zoom = 15;
  display?: google.maps.LatLngLiteral;
  constructor(private servicio:MyserviceService,private router : Router) { }

  ngOnInit() {
    this.mostar();
  }

  mostar()
  {
    this.servicio.mostar().subscribe(
      (response)=>{
        this.lsitprod = response.data,
        console.log(response.data,'la lista');
      },
      error=>{
        console.log(JSON.stringify(error));
      }
    );
  }


  datos(id,marca,nombre,descripcion,precio){
    console.log('el dato ',nombre);
    this.credential.id =id ;
    this.credential.nombre =nombre ;
    this.credential.marca =marca ;
    this.credential.descripcion =descripcion ;
    this.credential.precio =precio ;
    
  }
  
  updateDatos(id){
    this.servicio.updateDatos(id,this.credential).subscribe(response=>{
      this.mostar();
    },
    error=>{
      console.log(JSON.stringify(error));
      
    })
  }


  guardar(){
    this.servicio.guardarProd(this.credential1).subscribe(response=>{
      this.mostar();
    },
    error=>{
      console.log(JSON.stringify(error)); 
    })
  }

  borrar(id){
    this.servicio.deteleDatos(id).subscribe(response=>{
      this.mostar();
    },
    error=>{
      console.log(JSON.stringify(error)); 
    })
  }

}
