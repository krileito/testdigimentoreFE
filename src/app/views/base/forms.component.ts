import { Component } from '@angular/core';

@Component({
  templateUrl: 'forms.component.html'
})
export class FormsComponent {
  // items = [
  //   {id: 1, name: 'Python'},
  //   {id: 2, name: 'Node Js'},
  //   {id: 3, name: 'Java'},
  //   {id: 4, name: 'PHP', disabled: true},
  //   {id: 5, name: 'Django'},
  //   {id: 6, name: 'Angular'},
  //   {id: 7, name: 'Vue'},
  //   {id: 8, name: 'ReactJs'},
  // ];
  // selected = [
  //   {id: 2, name: 'Node Js'},
  //   {id: 8, name: 'ReactJs'}
  // ];
  constructor() { }

  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }

}
