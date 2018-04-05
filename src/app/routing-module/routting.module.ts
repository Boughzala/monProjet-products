import { NgModule } from '@angular/core';
import { RouterModule , Route} from '@angular/router';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';



const rootes: Route[] = [
  {path : 'welcome', component : WelcomeComponent},
  {path : 'list', component : ProductListComponent},
  {path : '', component : WelcomeComponent, pathMatch: 'full'},
  {path : '**', component : NotFoundComponent},

];

@NgModule({
  declarations: [  ],
  imports: [ RouterModule.forRoot(rootes) ],
  exports: [RouterModule],
  providers: [],
  bootstrap: []
})
export class RoutingModule { }
