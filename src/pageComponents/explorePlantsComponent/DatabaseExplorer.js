import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowUp, IoIosArrowDown, IoMdSearch } from "react-icons/io";
import ProductCard from "./ProductCard";
import SideCart from "./sideCart";
import CreatePdf from "../../utils/pdf";
import { savePdf } from "../../utils/pdf";
import { API } from '../../APIService/API';
import usePagination from '@mui/material/usePagination/usePagination';
import spinner from '../spinner';
import Spinner from '../spinner';
import { Label, TextInput, Textarea } from 'flowbite-react';
import Constant from '../../utils/constant';
import SuccessDialog from '../SuccessDialog';
import LoginRequiredDialog from './LoginRequiredDialog';
import ErrorDialog from '../ErrorDialog';
import ButtonSwitch from '../toggleSwitch';

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
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState([]);
  const [filtersObj, setFiltersObj] = useState({});
  const [page, setPage] = useState(1);
  const [productList, setProductList] = useState([]);
  const [showCreateProjectDialog, setShowCreateProjectDialog] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [showProjectCreated, setShowProjectCreated] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showLoginRequired, setShowLoginRequired] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  const closeCreateProjectDialog = () => {
    setShowCreateProjectDialog(false)
  }

  const handleProjectNameChange = (e) => {
    setProjectName(e.target.value)
  }
  const handleProjectDescChange = (e) => {
    setProjectDesc(e.target.value)
  }

  const handleSwitchToggle = (e, filter, filterObj) => {
    if (e.target.checked) {
      setFilters([...filters, filter]);
      setFiltersObj({ ...filtersObj, ...filterObj })
    } else {
      let filtersSet = new Set([...filters, filter])
      filtersSet.delete(filter)
      setFilters(Array.from(filtersSet));
      let toRemove = Object.keys(filterObj)[0];
      let newFilters = filtersObj
      newFilters[toRemove] = null;
      setFiltersObj(newFilters)
    }
  }

  const handleCheckboxClick = (e, filter, filterObj) => {
    if (e.target.checked) {
      let filtersSet = new Set([...filters, filter])
      setFilters(Array.from(filtersSet));


      let toAdd = Object.keys(filterObj)[0];
      let newArray

      if (filtersObj[toAdd]) {
        newArray = [...filtersObj[toAdd], ...filterObj[toAdd]]
      } else {
        newArray = filterObj[toAdd]
      }
      let newFilterObj = {}
      newFilterObj[toAdd] = newArray
      let newFiltersObj = { ...filtersObj, ...newFilterObj }
      setFiltersObj(newFiltersObj)
    } else {
      let filtersSet = new Set([...filters, filter])
      filtersSet.delete(filter)
      setFilters(Array.from(filtersSet));
      let toRemove = Object.keys(filterObj)[0];
      let filterObjSet = new Set(filtersObj[toRemove]);
      filterObjSet.delete(filterObj[toRemove][0])
      filtersObj[toRemove] = [filterObjSet]
      setFiltersObj(Array.from(filterObj))
    }
  }

  const toggle = () => {
    setOpen(!open);
  };

  const toggleOpenTwo = () => {
    setOpenTwo(!openTwo);
  };

  const toggleOpenThree = () => {
    setOpenThree(!openThree);
  };

  function addToFilters(filterTag, filterObj) {
    let filtersSet = new Set([...filters, filterTag])
    setFiltersObj({ ...filtersObj, ...filterObj })
    setFilters(Array.from(filtersSet));
  };

  function removeFilter(filter) {
    let filtersSet = new Set([...filters])
    filtersSet.delete(filter);
    setFilters(Array.from(filtersSet));
  }

  function clearFilter() {
    setFilters([]);
    setFiltersObj({})
  }

  function loadMore() {
    setIsLoading(true)
    setPage(page + 1)
  }

  const closeErrorDialog = () => {
    setShowErrorMessage(false)
    setShowCreateProjectDialog(true)
  }

  function applyFilter(){
    console.log(filtersObj)
    setIsLoading(true)
    API.plants(filtersObj, page).then((response) => {
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
    API.plants(filtersObj, page).then((response) => {
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
        console.log("error")
        setShowErrorMessage(true)
      }
    }).catch(err => {
      setErrorMessage(err.response.data);
      setShowCreateProjectDialog(false)
      setShowErrorMessage(true)
      console.log(errorMessage)
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

  return (<div className="exploreContainer">
    <div className="column">
      <div className="row">
        <div className="filter-clear">

          <button onClick={((e) => clearFilter())}>Clear all</button>
        </div>
        <div className="tags-sort">
          {filters.map((_, index) => (
            <span key={index} id="badge-dismiss-dark" className="inline-flex items-center px-2 py-1 me-2 text-xs font-normal text-gray-500 border-black border-2 rounded-full dark:bg-gray-700 dark:text-gray">
              {filters[index]}
              <button onClick={((e) => removeFilter(filters[index]))} type="button" className="inline-flex items-center p-1 ms-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300" data-dismiss-target="#badge-dismiss-dark" aria-label="Remove">
                <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Remove badge</span>
              </button>
            </span>
          ))}
        </div>
        <div className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-gray-500 border-black border-2 rounded-full dark:bg-gray-700 dark:text-gray">
          Cerca<IoMdSearch size="20px" />
        </div>
      </div>
      <div className="row">
        <div className="filters-column">
          <span className="font-bold text-lg">Filtri:</span>
          <div className='flex flex-row gap-1'>
            <ButtonSwitch className="w-1/4" filter="Interno" filterObj={{ interno: true }} handler={handleSwitchToggle} />
            <span className='w-3/4 '>Pianta da interno</span>
          </div>
          <div className='flex flex-row gap-1'>
            <ButtonSwitch className="w-1/4" filter="Esterno" filterObj={{ esterno: true }} handler={handleSwitchToggle} />
            <span className='w-3/4 '>Pianta da esterno</span>
          </div>
          <div className="column-filter-spacer"></div>

          <div className="collapsable-filters">
            <div className="filter-type pb-1">
              Colore corteccia
              <div>{open ? <IoIosArrowUp onClick={toggle} /> : <IoIosArrowDown onClick={toggle} />}</div>

            </div>
            {open && (
              <div className="options">
                <div className="filters">
                  <div className='flex flex-row'>
                    <label className="cl-checkbox">
                      <input type="checkbox" id="option-one" name="option-one" value="option-one" onChange={(e) => handleCheckboxClick(e, "Corteccia Marrone", { coloreCorteccia: ["Marrone"] })}></input>
                      <span/>
                    </label>
                    <span className='w-3/4 text-start'>Marrone</span>
                  </div>
                  <div className='flex flex-row'>
                    <label className="cl-checkbox">
                      <input type="checkbox" id="option-one" name="option-one" value="option-one" onChange={(e) => handleCheckboxClick(e, "Corteccia Verde", { coloreCorteccia: ["Verde"] })}></input>
                      <span/>
                    </label>
                    <span className='w-3/4 text-start'>Verde</span>
                  </div>
                  <div className='flex flex-row'>
                    <label className="cl-checkbox">
                      <input type="checkbox" id="option-one" name="option-one" value="option-one" onChange={(e) => handleCheckboxClick(e, "Corteccia Grigia", { coloreCorteccia: ["Grigia"] })}></input>
                      <span/>
                    </label>
                    <span className='w-3/4 text-start'>Grigia</span>
                  </div>
                  <div className='flex flex-row'>
                    <label className="cl-checkbox">
                      <input type="checkbox" id="option-one" name="option-one" value="option-one" onChange={(e) => handleCheckboxClick(e, "Corteccia Rossa", { coloreCorteccia: ["Rossa"] })}></input>
                      <span/>
                    </label>
                    <span className='w-3/4 text-start'>Rossa</span>
                  </div>
                </div>
              </div>
            )}
            <div className="column-filter-spacer"></div>

          </div>
          <div className="collapsable-filters">
            <div className="filter-type pb-1">
              Colore Foglia
              <div>{openTwo ? <IoIosArrowUp onClick={toggleOpenTwo} /> : <IoIosArrowDown onClick={toggleOpenTwo} />}</div>

            </div>
            {openTwo && (
              <div className="options">
                <div className="filters">
                  <div className='flex flex-row'>
                    <label className="cl-checkbox">
                      <input type="checkbox" id="option-one" name="option-one" value="option-one" onChange={(e) => handleCheckboxClick(e, "Foglia Marrone", { coloreFoglia: ["Marrone"] })}></input>
                      <span/>
                    </label>
                    <span className='w-3/4 text-start'>Marrone</span>
                  </div>
                  <div className='flex flex-row'>
                    <label className="cl-checkbox">
                      <input type="checkbox" id="option-one" name="option-one" value="option-one" onChange={(e) => handleCheckboxClick(e, "Foglia Verde", { oloreFoglia: ["Verde"] })}></input>
                      <span/>
                    </label>
                    <span className='w-3/4 text-start'>Verde</span>
                  </div>
                  <div className='flex flex-row'>
                    <label className="cl-checkbox">
                      <input type="checkbox" id="option-one" name="option-one" value="option-one" onChange={(e) => handleCheckboxClick(e, "Foglia Grigia", { oloreFoglia: ["Grigia"] })}></input>
                      <span/>
                    </label>
                    <span className='w-3/4 text-start'>Grigia</span>
                  </div>
                  <div className='flex flex-row'>
                    <label className="cl-checkbox">
                      <input type="checkbox" id="option-one" name="option-one" value="option-one" onChange={(e) => handleCheckboxClick(e, "Foglia Rossa", { coloreFoglia: ["Rossa"] })}></input>
                      <span/>
                    </label>
                    <span className='w-3/4 text-start'>Rossa</span>
                  </div>
                </div>
              </div>
            )}
            <div className="column-filter-spacer"></div>

          </div>
          <button className='button is-primary button-sign-up' onClick={applyFilter}>Applica filtri</button>
        </div>
        <div className="results ">
          {productList.map((_, index) => (
            <ProductCard key={index} product={productList[index]} addItemToCart={addItemToCart} />
          ))}
        </div>
        <SideCart sideCartProductList={sideCartProductList} removeFromList={removeFromList} setShowCreateProjectDialog={setShowCreateProjectDialog} setShowLoginRequired={setShowLoginRequired} user={user} />

      </div>
      {/* <ToPrinf ref={pdfRef} />
      <button onClick={savePdf}>download</button> */}
      <button onClick={loadMore} className="button is-primary button-sign-up mt-4"> Carica altro</button>

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
    {showErrorMessage && <ErrorDialog setShowErrorMessage={closeErrorDialog} projectName={projectName} errorMessage={errorMessage} />}

  </div>)
};
