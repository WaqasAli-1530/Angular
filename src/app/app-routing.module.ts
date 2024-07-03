import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { StdDataComponent } from './std-data/std-data.component';
import { CountryListComponent } from './country-list/country-list.component';
import { UserDataComponent} from './user-data/user-data.component'

const routes: Routes = [
  {path:"country/:id",
  component: CountryListComponent},
  {path:"header",
  component: HeaderComponent},
  {path:"std",
  component: StdDataComponent},
  {path:"**",
  component: UserDataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
