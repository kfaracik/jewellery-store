// cookieUtils.js

import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const saveToCookie = (key, value) => {
  cookies.set(key, value, { path: '/' });
};

export const readFromCookie = (key) => {
  return cookies.get(key);
};

// TODO: use case
// InnyKomponent.js

// import React, { useEffect } from 'react';
// import { saveToCookie, readFromCookie } from './cookieUtils';

// const InnyKomponent = () => {
//   useEffect(() => {
//     // Zapisanie danych do pliku cookie
//     saveToCookie('exampleKey', 'exampleValue');

//     // Odczytanie danych z pliku cookie
//     const value = readFromCookie('exampleKey');
//     console.log('Value from cookie:', value);
//   }, []);

//   return (
//     <div>
//       {/* Treść komponentu */}
//     </div>
//   );
// };

// export default InnyKomponent;