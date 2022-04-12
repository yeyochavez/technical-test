import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    CoreModule,
  ]
})
export class DashboardModule { }
