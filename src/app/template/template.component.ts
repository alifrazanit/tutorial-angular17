import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SideNavComponent } from './side-nav/side-nav.component';


@Component({
  selector: 'app-template',
  standalone: true,
  imports: [
    MatButtonModule,
    ToolbarComponent,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    SideNavComponent
  ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {
  @ViewChild('drawer') drawerContainer!: MatSidenav;


  OpenSideMenu(e: any) {
    this.drawerContainer.toggle();
  }
}
