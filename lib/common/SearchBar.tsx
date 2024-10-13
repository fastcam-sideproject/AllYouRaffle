'use client';

import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';

const SearchBar = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => {
    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
      if (props.onChange) {
        props.onChange(event);
      }
    };

    const handleClear = () => {
      setValue('');
      if (props.onChange) {
        props.onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
      }
    };

    return (
      <div className={`relative flex items-center ${props.className || 'w-full'}`}>
        <div className="p-4 absolute left-1">
          <Search className="h-5 w-6" />
        </div>
        <Input
          {...props}
          ref={ref}
          value={value}
          onChange={handleChange}
          className="h-[50px] rounded-xl"
          placeholder={props.placeholder || 'Searchbar'}
        />
        {value && (
          <button
            onClick={handleClear}
            className="absolute right-3 rounded-full hover:bg-slate-100"
            type="button"
          >
            <div className="p-2">
              <X className="h-5 w-6" />
            </div>
          </button>
        )}
      </div>
    );
  },
);

SearchBar.displayName = 'SearchBar';

export { SearchBar };
