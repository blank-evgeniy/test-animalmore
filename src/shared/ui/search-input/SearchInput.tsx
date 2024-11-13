import { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import searchLogo from '@/shared/assets/icons/search.svg';
import Image from 'next/image';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  //на случай если потребуется расширить интерфейс, добавить логику
}

const SearchInput = ({ className, ...otherProps }: SearchInputProps) => {
  return (
    <div
      className={twMerge('rounded-lg border-2 border-pink', className)}
      {...otherProps}
    >
      <div className="flex justify-between gap-2 px-4 py-2">
        <input
          className="outline-none"
          placeholder="Найти питомца..."
          {...otherProps}
        />
        <Image src={searchLogo} alt="поиск" />
      </div>
    </div>
  );
};

export default SearchInput;
