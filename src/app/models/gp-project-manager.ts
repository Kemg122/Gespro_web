import {GpEmployee} from "./gp-employee";
import {GpProject} from "./gp-project";

export interface GpProjectManager extends GpEmployee {
  gpProjects: GpProject[];
}
