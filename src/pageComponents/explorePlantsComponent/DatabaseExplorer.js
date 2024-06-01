import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowUp, IoIosArrowDown, IoMdSearch } from "react-icons/io";
import ProductCard from "./ProductCard";
import SideCart from "./sideCart";
import CreatePdf from "../../utils/pdf";
import { savePdf } from "../../utils/pdf";
import { API } from '../../APIService/API';
import Spinner from '../spinner';
import { Label, TextInput, Textarea } from 'flowbite-react';
import Constant from '../../utils/constant';
import SuccessDialog from '../SuccessDialog';
import LoginRequiredDialog from './LoginRequiredDialog';
import ErrorDialog from '../ErrorDialog';
import ButtonSwitch from '../toggleSwitch';
import { PiPaintBrushHousehold } from "react-icons/pi";
import NewFavouriteDialog from '../newFavouriteDialog';
import FiltersColumn from './filtersColumn';
import { LuFilter } from "react-icons/lu";

let pdfRef = null;
export default function DatabaseExplorer({ user }) {
  const ToPrinf = React.forwardRef((props, ref) => {
    return (
      <div ref={ref}>
        {<CreatePdf />}
      </div>
    );
  });
  pdfRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({ tag: [], obj: {} });
  const [page, setPage] = useState(1);
  const [productList, setProductList] = useState([]);
  const [showCreateProjectDialog, setShowCreateProjectDialog] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [showProjectCreated, setShowProjectCreated] = useState(false);
  const [showNewFavourite, setShowNewFavourite] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showLoginRequired, setShowLoginRequired] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputSearchValue, setInputSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [lastFavourite, setLastFavourite] = useState(null);
  const scrollDivRef = useRef(null);


  const closeCreateProjectDialog = () => {
    setShowCreateProjectDialog(false)
  }

  const handleProjectNameChange = (e) => {
    setProjectName(e.target.value)
  }
  const handleProjectDescChange = (e) => {
    setProjectDesc(e.target.value)
  }


  useEffect(() => {
    API.getSuggestion(inputSearchValue).then((response) => {
      if (response.status === 200) {
        // Authentication was successful
        setShowSuggestions(true)
        setSuggestions(response.data);
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
        setPage(page + 1)
      }
    };

    const scrollDiv = scrollDivRef.current;
    scrollDiv.addEventListener('scroll', handleScroll);
  }, [page]);


  function removeFilter(filter) {
    console.log(filter)
    let key = filter.split(" ")[0]
    let value = filter.substring(key.length).trimStart()
    console.log(key, value)
    let filtersSet = new Set([...filters["tag"]])
    filtersSet.delete(filter);
    filters["tag"] = [...filtersSet]
    if (filter.split(" ").length > 1) {
      let filterObjSet = new Set(filters["obj"][key])
      filterObjSet.delete(value)
      filters["obj"][key] = Array.from(filterObjSet)
    }
    else {
      delete filters["obj"][key]
    }
    setFilters({...filters});
  }

  function clearFilter() {
    setFilters({ tag: [], obj: {} });
  }

  const closeErrorDialog = () => {
    setShowErrorMessage(false)
  }

  function applyFilter() {
    setIsLoading(true)
    API.plants(filters["obj"], page).then((response) => {
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
    API.plants(filters["obj"], page).then((response) => {
      if (response.status === 200) {
        // Authentication was successful
        setProductList(productList.concat(response.data));
      } else {

      }
    }).catch((err) =>
      console.log("Qualcosa è andato storto")
    );
    setIsLoading(false)
  }, [page])

  function submitProject() {
    setIsLoading(true)
    let plants = []
    sideCartProductList.map((element, index) => (
      plants = [...plants, { id: element.id }])
    )
    let body = { name: projectName, description: projectDesc, owner: user.username, plants: plants }
    API.submitProject(body).then((response) => {
      if (response.status === 200) {
        // Authentication was successful
        setShowCreateProjectDialog(false)
        setShowProjectCreated(true);
      } else {
        setShowErrorMessage(true)
      }
    }).catch(err => {
      setErrorMessage(err.response.data);
      setShowCreateProjectDialog(false)
      setShowErrorMessage(true)
    }
    ).finally(() => {
      setIsLoading(false)
    });
  }

  const [sideCartProductList, setSideCartProductList] = useState([]);

  function addItemToCart(product) {
    if (!sideCartProductList.includes(product)) {
      setSideCartProductList([...sideCartProductList, product]);
    }
  }

  function removeFromList(product) {
    sideCartProductList.splice(sideCartProductList.indexOf(product), 1);
    setSideCartProductList([...sideCartProductList]);
  }

  const suggestionsListComponent = showSuggestions && inputSearchValue && (
    <ul className="suggestions">
      {suggestions.length ? (
        suggestions.map((suggestion, index) => {
          return (
            <li key={index} value={suggestion} title={suggestion} onClick={searchByName}>
              {suggestion}
            </li>
          );
        })
      ) : (
        <li>No suggestions available</li>
      )}
    </ul>
  );


  return (<div className="exploreContainer">
    <div className="column">
      <div className="row">
        <div className="filter-clear">

          <button className='underline flex flex-row gap-1' onClick={((e) => clearFilter())}>
            <PiPaintBrushHousehold className='mt-1' />
            Rimuovi filtri
          </button>
          <button className='underline flex flex-row gap-1' onClick={applyFilter}>
          <LuFilter className='mt-1'/>Applica filtri</button>

        </div>
        <div className="tags-sort w-[50.5%]">
          {filters["tag"].map((_, index) => (
            <span key={index} id="badge-dismiss-dark" className="inline-flex items-center px-2 py-1 me-2 text-xs font-normal text-gray-500 border-black border-2 rounded-full dark:bg-gray-700 dark:text-gray">
              {filters["tag"][index]}
              <button onClick={((e) => removeFilter(filters["tag"][index]))} type="button" className="inline-flex items-center p-1 ms-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300" data-dismiss-target="#badge-dismiss-dark" aria-label="Remove">
                <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Remove badge</span>
              </button>
            </span>
          ))}
        </div>
        <div className="relative mt-2 rounded-md max-h-9 shadow-sm">
          <div className="pointer-events-none max-h-9 absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm"><IoMdSearch size="20px" /></span>
          </div>
          <input
            type="text"
            name="price"
            id=""
            value={inputSearchValue}
            className="block w-full rounded-md max-h-9 border-0 py-1.5 pl-9 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-400 sm:text-sm sm:leading-6"
            placeholder="Cerca"
            onChange={(e) => { setInputSearchValue(e.target.value) }}
          />{suggestionsListComponent}</div>

      </div>
      <div className="row">
        <FiltersColumn setFilters={setFilters} filters={filters} applyFilter={applyFilter} />
        <div className="results " ref={scrollDivRef}>
          {productList.map((_, index) => (
            <ProductCard key={index} product={productList[index]} addItemToCart={addItemToCart}
              setShowLoginRequired={setShowLoginRequired}
              setShowNewFavourite={setShowNewFavourite} setShowErrorDialog={setShowErrorMessage} user={user} setLastFavourite={setLastFavourite} />
          ))}
        </div>
        <SideCart sideCartProductList={sideCartProductList} removeFromList={removeFromList} setShowCreateProjectDialog={setShowCreateProjectDialog} setShowLoginRequired={setShowLoginRequired} user={user} />

      </div>
      {/* <ToPrinf ref={pdfRef} />
      <button onClick={savePdf}>download</button> */}
    </div>
    {isLoading && <Spinner />}
    {showCreateProjectDialog &&
      <div className="absolute w-screen h-screen self-center  backdrop-blur-lg items-center z-30" >
        <form type='submit' onSubmit={e => e.preventDefault()} className="flex flex-col justify-between w-1/2 p-4 gap-4 mt-[10%] ml-[25%] border-solid border-2 border-slate-300	bg-white  rounded self-center">
          <div className='flex flex-row items-stretch'>
            <div className="mb-2 block self-start text-left w-1/4">
              <Label htmlFor="nome" value="Nome progetto" />
            </div>
            <TextInput
              id="nome"
              type="text"
              placeholder="Giardino inglese"
              required
              className='w-3/4'
              value={projectName} onChange={handleProjectNameChange}

            />
          </div>
          <div className='flex flex-row items-stretch'>
            <div className="mb-2 block self-start text-left w-1/4">
              <Label htmlFor="descrizione" value="Descrizione progetto" />
            </div>
            <Textarea
              id="nome"
              type="text"
              placeholder="Giardino inglese"
              className='w-3/4'
              value={projectDesc} onChange={handleProjectDescChange}

            />
          </div>
          <div className="flex flex-row items-stretch">
            <div className="mb-2 block self-start text-left w-1/4">
              <Label htmlFor="Le tue piante" value="Le tue piante" />
            </div>
            <div className='flex flex-row gap-1 flex-wrap w-3/4'>
              {sideCartProductList.map((_, index) => (
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {sideCartProductList[index].nome}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-row justify-center gap-12">
            <button className='button border-black border-2 border-solid  button-sign-up bg-red-600 hover:bg-red-400 text-white' onClick={closeCreateProjectDialog}>Annulla</button>
            <button className='button border-black border-2 border-solid hover:bg-green-400 bg-[#a0df3b] button-sign-up' onClick={submitProject}> Salva</button>
          </div>
        </form>

      </div>}
    {showLoginRequired && <LoginRequiredDialog setShowLoginRequired={setShowLoginRequired} />}
    {showProjectCreated && <SuccessDialog setShowProjectCreated={setShowProjectCreated} projectName={projectName} />}
    {showNewFavourite && <NewFavouriteDialog setShowNewFavourite={setShowNewFavourite} plant={lastFavourite.nome} />}
    {showErrorMessage && <ErrorDialog setShowErrorMessage={closeErrorDialog} projectName={projectName} errorMessage={errorMessage} />}

  </div>)
};
