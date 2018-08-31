import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CountriesListComponent } from './countries-list/countries-list.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component'

const appRoutes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "countriesList", component: CountriesListComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    {path: "**",component:PageNotFoundComponent}

];

const appRouter = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [appRouter]
})
export class AppRoutingModule {}




