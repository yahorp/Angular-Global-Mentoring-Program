import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './pages/course/components/footer/footer.component';
import { HeaderComponent } from './pages/course/components/header/header.component';
import { NavigationComponent } from './pages/course/components/navigation/navigation.component';
import { FakeLogoComponent } from './pages/course/components/fake-logo/fake-logo.component';
import { AvailableCoursesComponent } from './pages/course/components/available-courses/available-courses.component';
import { SearchComponent } from './pages/course/components/search/search.component';
import { AddCourseButtonComponent } from './pages/course/components/add-course-button/add-course-button.component';
import { MainContentWrapperComponent } from './pages/course/components/main-content-wrapper/main-content-wrapper.component';

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
