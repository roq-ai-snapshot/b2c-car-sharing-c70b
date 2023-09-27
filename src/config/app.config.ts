interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: [
    'Owner',
    'Fleet Manager',
    'Admin',
    'Business Owner',
    'Operations Manager',
    'Operations Staff',
    'Customer Service Representative',
    'End Customer',
  ],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read company information',
    'Read car details',
    'Read booking information',
  ],
  ownerAbilities: [
    'Manage users',
    'Manage companies',
    'Manage cars',
    'Manage bookings',
    'Manage dashboards',
    'Manage operations',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/152b22ea-eea2-42fe-bbd8-0f9af8998cbd',
};
