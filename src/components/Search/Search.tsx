import { Search } from '../SearchBar/Searchbar';

import React, { FC } from 'react';

interface SearchBarProps {
  setOpenCreateMeet: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar: FC<SearchBarProps> = ({ setOpenCreateMeet }) => {

  // const [container, setContainer] = useState<HTMLElement | null>(null);

  // useEffect(() => {
  //   // Check if the target container exists
  //   const mainElement = document.querySelector('main');
  //   if (mainElement) {
  //     setContainer(mainElement);
  //   } else {
  //     console.error('Target container not found');
  //   }
  // }, []);

  // if (!container) return null;


  return (
    <div className="z-[99999] absolute top-64 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="relative flex flex-col items-start bg-white w-[539px]  p-[5px] rounded-xl shadow-[0px_44px_85px_0px_rgba(72,66,60,0.12)]">
        <Search/>
      </div>
    </div>
  );
};

export default SearchBar;
