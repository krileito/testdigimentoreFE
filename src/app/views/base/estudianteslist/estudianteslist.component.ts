import { Component, OnInit } from '@angular/core';
import {MyserviceService} from './../../../myservice.service';
@Component({
  selector: 'app-estudianteslist',
  templateUrl: './estudianteslist.component.html',
  styleUrls: ['./estudianteslist.component.css']
})
export class EstudianteslistComponent implements OnInit {

  listestudiantes       : any;
  public datos = { nombre_est: '' , apellido_est:'',materia_est:''};

  public credential = { id:'',nombres: '',apellidos :'',materia:'' };

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

  guardar(){
    
    this.myservicio.guardarEstudiante(this.datos).subscribe(response=>{
    this.mostrarEstudiantes();
    this.datos = { nombre_est: '' , apellido_est:'',materia_est:''};
    },
    error=>{
      console.log(JSON.stringify(error)); 
    })
  }

  datos_estudiante(id,nombres,apellidos,materia){
    console.log('el dato ',id);
    this.credential.id        = id ;
    this.credential.nombres   = nombres ;
    this.credential.apellidos = apellidos ;
    this.credential.materia   = materia ;
  }

  updateDatos(id){
    this.myservicio.updateEstudiante(id,this.credential).subscribe(response=>{
      this.mostrarEstudiantes();
    },
    error=>{
      console.log(JSON.stringify(error));
      
    })
  }
  

}
