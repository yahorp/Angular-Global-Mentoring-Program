import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './pages/home/components/footer/footer.component';
import { HeaderComponent } from './pages/home/components/header/header.component';
import { NavigationComponent } from './pages/home/components/navigation/navigation.component';
import { FakeLogoComponent } from './pages/home/components/fake-logo/fake-logo.component';
import { AvailableCoursesComponent } from './pages/home/components/available-courses/available-courses.component';
import { SearchComponent } from './pages/home/components/search/search.component';
import { AddCourseButtonComponent } from './pages/home/components/add-course-button/add-course-button.component';
import { MainContentWrapperComponent } from './pages/home/components/main-content-wrapper/main-content-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    FakeLogoComponent,
    AvailableCoursesComponent,
    SearchComponent,
    AddCourseButtonComponent,
    MainContentWrapperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
