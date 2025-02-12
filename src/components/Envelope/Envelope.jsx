import { useState } from "react";
import { Box, Typography, Paper } from "@mui/material";

const Envelope = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        width: 200,
        height: 100,
        margin: "auto",
        cursor: "pointer",
        mt: 10,
        transition: "box-shadow 500ms ease-in-out",
        "&:hover": {
          boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        },
      }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <Paper
        elevation={3}
        sx={{
          position: "absolute",
          bottom: isOpen ? "100px" : "0",
          left: "7px",
          width: 170,
          height: 90,
          backgroundColor: "#fff",
          textAlign: "center",
          padding: 1,
          borderRadius: 1,
          transition: "bottom 600ms ease-in-out, opacity 300ms ease-in-out",
          opacity: isOpen ? 1 : 0, // Se oculta cuando el sobre está cerrado
          zIndex: isOpen ? 10 : -1, // Solo se pone encima cuando está abierto
        }}
      >
        <Typography variant="body1">💌 Secret message</Typography>
        <Typography variant="body2">
          Would you like to do something for Valentine's Day?
        </Typography>
      </Paper>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          borderLeft: "100px solid transparent",
          borderRight: "100px solid transparent",
          borderTop: "60px solid #F28599",
          transform: isOpen ? "rotateX(180deg)" : "rotateX(0deg)",
          transformOrigin: "top center",
          transition: "transform 500ms ease-in-out",
          zIndex: 5,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          borderBottom: "40px solid #F28599",
          borderRight: "100px solid #F28599",
          borderLeft: "100px solid #F28599",
          borderTop: "60px solid transparent",
          zIndex: 8,
        }}
      />
    </Box>
  );
};

export default Envelope;
