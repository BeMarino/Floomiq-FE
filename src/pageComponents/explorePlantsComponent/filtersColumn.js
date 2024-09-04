import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ButtonSwitch from "../toggleSwitch";
import { useState } from "react";
import { IoLeafSharp } from "react-icons/io5";

export default function FiltersColumn({ setFilters, filters }) {
    const [open, setOpen] = useState(false);
    const [openTwo, setOpenTwo] = useState(false);
    const [openTipoPianta, setOpenTipoPianta] = useState(false);
    const [openAltezza, setOpenAltezza] = useState(false);
    const [openCicloVita, setOpenCicloVita] = useState(false);
    const [openFogliame, setOpenFogliame] = useState(false);
    const [openEsposizione, setOpenEsposizione] = useState(false);
    const [openTerreno, setOpenTerreno] = useState(false);
    const [openTipoTerreno, setOpenTipoTerreno] = useState(false);
    const [openPhTerreno, setOpenPhTerreno] = useState(false);
    const [openUmTerreno, setOpenUmTerreno] = useState(false);
    const [openUtilizzo, setOpenUtilizzo] = useState(false);
    const [openFiore, setOpenFiore] = useState(false);
    const [openFioritura, setOpenFioritura] = useState(false);
    const [openFruttificazione, setOpenFruttificazione] = useState(false);
    const [openColoreFiore, setOpenColoreFiore] = useState(false);
    const [openPianteMq, setOpenPianteMq] = useState(false);
    const [openManutenzione, setOpenManutenzione] = useState(false);
    const [openCo2, setOpenCo2] = useState(false);
    const [openSiccita, setOpenSiccita] = useState(false);
    const [openAlluv, setOpenAlluv] = useState(false);
    const [openMalattia, setOpenMalattia] = useState(false);
    const [openToxic, setOpenToxic] = useState(false);
    const [openGelo, setOpenGelo] = useState(false);
    const [openAutoctona, setOpenAutoctona] = useState(false);
    const [openOrigine, setOpenOrigine] = useState(false);
    const [openFoglia, setOpenFoglia] = useState(false);
    const [openFormaFoglia, setOpenFormaFoglia] = useState(false);
    const [openColoreFoglia, setOpenColoreFoglia] = useState(false);
    const [openDimensioneFoglia, setOpenDimensioneFoglia] = useState(false);
    const [openSuperficieFoglia, setOpenSuperficieFoglia] = useState(false);
    const [openFrutto, setOpenFrutto] = useState(false);
    const [openChioma, setOpenChioma] = useState(false);
    const [openCaratteristiche, setOpenCaratteristiche] = useState(false);
    const [openZona, setOpenZona] = useState(false);
    const [openEdibile, setOpenEdibile] = useState(false);

    let rangeMin = 100;
    const range = document.querySelector(".range-selected");
    const rangeInput = document.querySelectorAll(".range-input input");
    const rangePrice = document.querySelectorAll(".range-price input");

    rangeInput.forEach((input) => {
        input.addEventListener("input", (e) => {
            let minRange = parseInt(rangeInput[0].value);
            let maxRange = parseInt(rangeInput[1].value);
            if (maxRange - minRange < rangeMin) {
                if (e.target.className === "min") {
                    rangeInput[0].value = maxRange - rangeMin;
                } else {
                    rangeInput[1].value = minRange + rangeMin;
                }
            } else {
                rangePrice[0].value = minRange;
                rangePrice[1].value = maxRange;
                range.style.left = (minRange / rangeInput[0].max) * 100 + "%";
                range.style.right = 100 - (maxRange / rangeInput[1].max) * 100 + "%";
            }
        });
    });

    rangePrice.forEach((input) => {
        input.addEventListener("input", (e) => {
            let minPrice = rangePrice[0].value;
            let maxPrice = rangePrice[1].value;
            if (maxPrice - minPrice >= rangeMin && maxPrice <= rangeInput[1].max) {
                if (e.target.className === "min") {
                    rangeInput[0].value = minPrice;
                    range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
                } else {
                    rangeInput[1].value = maxPrice;
                    range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                }
            }
        });
    });
    const handleSwitchToggle = (e, filter) => {
        if (e.target.checked) {
            filters["tag"] = Array.from(new Set([...filters["tag"], ...[filter["tag"]]]))
            filters["obj"] = { ...filters["obj"], ...filter["obj"] }
            setFilters({ ...filters });
        } else {
            let filtersSet = new Set([...filters["tag"]])
            filtersSet.delete(filter["tag"])
            filters["tag"] = Array.from(filtersSet);
            let toRemove = Object.keys(filter["obj"])[0];
            let newFilters = filters["obj"]
            newFilters[toRemove] = null;
            filters["obj"] = newFilters;
            setFilters({ ...filters })
        }

    }

    const handleCheckboxClick = (e, filter) => {
        if (e.target.checked) {
            let filtersSet = new Set([...filters["tag"], ...[filter["tag"]]])
            filters["tag"] = Array.from(filtersSet)
            let toAdd = Object.keys(filter["obj"])[0];
            let newArray

            if (filters["obj"][toAdd]) {
                newArray = [...filters["obj"][toAdd], ...filter["obj"][toAdd]]
            } else {
                newArray = filter["obj"][toAdd]
            }
            let newFilterObj = {}
            newFilterObj[toAdd] = newArray
            let newFiltersObj = { ...filters["obj"], ...newFilterObj }
            filters["obj"] = newFiltersObj
            setFilters({ ...filters })
        } else {
            let filtersSet = new Set(filters["tag"])
            filtersSet.delete(filter["tag"])
            filters["tag"] = Array.from(filtersSet);

            let toRemove = Object.keys(filter["obj"])[0];
            let filterObjSet = new Set(filters["obj"][toRemove]);

            filterObjSet.delete(filter["obj"][toRemove][0])
            filters["obj"][toRemove] = [...filterObjSet]
            setFilters({ ...filters })
        }

    }

    function toggle(method, value) {
        method(!value);
    };


    return (
        <div className="filters-column">
            <span className="font-bold text-lg">Filtri:</span>
            <div className="collapsable-filters cursor-pointer">
                <div className="filter-type hover:bg-lime-200 p-1 rounded-md  pb-1" onClick={() => toggle(setOpenTipoPianta, openTipoPianta)}>
                    Tipo di pianta
                    <div>{openTipoPianta ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                </div>
                {
                    openTipoPianta && (
                        <div className="options pl-2">
                            <div className="filters">
                                {['Albero', 'Arbusto', 'Bamboo', 'Bonsai', 'Bulbi', 'Bulbi da Fiore', 'Conifere', 'Erbacea', 'Felci', 'Graminacea', 'Palme', 'Pianta grassa con spine', 'Pianta grassa senza spine', 'Piante Acquatiche', 'Rampicante', 'Rododendri (Kalmia)', 'Succulenta', 'Tappeto Erboso', 'Tappezzante'].map(element =>
                                    <div className='flex flex-row'>
                                        <label className="cl-checkbox">
                                            <input type="checkbox" id="option-one" name="option-one"
                                                checked={Object.keys(filters["obj"]).indexOf("TipoPianta") !== -1 && filters["obj"]["TipoPianta"].indexOf(element) !== -1}
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: element, obj: { TipoPianta: [element] } })}></input>
                                            <span className='w-3/4 text-start'>{element}</span>
                                        </label>
                                    </div>)}
                            </div>
                        </div>
                    )
                }

            </div>
            <div className="collapsable-filters cursor-pointer">

                <div className="filter-type hover:bg-lime-200 p-1 rounded-md  pb-1" onClick={() => toggle(setOpenAltezza, openAltezza)} >
                    Altezza
                    <div>{openAltezza ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                </div>
                {
                    openAltezza && (
                        <div className="options pl-2">
                            <div className="filters">
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("Altezza") !== -1 && filters["obj"]["Altezza"].indexOf("Da 0m a 1m") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Altezza Da 0m a 1m", obj: { Altezza: ["Da 0m a 1m"] } })}></input>
                                        <span className='w-3/4 text-start'>Da 0m a 1m</span>
                                    </label>
                                </div>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("Altezza") !== -1 && filters["obj"]["Altezza"].indexOf("Da 1m a 3m") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Altezza Da 1m a 3m", obj: { Altezza: ["Da 1m a 3m"] } })}></input>
                                        <span className='w-3/4 text-start'>Da 1m a 3m</span>
                                    </label>
                                </div>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("Altezza") !== -1 && filters["obj"]["Altezza"].indexOf("Da 3m a 5m") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Altezza Da 3m a 5m", obj: { Altezza: ["Da 3m a 5m"] } })}></input>
                                        <span className='w-3/4 text-start'>Da 3m a 5m</span>
                                    </label>
                                </div>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("Altezza") !== -1 && filters["obj"]["Altezza"].indexOf("Più di 5m") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Altezza Più di 5m", obj: { Altezza: ["Più di 5m"] } })}></input>
                                        <span className='w-3/4 text-start'>Più di 5m</span>
                                    </label>
                                </div>

                            </div>
                        </div>
                    )
                }

            </div>
            <div className="collapsable-filters cursor-pointer">

                <div className="filter-type hover:bg-lime-200 p-1 rounded-md  pb-1" onClick={() => toggle(setOpenCicloVita, openCicloVita)} >
                    Ciclo di vita
                    <div>{openCicloVita ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                </div>
                {
                    openCicloVita && (
                        <div className="options pl-2">
                            <div className="filters">
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("CicloVita") !== -1 && filters["obj"]["CicloVita"].indexOf("Perenne") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Perenne", obj: { CicloVita: ["Perenne"] } })}></input>
                                        <span className='w-3/4 text-start'>Perenne</span>
                                    </label>
                                </div>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("CicloVita") !== -1 && filters["obj"]["CicloVita"].indexOf("Annuale") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Annuale", obj: { CicloVita: ["Annuale"] } })}></input>
                                        <span className='w-3/4 text-start'>Annuale</span>
                                    </label>
                                </div>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("CicloVita") !== -1 && filters["obj"]["CicloVita"].indexOf("Biennuale") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Biennuale", obj: { CicloVita: ["Biennuale"] } })}></input>
                                        <span className='w-3/4 text-start'>Biennuale</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
            <div className="collapsable-filters cursor-pointer">

                <div className="filter-type hover:bg-lime-200 p-1 rounded-md  pb-1" onClick={() => toggle(setOpenEsposizione, openEsposizione)}>
                    Esposizione
                    <div>{openEsposizione ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                </div>
                {
                    openEsposizione && (
                        <div className="options pl-2">
                            <div className="filters">
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("Esposizione") !== -1 && filters["obj"]["Esposizione"].indexOf("Pieno sole") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Pieno sole", obj: { Esposizione: ["Pieno sole"] } })}></input>
                                        <span className='w-3/4 text-start'>Pieno sole</span>
                                    </label>
                                </div>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("Esposizione") !== -1 && filters["obj"]["Esposizione"].indexOf("Sole parziale") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Sole parziale", obj: { Esposizione: ["Sole parziale"] } })}></input>
                                        <span className='w-3/4 text-start'>Sole parziale</span>
                                    </label>
                                </div>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("Esposizione") !== -1 && filters["obj"]["Esposizione"].indexOf("Ombra parziale") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Ombra parziale", obj: { Esposizione: ["Ombra parziale"] } })}></input>
                                        <span className='w-3/4 text-start'>Ombra parziale</span>
                                    </label>
                                </div>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("Esposizione") !== -1 && filters["obj"]["Esposizione"].indexOf("Ombra") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Ombra", obj: { Esposizione: ["Ombra"] } })}></input>
                                        <span className='w-3/4 text-start'>Ombra</span>
                                    </label>
                                </div>

                            </div>
                        </div>
                    )
                }

            </div>
            <div className="collapsable-filters cursor-pointer">

                <div className="filter-type hover:bg-lime-200 p-1 rounded-md  pb-1" onClick={() => toggle(setOpenTerreno, openTerreno)}>
                    Terreno
                    <div>{openTerreno ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                </div>
                {
                    openTerreno && (<>
                        <div className="collapsable-filters cursor-pointer  pl-4 ">

                            <div className="filter-type hover:bg-lime-200 p-1 rounded-md   pb-1" onClick={() => toggle(setOpenTipoTerreno, openTipoTerreno)}>
                                Tipo
                                <div>{openTipoTerreno ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                            </div>
                            {openTipoTerreno && <div className="options pl-2">
                                <div className="filters">
                                    <div className='flex flex-row'>
                                        <label className="cl-checkbox">
                                            <input type="checkbox" id="option-one" name="option-one"
                                                checked={Object.keys(filters["obj"]).indexOf("Terreno") !== -1 && filters["obj"]["Terreno"].indexOf("Argilloso") !== -1}
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Terreno Argilloso", obj: { Terreno: ["Argilloso"] } })}></input>
                                            <span className='w-3/4 text-start'>Argilloso</span>
                                        </label>
                                    </div>
                                    <div className='flex flex-row'>
                                        <label className="cl-checkbox">
                                            <input type="checkbox" id="option-one" name="option-one"
                                                checked={Object.keys(filters["obj"]).indexOf("Terreno") !== -1 && filters["obj"]["Terreno"].indexOf("Limoso") !== -1}
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Terreno Limoso", obj: { Terreno: ["Limoso"] } })}></input>
                                            <span className='w-3/4 text-start'>Limoso</span>
                                        </label>
                                    </div>
                                    <div className='flex flex-row'>
                                        <label className="cl-checkbox">
                                            <input type="checkbox" id="option-one" name="option-one"
                                                checked={Object.keys(filters["obj"]).indexOf("Terreno") !== -1 && filters["obj"]["Terreno"].indexOf("Calcareo") !== -1}
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Terreno Calcareo", obj: { Terreno: ["Calcareo"] } })}></input>
                                            <span className='w-3/4 text-start'>Calcareo</span>
                                        </label>
                                    </div>
                                    <div className='flex flex-row'>
                                        <label className="cl-checkbox">
                                            <input type="checkbox" id="option-one" name="option-one"
                                                checked={Object.keys(filters["obj"]).indexOf("Terreno") !== -1 && filters["obj"]["Terreno"].indexOf("Sabbioso") !== -1}
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Terreno Sabbioso", obj: { Terreno: ["Sabbioso"] } })}></input>
                                            <span className='w-3/4 text-start'>Sabbioso</span>
                                        </label>
                                    </div>

                                </div>
                            </div>}
                        </div>
                        <div className="collapsable-filters cursor-pointer  pl-4 ">

                            <div className="filter-type hover:bg-lime-200 p-1 rounded-md   pb-1" onClick={() => toggle(setOpenPhTerreno, openPhTerreno)}>
                                PH
                                <div>{openPhTerreno ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                            </div>
                            {openPhTerreno && <div className="options pl-2">
                                <div className="filters">
                                    <div className='flex flex-row'>
                                        <label className="cl-checkbox">
                                            <input type="checkbox" id="option-one" name="option-one"
                                                checked={Object.keys(filters["obj"]).indexOf("PhTerreno") !== -1 && filters["obj"]["PhTerreno"].indexOf("Neutro") !== -1}
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "PhTerreno Neutro", obj: { PhTerreno: ["Neutro"] } })}></input>
                                            <span className='w-3/4 text-start'>Neutro</span>
                                        </label>
                                    </div>
                                    <div className='flex flex-row'>
                                        <label className="cl-checkbox">
                                            <input type="checkbox" id="option-one" name="option-one"
                                                checked={Object.keys(filters["obj"]).indexOf("PhTerreno") !== -1 && filters["obj"]["PhTerreno"].indexOf("Acido") !== -1}
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "PhTerreno Acido", obj: { PhTerreno: ["Acido"] } })}></input>
                                            <span className='w-3/4 text-start'>Acido</span>
                                        </label>
                                    </div>
                                    <div className='flex flex-row'>
                                        <label className="cl-checkbox">
                                            <input type="checkbox" id="option-one" name="option-one"
                                                checked={Object.keys(filters["obj"]).indexOf("PhTerreno") !== -1 && filters["obj"]["PhTerreno"].indexOf("Alcalino") !== -1}
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "PhTerreno Alcalino", obj: { PhTerreno: ["Alcalino"] } })}></input>
                                            <span className='w-3/4 text-start'>Alcalino</span>
                                        </label>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        <div className="collapsable-filters cursor-pointer  pl-4 ">

                            <div className="filter-type hover:bg-lime-200 p-1 rounded-md   pb-1" onClick={() => toggle(setOpenUmTerreno, openUmTerreno)}>
                                Umidità terreno
                                <div>{openUmTerreno ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                            </div>
                            {openUmTerreno && <div className="options pl-2">
                                <div className="filters">
                                    {/* <div className='flex flex-row'>
                                        <label className="cl-checkbox">
                                            <input type="checkbox" id="option-one" name="option-one"
                                                checked={Object.keys(filters["obj"]).indexOf("UmiditàTerreno") !== -1 && filters["obj"]["PhTerreno"].indexOf("Neutro") !== -1}
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Umidità Terreno", obj: { PhTerreno: ["Neutro"] } })}></input>
                                            <span className='w-3/4 text-start'>Neutro</span>
                                        </label>
                                    </div>
                                    <div className='flex flex-row'>
                                        <label className="cl-checkbox">
                                            <input type="checkbox" id="option-one" name="option-one"
                                                checked={Object.keys(filters["obj"]).indexOf("PhTerreno") !== -1 && filters["obj"]["PhTerreno"].indexOf("Acido") !== -1}
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "PhTerreno Acido", obj: { PhTerreno: ["Acido"] } })}></input>
                                            <span className='w-3/4 text-start'>Acido</span>
                                        </label>
                                    </div>
                                    <div className='flex flex-row'>
                                        <label className="cl-checkbox">
                                            <input type="checkbox" id="option-one" name="option-one"
                                                checked={Object.keys(filters["obj"]).indexOf("PhTerreno") !== -1 && filters["obj"]["PhTerreno"].indexOf("Alcalino") !== -1}
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "PhTerreno Alcalino", obj: { PhTerreno: ["Alcalino"] } })}></input>
                                            <span className='w-3/4 text-start'>Alcalino</span>
                                        </label>
                                    </div> */}
                                </div>
                            </div>}
                        </div>
                    </>
                    )
                }

            </div>
            <div className="collapsable-filters cursor-pointer">

                <div className="filter-type hover:bg-lime-200 p-1 rounded-md  pb-1" onClick={() => toggle(setOpenUtilizzo, openUtilizzo)}>
                    Utilizzo ideale
                    <div>{openUtilizzo ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                </div>
                {
                    openUtilizzo && (
                        <div className="options pl-2">
                            <div className="filters">
                                {['Aiuola', 'Anti-zanzare', 'Areeurbane', 'Balcone', 'Bonsai', 'Bordure', 'Deserto', 'Fioriere', 'Fitodepurazione', 'Frutteti', 'Frutteto', 'Giardinoperenne', 'Giardinoroccioso', 'Giardinozen', 'Laghetto', 'Ornamentale', 'Orto', 'Palude', 'Pergolati', 'Pienaterra', 'Siccità', 'Siepe', 'Usoincucina', 'Vaso', 'Vialialberati', 'giardinocostiero', 'rampicante'].map(element => (
                                    <div className='flex flex-row'>
                                        <label className="cl-checkbox">
                                            <input type="checkbox" id="option-one" name="option-one"
                                                checked={Object.keys(filters["obj"]).indexOf("UtilizzoIdeale") !== -1 && filters["obj"]["UtilizzoIdeale"].indexOf(element) !== -1}
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: element, obj: { UtilizzoIdeale: [element] } })}></input>
                                            <span className='w-3/4 text-start'>{element}</span>
                                        </label>
                                    </div>
                                ))

                                }

                            </div>
                        </div>
                    )
                }

            </div>
            <div className="collapsable-filters cursor-pointer">

                <div className="filter-type hover:bg-lime-200 p-1 rounded-md  pb-1" onClick={() => toggle(setOpenFiore, openFiore)}>
                    Fiore
                    <div>{openFiore ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                </div>
                {
                    openFiore && (<>
                        <div className="collapsable-filters cursor-pointer  pl-4 ">

                            <div className="filter-type hover:bg-lime-200 p-1 rounded-md   pb-1" onClick={() => toggle(setOpenColoreFiore, openColoreFiore)}>
                                Colore
                                <div>{openColoreFiore ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                            </div>
                            {openColoreFiore && <div className="options pl-2">
                                <div className="filters">
                                    {['Arancione', 'Argento', 'Azzurro', 'Bianco', 'Blu', 'Bronzo', 'Crema', 'Giallo', 'Grigio', 'Insignificanti', 'Magenta', 'Multicolore', 'Rosa', 'Rosso', 'Verde', 'Viola', 'Violetto', 'bicolore', 'lilla', 'marrone', 'ocra', 'porpora'].map(element =>
                                        <div className='flex flex-row'>
                                            <label className="cl-checkbox flex flex-row">
                                                <input type="checkbox" id="option-one" name="option-one"
                                                    checked={Object.keys(filters["obj"]).indexOf("Fiore") !== -1 && filters["obj"]["Fiore"].indexOf(element) !== -1}
                                                    value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Fiore " + element, obj: { Fiore: [element] } })}></input>
                                                <span className='w-3/4 text-start'>{element}</span>
                                            </label>
                                        </div>)}

                                </div>
                            </div>}
                        </div>
                        <div className="collapsable-filters cursor-pointer  pl-4 ">

                            <div className="filter-type hover:bg-lime-200 p-1 rounded-md   pb-1" onClick={() => toggle(setOpenFioritura, openFioritura)}>
                                Periodo fioritura
                                <div>{openFioritura ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                            </div>
                            {openFioritura && <div className="options pl-2">
                                <div className="filters">{["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"].map((value) => (
                                    <div className='flex flex-row'>
                                        <label className="cl-checkbox">
                                            <input type="checkbox" id="option-one" name="option-one"
                                                checked={Object.keys(filters["obj"]).indexOf("Fioritura") !== -1 && filters["obj"]["Fioritura"].indexOf(value) !== -1}
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Fioritura " + value, obj: { Fioritura: [value] } })}></input>
                                            <span className='w-3/4 text-start'>{value}</span>
                                        </label>
                                    </div>
                                ))}


                                </div>
                            </div>}
                        </div>
                    </>
                    )
                }

            </div>
            <div className="collapsable-filters cursor-pointer">

                <div className="filter-type hover:bg-lime-200 p-1 rounded-md  pb-1" onClick={() => toggle(setOpenFoglia, openFoglia)}>
                    Foglia
                    <div>{openFoglia ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                </div>
                {
                    openFoglia && (<>
                        <div className="collapsable-filters cursor-pointer  pl-4 ">

                            <div className="filter-type hover:bg-lime-200 p-1 rounded-md   pb-1" onClick={() => toggle(setOpenFormaFoglia, openFormaFoglia)}>
                                Forma
                                <div>{openFormaFoglia ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                            </div>
                            {openFormaFoglia && <div className="options pl-2">
                                <div className="filters">
                                    {['Acuminata', 'Aghiforme', 'Bipennata', 'Cuoriforme(Cordata)', 'Digitata', 'Ellittica', 'Frastagliate', 'Fronda', 'Imparipennata', 'Lanceolata', 'Lineare', 'Lobata', 'Oblunga', 'Obovata', 'Ovata', 'Palmata', 'Paripennata', 'Pennatosette', 'Renifoorme', 'Rotonda', 'Sagittata', 'Squamiforme', 'Trifogliata', 'Trilobata', 'Ventaglio', 'bordoseghettato', 'spina'].map(element =>
                                        <div className='flex flex-row'>
                                            <label className="cl-checkbox">
                                                <input type="checkbox" id="option-one" name="option-one"
                                                    checked={Object.keys(filters["obj"]).indexOf("FormaFoglia") !== -1 && filters["obj"]["FormaFoglia"].indexOf(element) !== -1}
                                                    value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: element, obj: { FormaFoglia: [element] } })}></input>
                                                <span className='w-3/4 text-start'>{element}</span>
                                            </label>
                                        </div>)}

                                </div>
                            </div>}
                        </div>
                        <div className="collapsable-filters cursor-pointer  pl-4 ">

                            <div className="filter-type hover:bg-lime-200 p-1 rounded-md   pb-1" onClick={() => toggle(setOpenColoreFoglia, openColoreFoglia)}>
                                Colore
                                <div>{openColoreFoglia ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                            </div>
                            {openColoreFoglia && <div className="options pl-2">
                                <div className="filters">
                                    {['Arancione', 'Argento', 'Assenti', 'Avorio', 'Azzurro', 'Bianco', 'Bicolore', 'Bordeaux', 'Corallo', 'Crema', 'Giallo', 'Grigio', 'Marrone', 'Nero', 'Porpora', 'Rosa', 'Rosso', 'Variegate', 'Verde Scuro', 'Verde chiaro', 'Viola', 'avorio', 'blu', 'bordeaux', 'bronzo', 'marrone', 'verde brillante'].map(element =>
                                        <div className='flex flex-row'>
                                            <label className="cl-checkbox">
                                                <input type="checkbox" id="option-one" name="option-one"
                                                    checked={Object.keys(filters["obj"]).indexOf("ColoreFoglia") !== -1 && filters["obj"]["ColoreFoglia"].indexOf(element) !== -1}
                                                    value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: element, obj: { ColoreFoglia: [element] } })}></input>
                                                <span className='w-3/4 text-start'>{element}</span>
                                            </label>
                                        </div>)}

                                </div>
                            </div>}
                        </div>
                        <div className="collapsable-filters cursor-pointer  pl-4 ">

                            <div className="filter-type hover:bg-lime-200 p-1 rounded-md   pb-1" onClick={() => toggle(setOpenDimensioneFoglia, openDimensioneFoglia)}>
                                Dimensione
                                <div>{openDimensioneFoglia ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                            </div>
                            {openDimensioneFoglia && <div className="options pl-2">
                                <div className="filters">
                                    {['Extra Large', 'Grande', 'Media', 'Piccola'].map(element =>
                                        <div className='flex flex-row'>
                                            <label className="cl-checkbox">
                                                <input type="checkbox" id="option-one" name="option-one"
                                                    checked={Object.keys(filters["obj"]).indexOf("DimensioneFoglia") !== -1 && filters["obj"]["DimensioneFoglia"].indexOf(element) !== -1}
                                                    value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: element, obj: { DimensioneFoglia: [element] } })}></input>
                                                <span className='w-3/4 text-start'>{element}</span>
                                            </label>
                                        </div>)}

                                </div>
                            </div>}
                        </div>
                        <div className="collapsable-filters cursor-pointer  pl-4 ">

                            <div className="filter-type hover:bg-lime-200 p-1 rounded-md   pb-1" onClick={() => toggle(setOpenSuperficieFoglia, openSuperficieFoglia)}>
                                Superficie
                                <div>{openSuperficieFoglia ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                            </div>
                            {openSuperficieFoglia && <div className="options pl-2">
                                <div className="filters">
                                    {['Aghiforme', 'Bucata', 'Carnosa', 'Coriacea', 'Glabra', 'Increspata', 'Liscia', 'Lucida', 'Macchie', 'Opaca', 'Pungente', 'Rugosa', 'Spessa', 'Squamiforma', 'Succulenta', 'Vellutata', 'pelosa']
                                        .map(element =>
                                            <div className='flex flex-row'>
                                                <label className="cl-checkbox">
                                                    <input type="checkbox" id="option-one" name="option-one"
                                                        checked={Object.keys(filters["obj"]).indexOf("SuperficieFoglia") !== -1 && filters["obj"]["SuperficieFoglia"].indexOf(element) !== -1}
                                                        value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: element, obj: { SuperficieFoglia: [element] } })}></input>
                                                    <span className='w-3/4 text-start'>{element}</span>
                                                </label>
                                            </div>)}

                                </div>
                            </div>}
                        </div>
                    </>
                    )
                }

            </div>
            <div className="collapsable-filters cursor-pointer">

                <div className="filter-type hover:bg-lime-200 p-1 rounded-md  pb-1" onClick={() => toggle(setOpenFrutto, openFrutto)}>
                    Frutto
                    <div>{openFrutto ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                </div>
                {
                    openFrutto && (<>
                        <div className="collapsable-filters cursor-pointer  pl-4 ">

                            <div className="filter-type hover:bg-lime-200 p-1 rounded-md   pb-1" onClick={() => toggle(setOpenColoreFiore, openColoreFiore)}>
                                Colore
                                <div>{openColoreFiore ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                            </div>
                            {openColoreFiore && <div className="options pl-2">
                                <div className="filters">
                                    {['Arancione', 'Argento', 'Bianco', 'Blu', 'Blu scuro', 'Giallo', 'Marrone', 'Nero', 'Rosa', 'Rosso', 'Verde chiaro', 'Verde scuro', 'Viola', 'Violetto', 'porpora', 'verde'].map(element =>
                                        <div className='flex flex-row'>
                                            <label className="cl-checkbox flex flex-row">
                                                <input type="checkbox" id="option-one" name="option-one"
                                                    checked={Object.keys(filters["obj"]).indexOf("Frutto") !== -1 && filters["obj"]["Frutto"].indexOf(element) !== -1}
                                                    value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Frutto " + element, obj: { Frutto: [element] } })}></input>
                                                <span className='w-3/4 text-start'>{element}</span>
                                            </label>
                                        </div>)}
                                </div>
                            </div>}
                        </div>
                        <div className="collapsable-filters cursor-pointer  pl-4 ">

                            <div className="filter-type hover:bg-lime-200 p-1 rounded-md   pb-1" onClick={() => toggle(setOpenFruttificazione, openFruttificazione)}>
                                Periodo fruttificazione
                                <div>{openFruttificazione ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                            </div>
                            {openFruttificazione && <div className="options pl-2">
                                <div className="filters">{["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"].map((value) => (
                                    <div className='flex flex-row'>
                                        <label className="cl-checkbox">
                                            <input type="checkbox" id="option-one" name="option-one"
                                                checked={Object.keys(filters["obj"]).indexOf("Fruttificazione") !== -1 && filters["obj"]["Fruttificazione"].indexOf(value) !== -1}
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Fruttificazione " + value, obj: { Fruttificazione: [value] } })}></input>
                                            <span className='w-3/4 text-start'>{value}</span>
                                        </label>
                                    </div>
                                ))}


                                </div>
                            </div>}
                        </div>
                        <div className="collapsable-filters cursor-pointer  pl-4 ">

                            <div className="filter-type hover:bg-lime-200 p-1 rounded-md   pb-1" onClick={() => toggle(setOpenEdibile, openEdibile)}>
                                Frutto edibile
                                <div>{openEdibile ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                            </div>
                            {openEdibile && <div className="options pl-2">
                                <div className="filters">
                                    <div className='flex flex-row'>
                                        <div className='flex flex-row gap-1'>
                                            <ButtonSwitch className="w-1/4" selected={filters["obj"]["Edibile"]}
                                                filter={{ tag: "Frutto edibile", obj: { Edibile: true } }} handler={handleSwitchToggle} />
                                            <span className='w-3/4 '>Frutto edibile</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            }
                        </div>
                    </>
                    )
                }

            </div>
            <div className="collapsable-filters cursor-pointer">

                <div className="filter-type hover:bg-lime-200 p-1 rounded-md  pb-1" onClick={() => toggle(setOpenChioma, openChioma)}>
                    Forma della chioma
                    <div>{openChioma ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                </div>
                {
                    openChioma && (
                        <div className="options pl-2">
                            <div className="filters">
                                {['Colonnare-Fastigiata', 'Conica-Piramidale', 'Eretto', 'Espansa-Ombrellifera', 'Globosa-Ovale', 'Globosa-Sferica', 'Pendente-Piangente', 'Prostrata', 'Rampicante', 'Strisciante-Tappeto'].map(element =>
                                    <div className='flex flex-row'>
                                        <label className="cl-checkbox flex flex-row">
                                            <input type="checkbox" id="option-one" name="option-one"
                                                checked={Object.keys(filters["obj"]).indexOf("Chioma") !== -1 && filters["obj"]["Chioma"].indexOf(element) !== -1}
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Chioma " + element, obj: { Chioma: [element] } })}></input>
                                            <span className='w-3/4 text-start'>{element}</span>
                                        </label>
                                    </div>)}
                            </div>
                        </div>
                    )
                }

            </div>
            <div className="collapsable-filters cursor-pointer">

                <div className="filter-type hover:bg-lime-200 p-1 rounded-md  pb-1" onClick={() => toggle(setOpenCaratteristiche, openCaratteristiche)}>
                    Caratteristiche speciali
                    <div>{openCaratteristiche ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                </div>
                {
                    openCaratteristiche && (
                        <div className="options pl-2">
                            <div className="filters">
                                {['Acquatiche', 'Adatto a zone urbane', 'Antiossidanti', 'Api', 'Aromatiche', 'Deserto', 'Farfalle', 'Impollinatori', 'Medicinali', 'Ornamentale', 'Pet-Friendly', 'Profumate', 'Resistente inquinamento atmosferico', 'Siccità', 'Spinose', 'Uso in cucina', 'Utilizzo del legno', 'Velenose', 'uccelli'].map(element =>
                                    <div className='flex flex-row'>
                                        <label className="cl-checkbox flex flex-row">
                                            <input type="checkbox" id="option-one" name="option-one"
                                                checked={Object.keys(filters["obj"]).indexOf("Caratteristica") !== -1 && filters["obj"]["Caratteristica"].indexOf(element) !== -1}
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Caratteristica: " + element, obj: { Caratteristica: [element] } })}></input>
                                            <span className='w-3/4 text-start'>{element}</span>
                                        </label>
                                    </div>)}
                            </div>
                        </div>
                    )
                }

            </div>
            <div className="collapsable-filters cursor-pointer">

                <div className="filter-type hover:bg-lime-200 p-1 rounded-md  pb-1" onClick={() => toggle(setOpenZona, openZona)}>
                    Zona climatica USDA
                    <div>{openZona ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                </div>
                {
                    openZona && (
                        <div className="options pl-2">
                            <div className="filters">
                                {['Zona 10a = da -1.1 a +1.7', 'Zona 10b = da +1.7 a +4.4', 'Zona 11a = da +4.4 a +7.2', 'Zona 11b = da +7.2 a +10', 'Zona 12a = da +10 a +12.8', 'Zona 12b = da +12.8 a +15.6', 'Zona 13a = da +15.6 a +18.3', 'Zona 13b = da +18.3 a +21.1', 'Zona 2a = da -45.6 a -42.8', 'Zona 2b = da -42.8 a -40', 'Zona 3a = da -40 a -37.2', 'Zona 3b = da -37.2 a -34.4', 'Zona 4a = da -34.4 a -31.7', 'Zona 4b = da -31.7 a -28.9', 'Zona 5a = da -28.9 a -26.1', 'Zona 5b = da -26.1 a -23.3', 'Zona 5b = da 26.1 a -23.3', 'Zona 6a = da -23.3 a -20.6', 'Zona 6b = da -20.6 a -17.8', 'Zona 7a = da -17.8 a -15', 'Zona 7b = da -15 a -12.2', 'Zona 8a = da -12.2 a -9.4', 'Zona 8b = da -9.4 a -6.7', 'Zona 9a = da -6.7 a -3.9', 'Zona 9b = da -3.9 a -1.1'].map(element =>
                                    <div className='flex flex-row'>
                                        <label className="cl-checkbox flex flex-row">
                                            <input type="checkbox" id="option-one" name="option-one"
                                                checked={Object.keys(filters["obj"]).indexOf("Zona") !== -1 && filters["obj"]["Zona"].indexOf(element) !== -1}
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Zona: " + element, obj: { Zona: [element] } })}></input>
                                            <span className='w-3/4 text-start'>{element}</span>
                                        </label>
                                    </div>)}
                            </div>
                        </div>
                    )
                }

            </div>
            <div className=" cursor-pointer">

                <div className="filter-type hover:bg-lime-200 p-1 rounded-md  pb-1" >
                    Altro
                </div>

                <div className="collapsable-filters cursor-pointer  pl-4 ">

                    <div className="filter-type hover:bg-lime-200 p-1 rounded-md   pb-1" onClick={() => toggle(setOpenPianteMq, openPianteMq)}>
                        N° piante al mq
                        <div>{openPianteMq ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                    </div>

                    {openPianteMq && <div className="options pl-2">
                        <div className="filters">
                            {['1 / mq', '1-2/ mq', '10-15/ mq', '2-3/mq', '3-4/mq', '4-5/ mq', '6-9/mq', 'più di 5/ mq'].map(element =>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox flex flex-row">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("PianteMq") !== -1 && filters["obj"]["PianteMq"].indexOf(element) !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Piante al mq: " + element, obj: { PianteMq: [element] } })}></input>
                                        <span className='w-3/4 text-start'>{element}</span>
                                    </label>
                                </div>)}
                        </div>
                    </div>}
                </div>
                <div className="collapsable-filters cursor-pointer  pl-4 ">

                    <div className="filter-type hover:bg-lime-200 p-1 rounded-md   pb-1" onClick={() => toggle(setOpenManutenzione, openManutenzione)}>
                        Manutenzione
                        <div>{openManutenzione ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                    </div>

                    {openManutenzione && <div className="options pl-2">
                        <div className="filters">
                            {['bassa', 'media', 'alta'].map(element =>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox flex flex-row">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("Manutenzione") !== -1 && filters["obj"]["Manutenzione"].indexOf(element) !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Manutenzione: " + element, obj: { Manutenzione: [element] } })}></input>
                                        <span className='w-3/4 text-start'>{element}</span>
                                    </label>
                                </div>)}
                        </div>
                    </div>}
                </div>
                <div className="collapsable-filters cursor-pointer  pl-4 ">

                    <div className="filter-type hover:bg-lime-200 p-1 rounded-md   pb-1" onClick={() => toggle(setOpenCo2, openCo2)}>
                        Assorbimento CO2
                        <div>{openCo2 ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                    </div>

                    {openCo2 && <div className="options pl-2">
                        <div className="filters">
                            {['Basso', 'Medio', 'Alto'].map(element =>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox flex flex-row">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("Co2") !== -1 && filters["obj"]["Co2"].indexOf(element) !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Assorbimento CO2: " + element, obj: { Co2: [element] } })}></input>
                                        <span className='w-3/4 text-start'>{element}</span>
                                    </label>
                                </div>)}
                        </div>
                    </div>}
                </div>
                <div className="collapsable-filters cursor-pointer  pl-4 ">

                    <div className="filter-type hover:bg-lime-200 p-1 rounded-md   pb-1" onClick={() => toggle(setOpenSiccita, openSiccita)}>
                        Tolleranza siccità
                        <div>{openSiccita ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                    </div>

                    {openSiccita && <div className="options pl-2">
                        <div className="filters">
                            {[].map(element =>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox flex flex-row">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("Siccita") !== -1 && filters["obj"]["Siccita"].indexOf(element) !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Tolleranza siccità: " + element, obj: { Siccita: [element] } })}></input>
                                        <span className='w-3/4 text-start'>{element}</span>
                                    </label>
                                </div>)}
                        </div>
                    </div>}
                </div>
                <div className="collapsable-filters cursor-pointer  pl-4 ">

                    <div className="filter-type hover:bg-lime-200 p-1 rounded-md   pb-1" onClick={() => toggle(setOpenAlluv, openAlluv)}>
                        Tolleranza Alluvione
                        <div>{openAlluv ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                    </div>

                    {openAlluv && <div className="options pl-2">
                        <div className="filters">
                            {['No', 'Si', 'Discreta'].map(element =>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox flex flex-row">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("Alluvione") !== -1 && filters["obj"]["Alluvione"].indexOf(element) !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Tolleranza alluvione: " + element, obj: { Alluvione: [element] } })}></input>
                                        <span className='w-3/4 text-start'>{element}</span>
                                    </label>
                                </div>)}
                        </div>
                    </div>}
                </div>
                <div className="collapsable-filters cursor-pointer  pl-4 ">

                    <div className="filter-type hover:bg-lime-200 p-1 rounded-md   pb-1" onClick={() => toggle(setOpenMalattia, openMalattia)}>
                        Resistenza malattia
                        <div>{openMalattia ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                    </div>

                    {openMalattia && <div className="options pl-2">
                        <div className="filters">
                            {['Buona', 'Media', 'Alta'].map(element =>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox flex flex-row">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("Malattia") !== -1 && filters["obj"]["Malattia"].indexOf(element) !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Resistenza malattia: " + element, obj: { Malattia: [element] } })}></input>
                                        <span className='w-3/4 text-start'>{element}</span>
                                    </label>
                                </div>)}
                        </div>
                    </div>}
                </div>
                <div className="collapsable-filters cursor-pointer  pl-4 ">

                    <div className="filter-type hover:bg-lime-200 p-1 rounded-md   pb-1" onClick={() => toggle(setOpenToxic, openToxic)}>
                        Tossicità
                        <div>{openToxic ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                    </div>

                    {openToxic && <div className="options pl-2">
                        <div className="filters">
                            {[].map(element =>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox flex flex-row">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("Tossicita") !== -1 && filters["obj"]["Tossicita"].indexOf(element) !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Tossicità: " + element, obj: { Tossicita: [element] } })}></input>
                                        <span className='w-3/4 text-start'>{element}</span>
                                    </label>
                                </div>)}
                        </div>
                    </div>}
                </div>
                <div className="collapsable-filters cursor-pointer  pl-4 ">

                    <div className="filter-type hover:bg-lime-200 p-1 rounded-md   pb-1" onClick={() => toggle(setOpenGelo, openGelo)}>
                        Protezione dal gelo
                        <div>{openGelo ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                    </div>

                    {openGelo && <div className="options pl-2">
                        <div className="filters">
                            {["No","Sì", "Si in giovane età"].map(element =>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox flex flex-row">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("Gelo") !== -1 && filters["obj"]["Gelo"].indexOf(element) !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Protezione dal gelo: " + element, obj: { Gelo: [element] } })}></input>
                                        <span className='w-3/4 text-start'>{element}</span>
                                    </label>
                                </div>)}
                        </div>
                    </div>}
                </div>
                <div className="collapsable-filters cursor-pointer  pl-4 ">

                    <div className="filter-type hover:bg-lime-200 p-1 rounded-md   pb-1" onClick={() => toggle(setOpenAutoctona, openAutoctona)}>
                        Autoctona (Italia)
                        <div>{openAutoctona ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                    </div>

                    {openAutoctona && <div className="options pl-2">
                        <div className="filters">
                            {[].map(element =>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox flex flex-row">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("Autoctona") !== -1 && filters["obj"]["Autoctona"].indexOf(element) !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Autoctona: " + element, obj: { Autoctona: [element] } })}></input>
                                        <span className='w-3/4 text-start'>{element}</span>
                                    </label>
                                </div>)}
                        </div>
                    </div>}
                </div>
                <div className="collapsable-filters cursor-pointer  pl-4 ">

                    <div className="filter-type hover:bg-lime-200 p-1 rounded-md   pb-1" onClick={() => toggle(setOpenOrigine, openOrigine)}>
                        Origine
                        <div>{openOrigine ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                    </div>

                    {openOrigine && <div className="options pl-2">
                        <div className="filters">
                            {['Africa', 'America Settentrionale', 'America meridionale', 'Asia', 'Europa', 'Oceania'].map(element =>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox flex flex-row">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("Origine") !== -1 && filters["obj"]["Origine"].indexOf(element) !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Origine: " + element, obj: { Origine: [element] } })}></input>
                                        <span className='w-3/4 text-start'>{element}</span>
                                    </label>
                                </div>)}
                        </div>
                    </div>}
                </div>

            </div>
            <div className='flex flex-row gap-1'>
                <ButtonSwitch className="w-1/4" selected={filters["obj"]["Interno"]}
                    filter={{ tag: "Interno", obj: { Interno: true } }} handler={handleSwitchToggle} />
                <span className='w-3/4 '>Pianta da interno</span>
            </div>
            <div className='flex flex-row gap-1'>
                <ButtonSwitch className="w-1/4" selected={filters["obj"]["Esterno"]}
                    filter={{ tag: "Esterno", obj: { Esterno: true } }} handler={handleSwitchToggle} />
                <span className='w-3/4 '>Pianta da esterno</span>
            </div>
        </div>)
}  