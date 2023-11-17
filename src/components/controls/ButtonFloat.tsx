import Add from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import { useTheme } from "@mui/material/styles";
import { type FC } from "react";

interface ButtonFloatProps {
  handleClick: () => void;
}

const ButtonFloat: FC<ButtonFloatProps> = ({ handleClick }) => {
  const theme = useTheme();

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <Zoom
      in={true}
      timeout={transitionDuration}
      style={{
        transitionDelay: `300ms`,
      }}
      mountOnEnter
      unmountOnExit
    >
      <Fab
        aria-label="add"
        color="primary"
        onClick={handleClick}
        className="absolute bottom-5 right-5"
      >
        <Add />
      </Fab>
    </Zoom>
  );
};

export default ButtonFloat;
