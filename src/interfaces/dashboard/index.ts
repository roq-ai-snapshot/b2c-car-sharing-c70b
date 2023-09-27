import { OperationInterface } from 'interfaces/operation';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface DashboardInterface {
  id?: string;
  name: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  operation?: OperationInterface[];
  company?: CompanyInterface;
  _count?: {
    operation?: number;
  };
}

export interface DashboardGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  company_id?: string;
}
