// Angular
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
// Google Maps de Angular 9 
import {GoogleMapsModule} from '@angular/google-maps'; 
import {MapInfoWindow, MapMarker} from '@angular/google-maps';
import {NgSelectModule} from '@ng-select/ng-select'

import { CardsComponent } from './cards.component';
import { FormulariocoComponent } from './formularioco.component';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalsComponent } from './../notifications/modals.component';



// Forms Component
import { FormsComponent } from './forms.component';

import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TabsComponent } from './tabs.component';

// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselsComponent } from './carousels.component';

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CollapsesComponent } from './collapses.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoversComponent } from './popovers.component';

// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';
import { PaginationsComponent } from './paginations.component';

// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ProgressComponent } from './progress.component';

// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TooltipsComponent } from './tooltips.component';

// navbars
import { NavbarsComponent } from './navbars/navbars.component';

// Components Routing
import { BaseRoutingModule } from './base-routing.module';
import { UsuarioslistComponent } from './usuarioslist.component';
import { EstudianteslistComponent } from './estudianteslist/estudianteslist.component';
import { ProfesoreslistComponent } from './profesoreslist/profesoreslist.component';
import { NotaslistComponent } from './notaslist/notaslist.component';
//import { FormBuilder, Validators } from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BaseRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    GoogleMapsModule,
    NgSelectModule,
   
   // FormBuilder
    //FormBuilder,
    //Validators
  ],
  declarations: [
    FormulariocoComponent,
    //ModalDirective,
    CardsComponent,
    FormsComponent,
    SwitchesComponent,
    TablesComponent,
    TabsComponent,
    CarouselsComponent,
    CollapsesComponent,
    PaginationsComponent,
    PopoversComponent,
    ProgressComponent,
    TooltipsComponent,
    NavbarsComponent,
    ModalsComponent,
    UsuarioslistComponent,
    EstudianteslistComponent,
    ProfesoreslistComponent,
    NotaslistComponent,
    //GoogleMapsModule
  ]
})
export class BaseModule { }
