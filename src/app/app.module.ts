import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { PhotographDetailsComponent } from './photograph-details/photograph-details.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FilterByCountyPipe } from './filter-by-county.pipe';
import { FilterByLocationPipe } from './filter-by-location.pipe';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'photographs/:photographId', component: PhotographDetailsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    NavigationComponent,
    TopBarComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    PhotographDetailsComponent,
    SideBarComponent,
    FilterByCountyPipe,
    FilterByLocationPipe,
    ContactPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
