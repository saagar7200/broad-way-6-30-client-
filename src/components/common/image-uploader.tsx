/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Controller } from 'react-hook-form';
import DropzoneInput from './file-drop-zone';
import { LuAsterisk } from 'react-icons/lu';



interface IProps {
    control:any
    error?:string
    label:string
    required?:boolean
    name:string
}

const ImageUploadController: React.FC<IProps> = ({control,error,label,name,required}) => {
  

  return (
     <div>
        <div className='flex mb-1'>
            <label htmlFor={name} className='text-lg font-semibold'>{label}</label>
            {required && <LuAsterisk className='text-red-500 mt-1'/>}
        </div>
         <Controller
        name={name}
        control={control}
        rules={{
          validate: files => {
            // if (!files || files.length === 0) return 'At least one image is required';
            if (files.length > 3) return 'You can only upload up to 3 images';
            if (files.some((file:any) => file.size > 5 * 1024 * 1024)) return 'Each image must be less than 5MB';
            return true;
          },
        }}
        render={({ field }) => (
          <DropzoneInput
            value={field.value}
            onChange={field.onChange}
            error={error}
          />
        )}
      />
     </div>

      
  );
};

export default ImageUploadController;
