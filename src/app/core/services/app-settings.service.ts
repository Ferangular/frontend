import {inject, Injectable} from '@angular/core';
import {AppSettings} from "../interfaces/app-settings.interface";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";
import {JSON_FILE} from "../constants/constans";

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  static settings: AppSettings;
  readonly  http = inject(HttpClient);
  load(): Observable<AppSettings> {
    return this.http.get<AppSettings>(JSON_FILE).pipe(
      tap((response) => {
        AppSettingsService.settings = response;
        console.log(AppSettingsService.settings);
      }),
      catchError((error) => {
        throw error;
      }),
    );
  }

  get<Result>(projector: (settings: AppSettings) => Result): Result | null {
    if (AppSettingsService.settings) {
      return projector(AppSettingsService.settings);
    } else {
      console.error('Settings are not loaded yet');
      return null;
    }
  }
}
