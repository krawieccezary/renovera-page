import React from 'react';

const useDate = date => {
  const d = new Date(date);
  const months = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];
  const year = d.getFullYear();
  const month = months[d.getMonth()];
  const day = d.getDate();

  return `${day} ${month} ${year}`;
}

export default useDate;