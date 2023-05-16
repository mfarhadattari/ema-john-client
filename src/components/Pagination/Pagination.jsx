const Pagination = ({ handelProductPerPage, pages, handelPageNumber }) => {
  const options = [6, 12, 18];

  const paginationArray = [];
  for (let i = 0; i < pages; i++) {
    paginationArray.push(i);
  }

  return (
    <div className="w-fit mx-auto my-10">
      <div className="flex gap-10">
        <div className="btn-group space-x-2">
          {paginationArray.map((number) => {
            return (
              <button
                key={number}
                className="btn"
                onClick={() => handelPageNumber(number)}
              >
                {number + 1}
              </button>
            );
          })}
        </div>
        <div>
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={handelProductPerPage}
            defaultValue={12}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
