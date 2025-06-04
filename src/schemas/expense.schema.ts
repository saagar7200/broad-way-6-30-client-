import * as yup from 'yup';

export const expenseSchema = yup.object().shape({
  title: yup
    .string()
    .required('Title is required')
    .min(2, 'Title must be at least 2 characters'),

  amount: yup
    .number()
    .typeError('Amount must be a number')
    .required('Amount is required')
    .positive('Amount must be a positive number'),

  category: yup
    .mixed()
    .test('is-category-valid', 'Category is invalid', function (value) {
      if (typeof value === 'string') return !!value.trim();
      if (typeof value === 'object' && value !== null) {
        return 'label' in value && 'value' in value;
      }
      return false;
    })
    .required('Category is required'),

  receipts: yup
    .array()
    .of(
      yup
        .mixed()
        .test('is-valid-file-or-image', 'Invalid file or image object', function (value) {
          // Accept if it's a File (upload) or has public_id and path (IImage)
          const isFile = value instanceof File
        //   @ts-expect-error // IImage type object 
          const isIImage = typeof value === 'object' && value?.public_id && value?.path;
          return isFile || isIImage;
        })
    )
    .notRequired(),

    description: yup
    .string()
    .transform(value => (value === '' ? undefined : value))
    .notRequired()
    .min(5, 'Description must be at least 5 characters'),

  date: yup
    .string()
    .required('Date is required')
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'),
});
