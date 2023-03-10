import { useState } from "react";
import Form from "../components/reservations/Form";
import ReservationMain from "../components/reservations/ReservationMain";
import Confirmation from "../components/confirmation/Confirmation";

const Reservations = () => {
  const [isReserved, setIsReserved] = useState(false);

  return (
    <main>
      {isReserved ? (
        <Confirmation />
      ) : (
        <>
          <ReservationMain />
          <Form isReserved={isReserved} setIsReserved={setIsReserved} />
        </>
      )}
    </main>
  );
};

export default Reservations;
