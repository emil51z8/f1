import React from "react";
import { useSelector } from "react-redux";
import { useGetSearchDriversQuery } from "../store/apis/formular1Api";
import Driver from "./drivers";

function SearchedDriverList() {
    const searchTerm = useSelector((state) => state.searchDriver.searchTerm);
    const { data: drivers, error, isLoading } = useGetSearchDriversQuery();

    // Filter drivers based on searchTerm
    const filteredDrivers = drivers ? drivers.MRData.DriverTable.Drivers.filter(driver =>
        driver.driverId.toLowerCase().includes(searchTerm.toLowerCase())
        || driver.givenName.toLowerCase().includes(searchTerm.toLowerCase())
        || driver.familyName.toLowerCase().includes(searchTerm.toLowerCase())
    ) : [];

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}
            {filteredDrivers.map(driver => (
                <Driver key={driver.driverId} driver={driver} />
            ))}
        </div>
    );
}

export default SearchedDriverList;