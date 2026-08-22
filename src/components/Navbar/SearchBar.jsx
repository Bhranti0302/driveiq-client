import searchIcon from "../../assets/icons/Search_Magnifying_Glass.svg";

const SearchBar = () => {
  return (
    <div className="relative w-full lg:w-48">
      <img
        src={searchIcon}
        alt="Search Icon"
        className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2"
      />

      <input
        type="text"
        placeholder="Search..."
        className="w-full rounded-lg border border-gray-300 py-2 pl-4 pr-10 outline-none lg"
      />
    </div>
  );
};

export default SearchBar;
