import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../../../myservice.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-notaslist',
  templateUrl: './notaslist.component.html',
  styleUrls: ['./notaslist.component.css']
})
export class NotaslistComponent implements OnInit {

  listestudiantes       : any;

  selectedOption1: string;

  listnotas             : any;

  selectedDeviceObj = '';


  public datos = {id_estudiante:'', nombre_est: '' , apellido_est:'',nota1:'',nota2:'',nota3:'',id_rol:''};

  constructor(private myservicio:MyserviceService) { }

  ngOnInit(): void {
    this.mostrarEstudiantes();
  }

    // lista de estudiantes desde la base de datos tabla estudiantes//
    mostrarEstudiantes(){
      this.myservicio.mostarEstudiantes().subscribe(
       (response)=>{
         if (response) {
         this.listestudiantes = response.data;
         } else {
           alert("no Existen datos");
         }
       },
       error=>{
       console.log(JSON.stringify(error));
       }
     )
    }


    buscarno(id){
      this.myservicio.searchNota(id).subscribe(
       response=>{
         //if (response) {
         this.listnotas = response;
         //console.log(listnotas,'notas');
         
         //} else {
           //alert("no Existen datos");
         //}
       },
       error=>{
       console.log(JSON.stringify(error));
       }
     )
    }

    buscar(id){
      console.log(id,'here');
      
      this.myservicio.searchNota(id).subscribe(response=>{
        //this.mostrarProfesores();
        if (response) {
          this.listnotas = response;
        console.log(this.listnotas,'xfa');
        } else {
          alert("no Existen datos");
          this.listnotas = '';
        }
        
        
      },
      error=>{
        console.log(JSON.stringify(error));
        
      })
    }

    onChangeObj(newObj) {
      //console.log(newObj);
      this.selectedDeviceObj    = newObj;
      this.datos.nombre_est     = newObj.nombres;
      this.datos.apellido_est   = newObj.apellidos;
      this.datos.id_estudiante  = newObj.id;
      this.datos.id_rol         = localStorage.rol;
      // ... do other stuff here ...
    }

    guardar(){
    
      this.myservicio.guardarNotas(this.datos).subscribe(response=>{
      //this.mostrarProfesores();
      this.datos = {id_estudiante:'', nombre_est: '' , apellido_est:'',nota1:'',nota2:'',nota3:'',id_rol:''};
      },
      error=>{
        console.log(JSON.stringify(error)); 
      })
    }





}
