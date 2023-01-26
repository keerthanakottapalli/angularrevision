import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import {FormsModule} from '@angular/forms';
import { ReactivesComponent } from './reactives/reactives.component'
import {ReactiveFormsModule} from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { CustompipePipe } from './pipes/custompipe.pipe';
import { DirectivesComponent } from './directives/directives.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ChildrenComponent } from './children/children.component'
import { AuthguardGuard } from './authguard.guard';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ReactivesComponent,
    PipesComponent,
    CustompipePipe,
    DirectivesComponent,
    ChildComponent,
    ParentComponent,
    ChildrenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
