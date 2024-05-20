import React, { useContext } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { context } from "../../context/ContextProvider";
import { useNavigate } from "react-router-dom";

const Search = ({smScreen}) => {
  const {setSourceSearch, setCategorySearch,setQuery,setCategory,setAuthor,setSource,search, setSearch,showXmark, setShowXmark,setDate} = useContext(context)
  const navigate = useNavigate()


  const searchNews = () => {
    if (search) {
      setShowXmark(true);
      setCategory("")
      setSource("")
      setAuthor("")
      setCategorySearch('')
      setSourceSearch('')
      setQuery(search)
      navigate('/search')
    }
  };
  const handleEnterKeyDown = (e) => {
    if (e.key === "Enter") {
      searchNews();
    } else if (e.key === "Escape") {
      onClickXmarkIcon();
    }
  };
  const onClickXmarkIcon = () => {
    setQuery("")
    setSearch("");
    setDate('')
    setShowXmark(false);
    setCategorySearch('')
      setSourceSearch('')
    navigate('/')

  };

  return (
    <div className={`md:flex ${smScreen?smScreen:'hidden'} justify-between bg-background-primary rounded-md ${!smScreen&&'border'} border-slate-400 items-center py-1 px-4`}>
      <div className="flex gap-1 items-center">
        <MagnifyingGlassIcon className="text-slate-500 w-6 h-6 p-1" />
        <input
          className="input-primary"
          type="text"
          placeholder="Search here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => handleEnterKeyDown(e)}
          readOnly={showXmark}
        />
      </div>
      {showXmark && (
        <XMarkIcon
        title="ESC"
          onClick={() => onClickXmarkIcon()}
          className="text-primary w-6 h-6 p-1 cursor-pointer hover:text-border"
        />
      )}
      {search && !showXmark && (
        <span
        title="Enter"
          onClick={() => searchNews()}
          className="text-sm font-normal px-1.5 text-slate-600 cursor-pointer"
        >
          Search
        </span>
      )}
    </div>
  );
};

export default Search;