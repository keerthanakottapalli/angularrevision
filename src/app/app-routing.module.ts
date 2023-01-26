import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { ChildComponent } from './child/child.component';
import { ChildrenComponent } from './children/children.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';
import { ParentComponent } from './parent/parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { ReactivesComponent } from './reactives/reactives.component';

const routes: Routes = [
 
{
  path:"reactives",component:ReactivesComponent,
  children:[
    {
      path:"forms",component:FormsComponent
     }
  ]
},
{
  path:"directives",component:DirectivesComponent
},
{
  path:"children",component:ChildrenComponent
},
{
  path:"parent",component:ParentComponent
},
{
  path:"pipes",component:PipesComponent,
  canActivate: [AuthguardGuard]
},
{
  path:"child",component:ChildComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[ReactivesComponent,FormsComponent,DirectivesComponent,ChildrenComponent,ParentComponent,PipesComponent,ChildComponent]
