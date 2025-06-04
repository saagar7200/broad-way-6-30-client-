import Image from 'next/image';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export interface DropzoneInputProps {
  value: File[];
  onChange: (files: File[]) => void;
  error?: string;
}

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const MAX_FILES = 3;

const DropzoneInput: React.FC<DropzoneInputProps> = ({ value = [], onChange, error }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const validFiles = acceptedFiles.filter(file => file.size <= MAX_FILE_SIZE);
      const combinedFiles = [...value, ...validFiles].slice(0, MAX_FILES);
      onChange(combinedFiles);
    },
    [value, onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    maxSize: MAX_FILE_SIZE,
    multiple: true,
  });

  const removeFile = (index: number) => {
    const newFiles = [...value];
    newFiles.splice(index, 1);
    onChange(newFiles);
  };

  return (
    <div>
      <div
        {...getRootProps()}
        className={`border border-dashed p-6 rounded-md cursor-pointer transition-all ${
          isDragActive ? 'bg-blue-100 border-blue-400' : 'bg-white border-gray-300'
        }
        ${error ? 'border-red-500' : ''}  
      `}
      >
        <input {...getInputProps()} />
        <p className="text-sm text-gray-600 text-center">
          Drag & drop up to 3 images (max 5MB each), or click to select
        </p>
      </div>

      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}

      {value.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-4">
          {value.map((file, idx) => (
            <div key={idx} className="relative w-24 h-24 border rounded overflow-hidden">
              <Image
              height={200}
              width={200}
                src={URL.createObjectURL(file)}
                alt={`preview-${idx}`}
                className="object-cover w-full h-full"
              />
              <button
                type="button"
                onClick={() => removeFile(idx)}
                className="absolute top-0 right-0 bg-red-500 text-white rounded-bl px-1 py-0.5 text-xs"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropzoneInput;
