import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import { getBookedDatesByCabinId, getSettings } from "../_lib/apiService";

const Reservation = async ({ cabin }) => {
  const { id } = await cabin;

  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(id),
  ]);

  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-100">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      <ReservationForm cabin={cabin} />
    </div>
  );
};
export default Reservation;
