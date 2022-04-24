import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  margin: "2px",
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "transparent",
  flexDirection: "row-reverse",
  padding: theme.spacing(0.1),
  margin: theme.spacing(0.1),

  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0.14),
  fontSize: "7px",
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions({ summary, details, id }) {
  const [expanded, setExpanded] = React.useState(0);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        padding: "1px",
        margin: "2px",
      }}
    >
      <Accordion expanded={expanded === id} onChange={handleChange(id)}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography
            style={{
              fontSize: "18px",
              fontWeight: 500,
              color: "#121420",
              margin: "5px",
            }}
          >
            {summary}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{
              fontSize: "16px",
              fontWeight: 400,
              color: "rgba(27, 36, 50, 0.8)",
              fontFamily: "DM Sans",
              margin: "5px",
            }}
          >
            {details}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
