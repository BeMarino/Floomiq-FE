import React, { useState, useRef, useEffect } from 'react';
import ProductCard from "./ProductCard";
import SideCart from "./sideCart";
import { API } from '../../APIService/API';
import Spinner from '../spinner';
import SuccessDialog from '../SuccessDialog';
import LoginRequiredDialog from './LoginRequiredDialog';
import ErrorDialog from '../ErrorDialog';
import { PiPaintBrushHousehold } from "react-icons/pi";
import NewFavouriteDialog from '../newFavouriteDialog';
import FiltersColumn from './filtersColumn';
import { LuFilter } from "react-icons/lu";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import Cart from './Cart';
import SideCartProductCard from './SideCartProductCard';
import { HiFilter, HiOutlineFilter } from 'react-icons/hi';
import FiltersColumnMobile from './filtersColumnMobile';
import NewProjectDialog from './newProjectDialog';
import { FaRegFilePdf } from "react-icons/fa";
import { IoMdSearch } from 'react-icons/io';
import { BiSave } from 'react-icons/bi';
import { MdDeleteOutline } from "react-icons/md";

export default function DatabaseExplorer({ user, sideCartProductList, setSideCartProductList }) {

  const [isLoading, setIsLoading] = useState(true);
  const [loadMore, setLoadMore] = useState(true);
  const [filters, setFilters] = useState({ tag: [], obj: {} });
  const [page, setPage] = useState(1);
  const [productList, setProductList] = useState([]);
  const [showCreateProjectDialog, setShowCreateProjectDialog] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [showProjectCreated, setShowProjectCreated] = useState(false);
  const [showNewFavourite, setShowNewFavourite] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showLoginRequired, setShowLoginRequired] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputSearchValue, setInputSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [lastFavourite, setLastFavourite] = useState(null);
  const [showGoOnTop, setShowGoOnTop] = useState(false);
  const [resultCount, setResultCount] = useState(20);
  const scrollDivRef = useRef(null);
  const [openCart, setOpenCart] = useState(false)
  const [openFilter, setOpenFilter] = useState(false)


  const scrollToTop = () => {
    scrollDivRef.current.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const openCreateProjectDialog = () => {
    if (user === null) {
      setShowLoginRequired(true)
    } else {
      setShowCreateProjectDialog(true);
    }
  }

  const downloadPdf = () => {
    setIsLoading(true)
    let plants = []
    sideCartProductList.map((element, index) => (
      plants = [...plants, { id: element.id }])
    )
    let body = { name: projectName, plants: plants }

    API.downloadPdf(body).then((response) => {
      console.log(response.data)
      const blob = new Blob([response.data], { type: 'application/pdf' });
      console.log(blob)
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Floomiq_Plant_Info.pdf');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);

    }).catch(err => {
      console.log(err)
      setErrorMessage(err.response.data);
      setShowErrorMessage(true)
    }
    ).finally(() => {
      setIsLoading(false)
    })
  }

  useEffect(() => {
    API.getSuggestion(inputSearchValue).then((response) => {
      if (response.status === 200) {
        // Authentication was successful
        setShowSuggestions(true)
        if (inputSearchValue.length > 2) {
          setSuggestions(response.data.suggestions);
        }
      } else {

      }
    }).catch((err) => {
      console.log("Qualcosa è andato storto");
      setShowSuggestions(false)
    }
    );
  }, [inputSearchValue])

  const searchByName = (e) => {
    setInputSearchValue(e.target.title)
    setShowSuggestions(false)
    setIsLoading(true)
    API.findPlantByName(e.target.title).then((response) => {
      if (response.status === 200) {
        // Authentication was successful
        setProductList(response.data);
      } else {

      }
    }).catch((err) =>
      console.log("Qualcosa è andato storto")
    );
    setIsLoading(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollDiv = scrollDivRef.current;
      const { scrollTop, scrollHeight, clientHeight } = scrollDiv;
      // Check for overscroll at the bottom
      if (scrollTop >= scrollHeight - clientHeight - 10) {
        if (resultCount > 10 * page) {
          setPage(page + 1)
          setLoadMore(!loadMore)
          setShowGoOnTop(true)
        }
      }
    };

    const scrollDiv = scrollDivRef.current;
    scrollDiv.addEventListener('scroll', handleScroll);
  }, [page]);

  function removeFilter(filter) {
    console.log(filter)
    console.log(filters)
    let key = filter.split(":")[0]
    let value = filter.split("_").pop()
    let filtersSet = new Set([...filters["tag"]])
    filtersSet.delete(filter);
    filters["tag"] = [...filtersSet]

    let filterObjSet = new Set(filters["obj"][key])
    filterObjSet.delete(value)
    filters["obj"][key] = Array.from(filterObjSet)


    setFilters({ ...filters });
    setPage(1);
  }

  function clearFilter() {
    setFilters({ tag: [], obj: {} });
    setProductList([])
    setPage(1)
    setLoadMore(!loadMore)
  }

  const closeErrorDialog = () => {
    setShowErrorMessage(false)
  }

  function applyFilter() {
    setIsLoading(true)
    setPage(0)
    setLoadMore(!loadMore)
  }

  useEffect(() => {
    API.plants(filters["obj"], page).then((response) => {
      if (response.status === 200) {
        // Authentication was successful
        if (page === 0) {
          setProductList(response.data.plants)
        } else {
          setProductList(productList.concat(response.data.plants));
        }
        setResultCount(response.data.totalCount);
      } else {

      }
    }).catch((err) =>
      console.log("Qualcosa è andato storto")
    );
    setIsLoading(false)
  }, [loadMore])


  function addItemToCart(product) {
    if (!sideCartProductList.includes(product)) {
      setSideCartProductList([...sideCartProductList, product]);
    }
  }

  function removeFromList(product) {
    sideCartProductList.splice(sideCartProductList.indexOf(product), 1);
    setSideCartProductList([...sideCartProductList]);
  }

  function emptyList() {
    setSideCartProductList([])
  }



  const suggestionsListComponent = showSuggestions && inputSearchValue && (
    <ul className="suggestions text-left">
      {suggestions.length ? (
        suggestions.map((suggestion, index) => {
          return (
            <li key={index}
              value={suggestion} title={suggestion} onClick={searchByName}>
              {suggestion}
            </li>
          );
        })
      ) : (
        <li>No suggestions available</li>
      )}
    </ul>
  );

  const handleKeyDown = (event) => {
    if (isLetter(event.key) || event.key === 'Enter') {
      applyFilter();        // You can add additional logic for letter keys here if needed
    }


  };

  const isLetter = (str) => {
    return str.length === 1 && str.match(/[a-z]/i);
  };

  return (<div className="exploreContainer" onClick={(e) => setShowSuggestions(false)}>
    <div className="column">
      {showGoOnTop && <button className='absolute  right-[17%] z-50 rounded-lg  top-[23%]  
      hover:shadow-xl bg-white-50 border-lime-300 border-solid border-2 hidden sm:block' onClick={scrollToTop}>
        <MdKeyboardDoubleArrowUp size="32px" />
      </button>}
      <div className="topRow flex-row">
        <div className="w-[15%] filter-clear">

          <button className='underline flex flex-row gap-1' onClick={((e) => clearFilter())}>
            <PiPaintBrushHousehold className='mt-1' />
            Rimuovi filtri
          </button>
          <button className='underline flex flex-row gap-1' onClick={applyFilter}>
            <LuFilter className='mt-1' />Applica filtri</button>

        </div>
        <div className="flex-1">
          <div className="flex flex-row w-[100%]">
            <div className="tags-sort w-[70%]">
              {filters["tag"].map((_, index) => (
                <span key={index} id="badge-dismiss-dark" className="inline-flex items-center px-2 py-1 me-2 text-xs font-normal text-gray-500 border-black border-2 rounded-full dark:bg-gray-700 dark:text-gray">
                  {filters["tag"][index].split(":")[1].replace("_true", "").replace("_false", "").replace("_", "")}
                  <button onClick={((e) => removeFilter(filters["tag"][index]))} type="button" className="inline-flex items-center p-1 ms-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300" data-dismiss-target="#badge-dismiss-dark" aria-label="Remove">
                    <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Remove badge</span>
                  </button>
                </span>
              ))}
            </div>
            <div className="relative flex-row mt-2 mr-2 self-end items-end w-full sm:w-[30%] rounded-md max-h-9 shadow-sm">
              <div className="pointer-events-none max-h-9 absolute inset-y-0 left-0 flex items-center pl-3 w-full">
                <span className="text-gray-500 sm:text-sm"><IoMdSearch size="20px" /></span>
              </div>
              <input
                type="text"
                name="price"
                id=""
                value={inputSearchValue}
                className="block w-full rounded-md max-h-9 border-0 py-1.5 pl-9 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-400 sm:text-sm sm:leading-6"
                placeholder="Cerca"
                onChange={(e) => { filters["obj"].nome = e.target.value; setFilters(filters); setInputSearchValue(e.target.value) }}
                onSubmit={(e) => { applyFilter(e) }}
                onKeyDown={handleKeyDown}

              />{suggestionsListComponent}
            </div>
            <Cart sideCartProductList={sideCartProductList} openCart={openCart} setOpenCart={setOpenCart} />
            <div class="w-1/5 self-end items-end cart " onClick={() => setOpenCart(!openCart)}>
              <FaRegFilePdf className="self-end ml-[50%] shadow-gray-400 shadow-lg rounded-md" size={"32px"} onClick={downloadPdf} />
            </div>
          </div>
        </div>
        <div className="sm:w-[15%]"></div>
      </div>
      <div className="row">
        <FiltersColumn setFilters={setFilters} filters={filters} applyFilter={applyFilter} />
        <div className="results" ref={scrollDivRef}>

          {productList.length > 0 ? productList.map((_, index) => (
            <ProductCard key={index} product={productList[index]} addItemToCart={addItemToCart}
              setShowLoginRequired={setShowLoginRequired}
              setShowNewFavourite={setShowNewFavourite} setShowErrorDialog={setShowErrorMessage} user={user} setLastFavourite={setLastFavourite} />
          )) :
            <div className='w-full justify-center items-center'>
              <div className='w-1/2 rounded-lg border-solid border-2 border-gray-400 ml-[25%] mt-[20%] self-center justify-between flex flex-row divide-x-2 p-2'>
                <div className='flex w-2/3'><img src="no_result.svg" /></div>
                <div className='flex w-1/3 justify-center items-center'>
                  <span className='flex'>Nessun risultato trovato</span>
                </div>
              </div>
            </div>}
        </div>
        <SideCart sideCartProductList={sideCartProductList} removeFromList={removeFromList} setShowCreateProjectDialog={setShowCreateProjectDialog} setShowLoginRequired={setShowLoginRequired} user={user} emptyList={emptyList} downloadPdf={downloadPdf} />

      </div>
    </div>
    {isLoading && <Spinner />}
    {showCreateProjectDialog &&
      <NewProjectDialog sideCartProductList={sideCartProductList} setIsLoading={setIsLoading} user={user} setShowProjectCreated={setShowProjectCreated} setShowErrorMessage={setShowErrorMessage} setErrorMessage={setErrorMessage} setShowCreateProjectDialog={setShowCreateProjectDialog} />}
    {showLoginRequired && <LoginRequiredDialog setShowLoginRequired={setShowLoginRequired} />}
    {showProjectCreated && <SuccessDialog setShowProjectCreated={setShowProjectCreated} projectName={projectName} />}
    {showNewFavourite && <NewFavouriteDialog setShowNewFavourite={setShowNewFavourite} plant={lastFavourite.nome} />}
    {showErrorMessage && <ErrorDialog setShowErrorMessage={closeErrorDialog} projectName={projectName} errorMessage={errorMessage} />}
    {openCart && <div className="absolute h-4/5 bottom-0 rounded-t-xl  border-2 border-solid border-gray-400 shadow-lg shadow-gray-400 justify-center w-full z-10">
      <div className='flex flex-row bg-white justify-center gap-10 rounded-t-xl'>
        <button className=' rounded-md hover:bg-lime-400'
          onClick={openCreateProjectDialog}>
          <BiSave size="32" className='flex self-center mb-1 cursor-pointer' />
        </button>
        <button className=' rounded-md hover:bg-red-500'
          onClick={emptyList}>
          <MdDeleteOutline size="32" className='flex self-center mb-1 cursor-pointer' />
        </button>
      </div>
      <div className="flex flex-col items-center bg-white rounded-t-xl h-full overflow-y-scroll justify-between py-6">
        {sideCartProductList.length > 0 && sideCartProductList.map((product) => (
          <SideCartProductCard product={product} sideCartProductList={sideCartProductList} removeFromList={removeFromList} />
        ))}
      </div>
    </div>}
    {openFilter && <FiltersColumnMobile setFilters={setFilters} filters={filters} applyFilter={applyFilter} />}
    <div class=" absolute cart z-[2] bottom-4 p-2" onClick={() => setOpenFilter(!openFilter)}>
      {!openFilter && <HiOutlineFilter className="self-end ml-[50%] w-9 h-9 p-1 bg-white shadow-gray-400 shadow-lg rounded-md" color='#a3e635' size={"32px"} />}
    </div>
    <div class=" absolute cart z-[2] top-40 p-2" onClick={() => setOpenFilter(!openFilter)}>
      {openFilter && <HiFilter className="self-start ml-[50%] w-9 h-9 p-1 bg-white shadow-gray-400 shadow-lg rounded-md" color='#a3e635' size={"32px"} onClick={applyFilter} />}
    </div>
  </div>)
};
