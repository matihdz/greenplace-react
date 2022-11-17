import { useCallback, useMemo } from "react";
import Joyride, { STATUS } from "react-joyride";
import { useSelector } from "react-redux";

const joyrideStyles = {
  options: {
    zIndex: 999999999,
  },
};

export const useTour = () => {
  const steps = useSelector((state) => state.tour.steps);
  const handleJoyrideCallback = useCallback(() => {
    (data) => {
      const { status } = data;
      const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];

      if (finishedStatuses.includes(status)) {
        // do something
        // alert('Tour finished!');
      }
    };
  }, []);

  const tour = useMemo(
    () => (
      <Joyride
        callback={handleJoyrideCallback}
        continuous
        run
        scrollToFirstStep
        showProgress
        showSkipButton
        steps={steps}
        locale={{
          back: "Atrás",
          next: "Siguiente",
          last: "Finalizar",
          skip: "Omitir",
        }}
        styles={joyrideStyles}
      />
    ),
    [steps, handleJoyrideCallback]
  );

  return tour;
};
