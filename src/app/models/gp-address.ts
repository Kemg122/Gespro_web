import {GpEmployee} from './gp-employee';
import {GpOrganization} from './gp-organization';

export interface GpAddress {
  id?: number;
  country?: string;
  streetLabel?: string;
  isMain?: boolean;
  streetNumber?: number;
  zipCode?: number;
  gpEmployee?: GpEmployee;
  gpOrganization?: GpOrganization;
}
