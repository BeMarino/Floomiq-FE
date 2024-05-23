export default function ButtonSwitch({ name, handler, filter, filterObj  }) {
    return (
        <label className="switch">
            <input type="checkbox" onChange={(e) => handler(e, filter, filterObj)}/>
            <span className="slider">{name}</span>
        </label>
    )
}