import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { TripDetailComponent } from './trip-detail/trip-detail.component';
import { API_URL } from './common/constants';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { tripsReducer } from './+state/trips.reducer';
import { TripsEffects } from './+state/trips.effects';
import { HttpClientModule } from '@angular/common/http';
import { TripEditComponent } from './trip-edit/trip-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { DateTillPipe } from './common/date-till.pipe';
import { TripDetailsEffects } from './+state/tripdetails.effects';
import { tripDetailsReducer } from './+state/tripdetails.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TripListComponent,
    TripDetailComponent,
    TripEditComponent,
    HeaderComponent,
    DateTillPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatNativeDateModule,
    MatToolbarModule,
    StoreModule.forRoot({ trips: tripsReducer}, {}),
    StoreModule.forRoot({ tripdetails: tripDetailsReducer }, {}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([TripsEffects]),
    EffectsModule.forRoot([TripDetailsEffects]),
  ],
  providers: [{ provide: API_URL, useValue: environment.apiUrl }],
  bootstrap: [AppComponent]
})
export class AppModule { }
