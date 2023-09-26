const validAnagram = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) {
    return false;
  }

  if (str1.length === 0 && str2.length === 0) {
    return true;
  }

  /*
   // Pseudocode
    make an object to store each char count
    loop over str1
        // check if char is in key of obj, add plus one
        // else add one
    loop over str2
        // check if char is in key of obj, substract one 
        // else return false 
    */

  const charCountObj: { [key: string]: number } = {};
  for (const char of str1) {
    if (charCountObj[char]) {
      charCountObj[char] += 1;
    } else {
      charCountObj[char] = 1;
    }
  }

  for (const char of str2) {
    if (charCountObj[char]) {
      charCountObj[char] -= 1;
    } else {
      return false;
    }
  }
  return true;
};

// Space and time complexity is O(n)

export default validAnagram;
