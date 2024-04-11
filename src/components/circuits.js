function Circuits({circuit}) {
    return (
        <div className="card">
                <div className="card-content">
                    <div className="content">
                        <p><strong>Circuit:</strong> {circuit.circuitName}</p>
                        <p><strong>Locality:</strong> {circuit.Location.locality}</p>
                        <p><strong>Country:</strong> {circuit.Location.country}</p>
                        </div>
        </div>
    </div>
    )
}

export default Circuits;