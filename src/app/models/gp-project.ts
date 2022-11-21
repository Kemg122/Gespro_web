import {GpPhase} from "./gp-phase";
import {GpOrganization} from "./gp-organization";
import {GpProjectManager} from "./gp-project-manager";

export interface GpProject {
  id?: number,
  amount?: number,
  creationDate?: Date,
  endDate?: Date,
  startDate?: Date,
  updateDate?: Date,
  description?: string,
  name?: string,
  projectCode?: string,
 // gpPhases?: GpPhase[],
  gpChefProjet?: GpProjectManager,
  gpOrganization?: GpOrganization,
}
