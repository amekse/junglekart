import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3A6844", // Deeper, richer green
      dark: "#2E5235", // Stronger contrast
      light: "#8FCF8B", // Brighter highlight
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#4A5F4D", // Darker muted green for better contrast
      dark: "#334736", // Deep tone for emphasis
      light: "#98B59A", // Softer highlight
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#58A063", // More vibrant green
      dark: "#3D7245", // Deeper contrast
      light: "#A5E0A8", // Brighter success tint
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#C05656", // Richer, deeper red
      dark: "#8E4040", // More contrast
      light: "#E69A9A", // Stronger pastel tint
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#C49A40", // More vibrant gold
      dark: "#93742E", // Stronger contrast
      light: "#E8C882", // Softer highlight
      contrastText: "#1E1E1E",
    },
    info: {
      main: "#4F8655", // Stronger greenish info tone
      dark: "#3D6844", // More contrast
      light: "#94C79C", // Brighter info tone
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#1E2A22", // Darker for better readability
      secondary: "#4A5F4D", // Deeper for stronger contrast
      disabled: "#869E8C", // More visible muted text
    },
    background: {
      default: "#EDF7E6", // Slightly more contrast from white
      paper: "#F0F5EC", // Subtle depth without looking washed out
    },
    divider: "#BCC9B9", // Slightly deeper contrast
    action: {
      active: "#2E5235", // Stronger deep green
      hover: "#8FCF8B", // More distinct hover effect
      selected: "#58A063", // Stronger selection color
      disabled: "#869E8C", // More readable disabled state
      disabledBackground: "#DDE7DA", // Less washed-out background
    },
  },
});

export default theme;