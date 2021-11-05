import * as React from 'react';

export const Input: React.FC<{
  name: string;
  value: any;
  setValue: (value: any) => void;
}> = ({ name, value, setValue }) => {
  return (
    <div className="flex flex-col">
      <label key={name} htmlFor={name}>
        {name}
      </label>
      <input
        key={name + 'i'}
        className="text-sm bg-gray-200 "
        type="text"
        name={name}
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};
