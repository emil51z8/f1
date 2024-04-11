function drivers({driver}){
    return(
            <div className="card">
                <div className="card-content">
                    <div className="content">
                        <p><strong>DriverID:</strong> {driver.driverId}</p>
                        <p><strong>First name:</strong> {driver.givenName}</p>
                        <p><strong>Last name:</strong> {driver.familyName}</p>
                        <p><strong>Country:</strong> {driver.nationality}</p>
                        <p><strong>Date of birth:</strong> {driver.dateOfBirth}</p>
                        </div>
        </div>
    </div>
    );
}

export default drivers;