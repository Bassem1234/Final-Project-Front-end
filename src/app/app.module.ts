import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,Injectable } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbModule } from 'angular-crumbs';
import { NgwWowModule } from 'ngx-wow';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { Ng5SliderModule } from 'ng5-slider';
//import { NgMasonryGridModule } from 'ng-masonry-grid';
import { NiceSelectModule } from "ng-nice-select";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { HeadertwoComponent } from './components/layouts/headertwo/headertwo.component';
import { HeaderthreeComponent } from './components/layouts/headerthree/headerthree.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { BacktotopComponent } from './components/layouts/backtotop/backtotop.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { FootertwoComponent } from './components/layouts/footertwo/footertwo.component';
import { FooterthreeComponent } from './components/layouts/footerthree/footerthree.component';
import { FootercontentComponent } from './components/layouts/footercontent/footercontent.component';
import { BlogsidebarComponent } from './components/layouts/blogsidebar/blogsidebar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HometwoComponent } from './components/pages/hometwo/hometwo.component';
import { HomethreeComponent } from './components/pages/homethree/homethree.component';
import { AboutComponent } from './components/pages/about/about.component';
import { BloggridComponent } from './components/pages/bloggrid/bloggrid.component';
import { BloglistComponent } from './components/pages/bloglist/bloglist.component';
import { BloggridtwoComponent } from './components/pages/bloggridtwo/bloggridtwo.component';
import { BlogdetailsComponent } from './components/pages/blogdetails/blogdetails.component';
import { ComingsoonComponent } from './components/pages/comingsoon/comingsoon.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { EventComponent } from './components/pages/event/event.component';
import { EventdetailsComponent } from './components/pages/eventdetails/eventdetails.component';
import { FaqsComponent } from './components/pages/faqs/faqs.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { GallerytwoComponent } from './components/pages/gallerytwo/gallerytwo.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { SchedulesComponent } from './components/pages/schedules/schedules.component';
import { SchedulestwoComponent } from './components/pages/schedulestwo/schedulestwo.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { ShopdetailsComponent } from './components/pages/shopdetails/shopdetails.component';
import { SpeakersComponent } from './components/pages/speakers/speakers.component';
import { SpeakersdetailsComponent } from './components/pages/speakersdetails/speakersdetails.component';
import { SponsorsComponent } from './components/pages/sponsors/sponsors.component';
import { MenuComponent } from './components/layouts/menu/menu.component';
import { BreadcrumbComponent } from './components/layouts/breadcrumb/breadcrumb.component';
import { SponsersComponent } from './components/layouts/sponsers/sponsers.component';
import { CounterComponent } from './components/layouts/counter/counter.component';
import { FiltereventComponent } from './components/layouts/filterevent/filterevent.component';
import { SpeakerComponent } from './components/layouts/speaker/speaker.component';
import { PaginationComponent } from './components/layouts/pagination/pagination.component';
import { MasonaryblogComponent } from './components/layouts/masonaryblog/masonaryblog.component';
import { FiltereventtwoComponent } from './components/layouts/filtereventtwo/filtereventtwo.component';
import { LoginComponent } from './login/login.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { AccountComponent } from './account/account.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchComponent } from './search/search.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderpageComponent } from './headerpage/headerpage.component';
import { MenupageComponent } from './menupage/menupage.component';
import { RegisterComponent } from './register/register.component';
import { InterceptorService } from './interceptor.service';
import { UserGuard } from './user.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NetworkInterceptor } from './network.interceptor';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@Injectable({
  providedIn:'root'
})

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeadertwoComponent,
    HeaderthreeComponent,
    PreloaderComponent,
    BacktotopComponent,
    FooterComponent,
    FootertwoComponent,
    FooterthreeComponent,
    FootercontentComponent,
    BlogsidebarComponent,
    HomeComponent,
    HometwoComponent,
    HomethreeComponent,
    AboutComponent,
    BloggridComponent,
    BloglistComponent,
    BloggridtwoComponent,
    BlogdetailsComponent,
    ComingsoonComponent,
    ContactComponent,
    EventComponent,
    EventdetailsComponent,
    FaqsComponent,
    GalleryComponent,
    GallerytwoComponent,
    PricingComponent,
    SchedulesComponent,
    SchedulestwoComponent,
    ShopComponent,
    ShopdetailsComponent,
    SpeakersComponent,
    SpeakersdetailsComponent,
    SponsorsComponent,
    MenuComponent,
    BreadcrumbComponent,
    SponsersComponent,
    CounterComponent,
    FiltereventComponent,
    SpeakerComponent,
    PaginationComponent,
    MasonaryblogComponent,
    FiltereventtwoComponent,
    LoginComponent,
    EventListComponent,
    EventDetailsComponent,
    AccountComponent,
    SearchComponent,
    HomepageComponent,
    HeaderpageComponent,
    MenupageComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    BreadcrumbModule,
    NgwWowModule,
    NgbModule,
    Ng5SliderModule,
    NiceSelectModule,
    //NgMasonryGridModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbProgressbarModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}, UserGuard,
    {provide: HTTP_INTERCEPTORS, useClass: NetworkInterceptor, multi: true}, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
