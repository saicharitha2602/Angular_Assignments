import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { FourthComponentComponent } from './fourth-component/fourth-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';

const routes: Routes = [
  { path: 'first', component: FirstComponentComponent},
    {path:'second',component:SecondComponentComponent},
{path:'third',component:ThirdComponentComponent},
{path:'fourth',component:FourthComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
