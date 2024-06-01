function ButtonSwitch({ name, handler, filter, filterObj, selected }) {
    return (
        <label className="switch">
            <input type="checkbox" checked={selected === true} onChange={(e) => handler(e, filter, filterObj)} />
            <span className="slider">{name}</span>
        </label>
    )
}

export default ButtonSwitch;