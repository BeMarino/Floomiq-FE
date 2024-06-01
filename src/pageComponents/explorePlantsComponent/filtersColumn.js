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
    const [openUtilizzo, setOpenUtilizzo] = useState(false);
    const [openFiore, setOpenFiore] = useState(false);
    const [openFioritura, setOpenFioritura] = useState(false);
    const [openColoreFiore, setOpenColoreFiore] = useState(false);
    const [openFoglia, setOpenFoglia] = useState(false);
    const [openFrutto, setOpenFrutto] = useState(false);
    const [openChioma, setOpenChioma] = useState(false);
    const [openCaratteristiche, setOpenCaratteristiche] = useState(false);
    const [openEdibile, setOpenEdibile] = useState(false);

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
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("TipoPianta") !== -1 && filters["obj"]["TipoPianta"].indexOf("Arbusto") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Arbusto", obj: { TipoPianta: ["Arbusto"] } })}></input>
                                        <span className='w-3/4 text-start'>Arbusto</span>
                                    </label>
                                </div>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("TipoPianta") !== -1 && filters["obj"]["TipoPianta"].indexOf("Rampicante") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Rampicante", obj: { TipoPianta: ["Rampicante"] } })}></input>
                                        <span className='w-3/4 text-start'>Rampicante</span>
                                    </label>
                                </div>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("TipoPianta") !== -1 && filters["obj"]["TipoPianta"].indexOf("Erbacea") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Erbacea", obj: { TipoPianta: ["Erbacea"] } })}></input>
                                        <span className='w-3/4 text-start'>Erbacea</span>
                                    </label>
                                </div>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("TipoPianta") !== -1 && filters["obj"]["TipoPianta"].indexOf("Graminacea") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Graminacea", obj: { TipoPianta: ["Graminacea"] } })}></input>
                                        <span className='w-3/4 text-start'>Graminacea</span>
                                    </label>
                                </div>

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
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Argilloso", obj: { Terreno: ["Argilloso"] } })}></input>
                                            <span className='w-3/4 text-start'>Argilloso</span>
                                        </label>
                                    </div>
                                    <div className='flex flex-row'>
                                        <label className="cl-checkbox">
                                            <input type="checkbox" id="option-one" name="option-one"
                                                checked={Object.keys(filters["obj"]).indexOf("Terreno") !== -1 && filters["obj"]["Terreno"].indexOf("Limoso") !== -1}
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Limoso", obj: { Terreno: ["Limoso"] } })}></input>
                                            <span className='w-3/4 text-start'>Limoso</span>
                                        </label>
                                    </div>
                                    <div className='flex flex-row'>
                                        <label className="cl-checkbox">
                                            <input type="checkbox" id="option-one" name="option-one"
                                                checked={Object.keys(filters["obj"]).indexOf("Terreno") !== -1 && filters["obj"]["Terreno"].indexOf("Calcareo") !== -1}
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Calcareo", obj: { Terreno: ["Calcareo"] } })}></input>
                                            <span className='w-3/4 text-start'>Calcareo</span>
                                        </label>
                                    </div>
                                    <div className='flex flex-row'>
                                        <label className="cl-checkbox">
                                            <input type="checkbox" id="option-one" name="option-one"
                                                checked={Object.keys(filters["obj"]).indexOf("Terreno") !== -1 && filters["obj"]["Terreno"].indexOf("Sabbioso") !== -1}
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Sabbioso", obj: { Terreno: ["Sabbioso"] } })}></input>
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
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Neutro", obj: { PhTerreno: ["Neutro"] } })}></input>
                                            <span className='w-3/4 text-start'>Neutro</span>
                                        </label>
                                    </div>
                                    <div className='flex flex-row'>
                                        <label className="cl-checkbox">
                                            <input type="checkbox" id="option-one" name="option-one"
                                                checked={Object.keys(filters["obj"]).indexOf("PhTerreno") !== -1 && filters["obj"]["PhTerreno"].indexOf("Acido") !== -1}
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Acido", obj: { PhTerreno: ["Acido"] } })}></input>
                                            <span className='w-3/4 text-start'>Acido</span>
                                        </label>
                                    </div>
                                    <div className='flex flex-row'>
                                        <label className="cl-checkbox">
                                            <input type="checkbox" id="option-one" name="option-one"
                                                checked={Object.keys(filters["obj"]).indexOf("PhTerreno") !== -1 && filters["obj"]["PhTerreno"].indexOf("Alcalino") !== -1}
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Alcalino", obj: { PhTerreno: ["Alcalino"] } })}></input>
                                            <span className='w-3/4 text-start'>Alcalino</span>
                                        </label>
                                    </div>
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
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("UtilizzoIdeale") !== -1 && filters["obj"]["UtilizzoIdeale"].indexOf("Giardino costiero") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Giardino costiero", obj: { UtilizzoIdeale: ["Giardino costiero"] } })}></input>
                                        <span className='w-3/4 text-start'>Giardino costiero</span>
                                    </label>
                                </div>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("UtilizzoIdeale") !== -1 && filters["obj"]["UtilizzoIdeale"].indexOf("Vaso") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Vaso", obj: { UtilizzoIdeale: ["Vaso"] } })}></input>
                                        <span className='w-3/4 text-start'>Vaso</span>
                                    </label>
                                </div>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("UtilizzoIdeale") !== -1 && filters["obj"]["UtilizzoIdeale"].indexOf("Laghetto") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Laghetto", obj: { UtilizzoIdeale: ["Laghetto"] } })}></input>
                                        <span className='w-3/4 text-start'>Laghetto</span>
                                    </label>
                                </div>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("UtilizzoIdeale") !== -1 && filters["obj"]["UtilizzoIdeale"].indexOf("Piena terra") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Piena terra", obj: { UtilizzoIdeale: ["Piena terra"] } })}></input>
                                        <span className='w-3/4 text-start'>Piena terra</span>
                                    </label>
                                </div>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("UtilizzoIdeale") !== -1 && filters["obj"]["UtilizzoIdeale"].indexOf("Fioriera") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Fioriera", obj: { UtilizzoIdeale: ["Fioriera"] } })}></input>
                                        <span className='w-3/4 text-start'>Fioriera</span>
                                    </label>
                                </div>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("UtilizzoIdeale") !== -1 && filters["obj"]["UtilizzoIdeale"].indexOf("Bordure") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Bordure", obj: { UtilizzoIdeale: ["Bordure"] } })}></input>
                                        <span className='w-3/4 text-start'>Bordure</span>
                                    </label>
                                </div>

                            </div>
                        </div>
                    )
                }

            </div>
            {/* <div className="collapsable-filters cursor-pointer">

                <div className="filter-type hover:bg-lime-200 p-1 rounded-md  pb-1" onClick={() => toggle(setOpenFiore, openFiore)}>
                    Fiore
                    <div>{openFiore ? <IoIosArrowUp /> : <IoIosArrowDown/>}</div>

                </div>
                {
                    openFiore && (
                        <div className="options pl-2">
                            <div className="filters">
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("TipoPianta") !== -1 && filters["obj"]["TipoPianta"].indexOf("Arbusto") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Arbusto", obj: { TipoPianta: ["Arbusto"] } })}></input>
                                        <span className='w-3/4 text-start'>Arbusto</span>
                                    </label>
                                </div>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("TipoPianta") !== -1 && filters["obj"]["TipoPianta"].indexOf("Rampicante") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Rampicante", obj: { TipoPianta: ["Rampicante"] } })}></input>
                                        <span className='w-3/4 text-start'>Rampicante</span>
                                    </label>
                                </div>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("TipoPianta") !== -1 && filters["obj"]["TipoPianta"].indexOf("Erbacea") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Erbacea", obj: { TipoPianta: ["Erbacea"] } })}></input>
                                        <span className='w-3/4 text-start'>Erbacea</span>
                                    </label>
                                </div>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("TipoPianta") !== -1 && filters["obj"]["TipoPianta"].indexOf("Graminacea") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Graminacea", obj: { TipoPianta: ["Graminacea"] } })}></input>
                                        <span className='w-3/4 text-start'>Graminacea</span>
                                    </label>
                                </div>

                            </div>
                        </div>
                    )
                }

            </div> */}
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
                                    <div className='flex flex-row'>
                                        <label className="cl-checkbox flex flex-row">
                                            <input type="checkbox" id="option-one" name="option-one"
                                                checked={Object.keys(filters["obj"]).indexOf("Foglia") !== -1 && filters["obj"]["Foglia"].indexOf("Verde") !== -1}
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Foglia Verde", obj: { Foglia: ["Verde"] } })}></input>
                                            <span className='w-3/4 text-start'>Verde</span>
                                        </label>
                                    </div>
                                    <div className='flex flex-row'>
                                        <label className="cl-checkbox">
                                            <input type="checkbox" id="option-one" name="option-one"
                                                checked={Object.keys(filters["obj"]).indexOf("Foglia") !== -1 && filters["obj"]["Foglia"].indexOf("Marrone") !== -1}
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Foglia Marrone", obj: { Foglia: ["Marrone"] } })}></input>
                                            <span className='w-3/4 text-start'>Marrone</span>
                                        </label>
                                    </div>
                                    <div className='flex flex-row'>
                                        <label className="cl-checkbox">
                                            <input type="checkbox" id="option-one" name="option-one"
                                                checked={Object.keys(filters["obj"]).indexOf("Foglia") !== -1 && filters["obj"]["Foglia"].indexOf("Rossa") !== -1}
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Foglia Rossa", obj: { Foglia: ["Rossa"] } })}></input>
                                            <span className='w-3/4 text-start'>Rosso</span>
                                        </label>
                                    </div>
                                    <div className='flex flex-row'>
                                        <label className="cl-checkbox">
                                            <input type="checkbox" id="option-one" name="option-one"
                                                checked={Object.keys(filters["obj"]).indexOf("Foglia") !== -1 && filters["obj"]["Foglia"].indexOf("Arancione") !== -1}
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Foglia Arancione", obj: { Foglia: ["Arancione"] } })}></input>
                                            <span className='w-3/4 text-start'>Arancione</span>
                                        </label>
                                    </div>
                                    <div className='flex flex-row'>
                                        <label className="cl-checkbox">
                                            <input type="checkbox" id="option-one" name="option-one"
                                                checked={Object.keys(filters["obj"]).indexOf("Foglia") !== -1 && filters["obj"]["Foglia"].indexOf("Gialla") !== -1}
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Gialla", obj: { Foglia: ["Gialla"] } })}></input>
                                            <span className='w-3/4 text-start'>Giallo</span>
                                        </label>
                                    </div>

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
                    Forma della foglia
                    <div>{openFoglia ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                </div>
                {
                    openFoglia && (
                        <div className="options pl-2">
                            <div className="filters">
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("FormaFoglia") !== -1 && filters["obj"]["FormaFoglia"].indexOf("Ovata") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Ovata", obj: { FormaFoglia: ["Ovata"] } })}></input>
                                        <span className='w-3/4 text-start'>Ovata</span>
                                    </label>
                                </div>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("FormaFoglia") !== -1 && filters["obj"]["FormaFoglia"].indexOf("Aghiforme") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Aghiforme", obj: { FormaFoglia: ["Aghiforme"] } })}></input>
                                        <span className='w-3/4 text-start'>Aghiforme</span>
                                    </label>
                                </div>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("FormaFoglia") !== -1 && filters["obj"]["FormaFoglia"].indexOf("Cuoriforme") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Cuoriforme", obj: { FormaFoglia: ["Cuoriforme"] } })}></input>
                                        <span className='w-3/4 text-start'>Cuoriforme</span>
                                    </label>
                                </div>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("FormaFoglia") !== -1 && filters["obj"]["FormaFoglia"].indexOf("Ellittica") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Ellittica", obj: { FormaFoglia: ["Ellittica"] } })}></input>
                                        <span className='w-3/4 text-start'>Ellittica</span>
                                    </label>
                                </div>

                            </div>
                        </div>
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
                                    <div className='flex flex-row'>
                                        <label className="cl-checkbox flex flex-row">
                                            <input type="checkbox" id="option-one" name="option-one"
                                                checked={Object.keys(filters["obj"]).indexOf("Foglia") !== -1 && filters["obj"]["Foglia"].indexOf("Verde") !== -1}
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Foglia Verde", obj: { Foglia: ["Verde"] } })}></input>
                                            <span className='w-3/4 text-start'>Verde</span>
                                        </label>
                                    </div>
                                    <div className='flex flex-row'>
                                        <label className="cl-checkbox">
                                            <input type="checkbox" id="option-one" name="option-one"
                                                checked={Object.keys(filters["obj"]).indexOf("Foglia") !== -1 && filters["obj"]["Foglia"].indexOf("Marrone") !== -1}
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Foglia Marrone", obj: { Foglia: ["Marrone"] } })}></input>
                                            <span className='w-3/4 text-start'>Marrone</span>
                                        </label>
                                    </div>
                                    <div className='flex flex-row'>
                                        <label className="cl-checkbox">
                                            <input type="checkbox" id="option-one" name="option-one"
                                                checked={Object.keys(filters["obj"]).indexOf("Foglia") !== -1 && filters["obj"]["Foglia"].indexOf("Rossa") !== -1}
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Foglia Rossa", obj: { Foglia: ["Rossa"] } })}></input>
                                            <span className='w-3/4 text-start'>Rosso</span>
                                        </label>
                                    </div>
                                    <div className='flex flex-row'>
                                        <label className="cl-checkbox">
                                            <input type="checkbox" id="option-one" name="option-one"
                                                checked={Object.keys(filters["obj"]).indexOf("Foglia") !== -1 && filters["obj"]["Foglia"].indexOf("Arancione") !== -1}
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Foglia Arancione", obj: { Foglia: ["Arancione"] } })}></input>
                                            <span className='w-3/4 text-start'>Arancione</span>
                                        </label>
                                    </div>
                                    <div className='flex flex-row'>
                                        <label className="cl-checkbox">
                                            <input type="checkbox" id="option-one" name="option-one"
                                                checked={Object.keys(filters["obj"]).indexOf("Foglia") !== -1 && filters["obj"]["Foglia"].indexOf("Gialla") !== -1}
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Gialla", obj: { Foglia: ["Gialla"] } })}></input>
                                            <span className='w-3/4 text-start'>Giallo</span>
                                        </label>
                                    </div>
                                    <div className='flex flex-row'>
                                        <label className="cl-checkbox">
                                            <input type="checkbox" id="option-one" name="option-one"
                                                checked={Object.keys(filters["obj"]).indexOf("Foglia") !== -1 && filters["obj"]["Foglia"].indexOf("Viola") !== -1}
                                                value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Viola", obj: { Foglia: ["Viola"] } })}></input>
                                            <span className='w-3/4 text-start'>Viola</span>
                                        </label>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        <div className="collapsable-filters cursor-pointer  pl-4 ">

                            <div className="filter-type hover:bg-lime-200 p-1 rounded-md   pb-1" onClick={() => toggle(setOpenFioritura, openFioritura)}>
                                Periodo fruttificazione
                                <div>{openFioritura ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>

                            </div>
                            {openFioritura && <div className="options pl-2">
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
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("Chioma") !== -1 && filters["obj"]["Chioma"].indexOf("Espansa") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Chioma Espansa", obj: { Chioma: ["Espansa"] } })}></input>
                                        <span className='w-3/4 text-start'>Espansa</span>
                                    </label>
                                </div>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("Chioma") !== -1 && filters["obj"]["Chioma"].indexOf("Rampicante") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Chioma Rampicante", obj: { Chioma: ["Rampicante"] } })}></input>
                                        <span className='w-3/4 text-start'>Rampicante</span>
                                    </label>
                                </div>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("Chioma") !== -1 && filters["obj"]["Chioma"].indexOf("Conica") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Chioma Conica", obj: { Chioma: ["Conica"] } })}></input>
                                        <span className='w-3/4 text-start'>Conica</span>
                                    </label>
                                </div>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("Chioma") !== -1 && filters["obj"]["Chioma"].indexOf("Piramidale") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Chioma Piramidale", obj: { Chioma: ["Piramidale"] } })}></input>
                                        <span className='w-3/4 text-start'>Piramidale</span>
                                    </label>
                                </div>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("Chioma") !== -1 && filters["obj"]["Chioma"].indexOf("Eretta") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Chioma Eretta", obj: { Chioma: ["Eretta"] } })}></input>
                                        <span className='w-3/4 text-start'>Eretta</span>
                                    </label>
                                </div>

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
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("TipoPianta") !== -1 && filters["obj"]["TipoPianta"].indexOf("Arbusto") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Arbusto", obj: { TipoPianta: ["Arbusto"] } })}></input>
                                        <span className='w-3/4 text-start'>Arbusto</span>
                                    </label>
                                </div>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("TipoPianta") !== -1 && filters["obj"]["TipoPianta"].indexOf("Rampicante") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Rampicante", obj: { TipoPianta: ["Rampicante"] } })}></input>
                                        <span className='w-3/4 text-start'>Rampicante</span>
                                    </label>
                                </div>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("TipoPianta") !== -1 && filters["obj"]["TipoPianta"].indexOf("Erbacea") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Erbacea", obj: { TipoPianta: ["Erbacea"] } })}></input>
                                        <span className='w-3/4 text-start'>Erbacea</span>
                                    </label>
                                </div>
                                <div className='flex flex-row'>
                                    <label className="cl-checkbox">
                                        <input type="checkbox" id="option-one" name="option-one"
                                            checked={Object.keys(filters["obj"]).indexOf("TipoPianta") !== -1 && filters["obj"]["TipoPianta"].indexOf("Graminacea") !== -1}
                                            value="option-one" onChange={(e) => handleCheckboxClick(e, { tag: "Graminacea", obj: { TipoPianta: ["Graminacea"] } })}></input>
                                        <span className='w-3/4 text-start'>Graminacea</span>
                                    </label>
                                </div>

                            </div>
                        </div>
                    )
                }

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