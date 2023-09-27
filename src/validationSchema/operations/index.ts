import * as yup from 'yup';

export const operationValidationSchema = yup.object().shape({
  name: yup.string().required(),
  status: yup.string().required(),
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  dashboard_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
