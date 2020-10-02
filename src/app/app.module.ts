/**
 * Modules.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutmeService } from './service/aboutme.service';
import { HttpClientModule } from '@angular/common/http';

/**
 * Components.
 */
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BioComponent } from './bio/bio.component';

/**
 * Material.
 */
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TitleComponent } from './title/title.component';
import { ItemComponent } from './item/item.component';
import { AboutThisPageComponent } from './about-this-page/about-this-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    AboutMeComponent,
    BioComponent,
    TitleComponent,
    ItemComponent,
    AboutThisPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [AboutmeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
