import { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import SearchLogo from '@/shared/assets/icons/search.svg';
import './SearchInput.css';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  //на случай если потребуется расширить интерфейс, добавить логику
}

const SearchInput = ({ className, ...otherProps }: SearchInputProps) => {
  return (
    <div
      className={twMerge(
        'search_input w-full max-w-[350px] rounded-lg border-2 border-transparent',
        className
      )}
      {...otherProps}
    >
      <div className="flex items-center justify-between gap-2 px-4 py-2">
        <input
          className="z-10 w-full outline-none"
          placeholder="Найти питомца..."
          {...otherProps}
        />
        <SearchLogo />
      </div>
    </div>
  );
};

export default SearchInput;
