import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#388E3C", // Rich Jungle Green
      dark: "#2E7D32", // Dense Canopy
      light: "#66BB6A", // Fresh Leaf Green
      contrastText: "#FFFFFF", // White for readability
    },
    secondary: {
      main: "#FBC02D", // Bright Sunlight Yellow
      dark: "#F9A825", // Golden Sunset
      light: "#FFECB3", // Soft Warm Glow
      contrastText: "#1E1E1E", // Dark Text for contrast
    },
    success: {
      main: "#4CAF50", // Vibrant Jungle Green
      dark: "#388E3C", // Deeper Forest Green
      light: "#81C784", // Soft Leafy Green
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#E64A19", // Earthy Clay Red
      dark: "#D84315", // Deep Terracotta
      light: "#FF8A65", // Soft Sunset Hue
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#FFA726", // Tropical Orange
      dark: "#FB8C00", // Ripe Mango
      light: "#FFD54F", // Soft Sunshine Yellow
      contrastText: "#1E1E1E",
    },
    info: {
      main: "#039BE5", // Clear Sky Blue
      dark: "#0288D1", // Amazon River Blue
      light: "#81D4FA", // Light Airy Blue
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#1E3A2A", // Dark Green (Readable on Light BG)
      secondary: "#4A6D57", // Mossy Green
      disabled: "#A0B9A6", // Muted Green Fog
    },
    background: {
      default: "#FAF3E0", // Soft Warm Beige (Jungle Sand)
      paper: "#FFF7E1", // Light Paper Tone
    },
    divider: "#BDB76B", // Earthy Bamboo Yellow
  },
});

export default theme;