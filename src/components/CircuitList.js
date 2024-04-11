import { useGetCircuitsQuery } from "../store";
import Circuit from "./circuits";

function CircuitList() {
    const { data: circuits, error, isLoading } = useGetCircuitsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            {circuits.MRData.CircuitTable.Circuits.map((circuit) => (
                <Circuit key={circuit.circuitId} circuit={circuit} />
            ))}
        </div>
    );
}
export default CircuitList;