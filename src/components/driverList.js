import { useGetDriversQuery } from "../store";
import Driver from "./drivers";

function DriverList() {
    const { data: drivers, error, isLoading } = useGetDriversQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            {drivers.MRData.DriverTable.Drivers.map((driver) => (
                <Driver key={driver.driverId} driver={driver} />
            ))}
        </div>
    );
}
export default DriverList;