const Filter = ({ filter, setFilter, setSort}) => {
    return (
        <div className="filter">
            <h2>Filter</h2>
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todos</option>
                        <option value="Completed">Completas</option>
                        <option value="Incompletas">Incompletas</option>
                    </select>
                </div>
                <div>
                    <p>Orden Alfabética</p>
                    <button onClick={() => setSort("Asc")}>Asc</button>
                    <button onClick={() => setSort("Desc")}>Desc</button>
                </div>
            </div>
        </div>
    );
};

export default Filter;