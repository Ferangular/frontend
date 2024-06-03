import {APP_SETTINGS_PATH, JSON_FILE} from "../constants/constans";
import {AppSettingsService} from "../services/app-settings.service";
import {Configuration} from "../../proxy";
import {environment} from "../../../environments/environment";
import {APP_INITIALIZER} from "@angular/core";

export function CoreProvider() {
  return [
    {
      provide: APP_SETTINGS_PATH,
      useValue: JSON_FILE,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (appSettings: AppSettingsService, config: Configuration) => {
        return () => {
          // Aquí aseguramos que el método load sea una promesa
          const loadPromise = appSettings.load();

          // Aquí configuramos el basePath
          config.basePath = environment.BASE_PATH;

          // Retornamos la promesa para asegurar que APP_INITIALIZER espera a que load termine
          return loadPromise;
        };
      },
      deps: [AppSettingsService, Configuration],
      multi: true,
    },
  ];
}
