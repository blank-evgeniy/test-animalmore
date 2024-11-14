import { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import SearchLogo from '@/shared/assets/icons/search.svg';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  //на случай если потребуется расширить интерфейс, добавить логику
}

const SearchInput = ({ className, ...otherProps }: SearchInputProps) => {
  return (
    <div
      className={twMerge(
        'w-full max-w-[350px] rounded-lg border-2 border-pink',
        className
      )}
      {...otherProps}
    >
      <div className="flex items-center justify-between gap-2 px-4 py-2">
        <input
          className="w-full outline-none"
          placeholder="Найти питомца..."
          {...otherProps}
        />
        <SearchLogo />
      </div>
    </div>
  );
};

export default SearchInput;
