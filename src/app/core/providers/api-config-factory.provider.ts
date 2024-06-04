import {Configuration, ConfigurationParameters} from "../../proxy";
import {environment} from "../../../environments/environment";


export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    basePath: environment.basePath
  }
  return new Configuration(params);
}
