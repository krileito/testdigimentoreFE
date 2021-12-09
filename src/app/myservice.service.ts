import { Injectable,Output,EventEmitter} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  redirectUrl: string;
  baseUrlLaravel:string = "http://localhost:8000/login";
  baseUrlLogout:string = "http://localhost:8000/logout";


  
  constructor(private http:HttpClient) { }
data :any;

data_rol :any;
  mostar():Observable<any>{
    console.log("has algo");
    return this.http.get("http://localhost:8000/productos");
  }

  mostarClientes():Observable<any>{
    console.log("has algo");
    return this.http.get("http://localhost:8000/clientes");
  }

//para test 
  mostarRoles():Observable<any>{
    return this.http.get("http://localhost:8000/roles");
  }

  mostarUsuarios():Observable<any>{
    return this.http.get("http://localhost:8000/allusuarios");
  }

  mostarEstudiantes():Observable<any>{
    return this.http.get("http://localhost:8000/allestudiantes");
  }

  mostarProfesores():Observable<any>{
    return this.http.get("http://localhost:8000/allprofesores");
  }

  guardarRoles(usuarios:any,seleccionado:any){
    const data_rol = {usuarios:usuarios,seleccionado:seleccionado};
    return this.http.post<any>("http://localhost:8000/usuario", data_rol)
          .pipe(map(response => 
            {
             console.log(response,"respuesta");
          }));
  }


  updateUsuario(id,usuario:any,seleccion:any){
    const datos_usuario ={usuario:usuario,seleccion:seleccion}
    return this.http.post<any>("http://localhost:8000/update_usuario/"+id,datos_usuario)
          .pipe(map(response => 
            {
             console.log(response,"respuesta");
          }));
  }


  updateEstudiante(id_estu,estudiante:any){
    
    return this.http.post<any>("http://localhost:8000/update_estudiante/"+id_estu,estudiante)
          .pipe(map(response => 
            {
             console.log(response,"respuesta");
          }));
  }

  updateProfesor(id_estu,profesor:any){
    
    return this.http.post<any>("http://localhost:8000/update_profesor/"+id_estu,profesor)
          .pipe(map(response => 
            {
             console.log(response,"respuesta");
          }));
  }

  deteleUsuario(id){
    return this.http.delete<any>("http://localhost:8000/delete_usuario/"+id)
          .pipe(map(response => 
            {
             console.log(response,"ELIMINADO...!");
          }));
  }

  deteleProfesor(id){
    return this.http.delete<any>("http://localhost:8000/delete_profesor/"+id)
          .pipe(map(response => 
            {
             console.log(response,"ELIMINADO...!");
          }));
  }

  //ESTUDIANTES 
    guardarEstudiante(estudiante:any){
    //const data_rol = {usuarios:usuarios,seleccionado:seleccionado};
    return this.http.post<any>("http://localhost:8000/estudiante", estudiante)
          .pipe(map(response => 
            {
             console.log(response,"respuesta");
          }));
    }

  //

  //PROFESORES
  guardarProfesor(profesor:any){
    //const data_rol = {usuarios:usuarios,seleccionado:seleccionado};
    return this.http.post<any>("http://localhost:8000/profesor", profesor)
          .pipe(map(response => 
            {
             console.log(response,"respuesta");
          }));
    }
  //


  guardarNotas(notas:any){
    //const data_rol = {usuarios:usuarios,seleccionado:seleccionado};
    return this.http.post<any>("http://localhost:8000/notas", notas)
          .pipe(map(response => 
            {
             console.log(response,"respuesta");
          }));
    }


    searchNota(id){
      console.log(id,'aqui');
      const data_rol = {id:id};
      return this.http.post<any>("http://localhost:8000/search_estu/",data_rol)
            .pipe(map(response => 
              {
               //console.log(response,"encontrado...!");
               return response;
            }));
    //   this.http.post<any>("http://localhost:8000/search_estu/",data_rol).subscribe(data => {
    // });
    }
//fin para test 



  guardarProd(producto:any){
    return this.http.post<any>("http://localhost:8000/productos", producto)
          .pipe(map(response => 
            {
             console.log(response,"respuesta");
          }));
  }
  
  updateDatos(id,producto:any){
    return this.http.post<any>("http://localhost:8000/productos/"+id,producto)
          .pipe(map(response => 
            {
             console.log(response,"respuesta");
          }));
  }
  
  deteleDatos(id){
    return this.http.delete<any>("http://localhost:8000/productos/"+id)
          .pipe(map(response => 
            {
             console.log(response,"ELIMINADO...!");
          }));
  }
  

  // searchDatos(id){
  //   return this.http.get<any>("http://localhost:8000/productosbusca/"+id)
  //         .pipe(map(response => 
  //           {
  //            console.log(response,"respuesta");
  //         }));
  // }

  searchDatos(id):Observable<any>{
    console.log("has algo");
    return this.http.get("http://localhost:8000/productosbusca/"+id);
  }

  mostarFinca():Observable<any>{
    console.log("has algo");
    this.data={};
    return this.http.post("http://186.69.3.180:8085/agricolap/framework/configuracion/get_finca",this.data);
  }
  mostrarEmpl():Observable<any>{
    this.data={};
    return this.http.post("http://186.69.3.180:8085/agricolap/framework/configuracion/get_supervisor",this.data);
  }

  //LARAVEL LUMEN
    getLogin(email: string,usuario_password:string) {
      const data1 = {email:email,usuario_password:usuario_password};
      return this.http.post<any>(this.baseUrlLaravel, data1)
          .pipe(map(Usermodule => 
            {
              console.log(Usermodule,'Usermodule');
              if(Usermodule.res==true){
                this.setToken(Usermodule.token);
                this.setEmail(email);
                this.setidRol(Usermodule.idrol);
                this.setRol(Usermodule.name_rol);
                this.setMIToken(Usermodule.usuario_password);
              return Usermodule;
              }else{
                return false;
              }
            
     }));
    }
  //token
  setMIToken(token: string) {
    localStorage.setItem('token nuevo','krileito@hotmail.com');
    console.log("el token nuevo",token);
  }


  setToken(token: string) {
    localStorage.setItem('token', token);
    console.log("el token",token);
  }
  setEmail(email: string) {
    localStorage.setItem('email', email);
    console.log("el token",email);
  }

  setidRol(rol: string) {
    localStorage.setItem('rol', rol);
    console.log("el rol",rol);
  }

  setRol(rolname: string) {
    localStorage.setItem('rolname', rolname);
    console.log("el rolname",rolname);
  }

  getToken() {
    return localStorage.getItem('token');
  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }
  deleteToken(email:string):Observable<any>{
    console.log("has algo");
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    return this.http.post(this.baseUrlLogout,{email});
    
  }
}
