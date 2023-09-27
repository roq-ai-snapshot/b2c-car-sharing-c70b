import { DashboardInterface } from 'interfaces/dashboard';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OperationInterface {
  id?: string;
  name: string;
  status: string;
  start_time: any;
  end_time: any;
  dashboard_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  dashboard?: DashboardInterface;
  user?: UserInterface;
  _count?: {};
}

export interface OperationGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  status?: string;
  dashboard_id?: string;
  user_id?: string;
}
