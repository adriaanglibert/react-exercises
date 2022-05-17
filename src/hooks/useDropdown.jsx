import { useState } from 'react';

const useDropdown = (defaultSelected) => {
  const [value, setValue] = useState(defaultSelected);

  const handleChange = (val) => {
    setValue(val);
  };

  return [value, handleChange];
};

export default useDropdown;
