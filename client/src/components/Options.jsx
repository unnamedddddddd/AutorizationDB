const Option = ({ onSortAZ, onSortZA, onSortTime  }) => {
  return (
    <>
      <select onChange={(e) => {
        if (e.target.value === 'az') onSortAZ();
        if (e.target.value === 'za') onSortZA();
        if (e.target.value === 'time') onSortTime();
      }}>
        <option value="az">А-Я</option>
        <option value="za">Я-А</option>
        <option value="time">По времени</option>
      </select>    
    </>
  );
};

export default Option;