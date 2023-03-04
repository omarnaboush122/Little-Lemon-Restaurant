import { useState } from "react";
import Form from "../components/reservations/Form";
import ReservationMain from "../components/reservations/ReservationMain";
import Confirmation from "../confirmation/Confirmation";

const Reservations = () => {
  const [isRevserved, setIsReserved] = useState(true);
  return (
    <main>
      {isRevserved ? (
        <Confirmation />
      ) : (
        <>
          <ReservationMain />
          <Form isRevserved={isRevserved} />
        </>
      )}
    </main>
  );
};

export default Reservations;
