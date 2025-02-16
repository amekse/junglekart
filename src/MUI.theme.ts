import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#2E7D32", // Jungle Green
        dark: "#1B5E20", // Deep Forest Green
        light: "#4CAF50", // Vibrant Leaf Green
        contrastText: "#F5F5DC", // Beige for contrast (Tree bark tone)
      },
      secondary: {
        main: "#FFB300", // Tropical Sun Yellow
        dark: "#FF8F00", // Deep Sunset Orange
        light: "#FFD54F", // Warm Sunshine Glow
        contrastText: "#1E1E1E", // Dark text for contrast
      },
      success: {
        main: "#388E3C", // Rich Green (Lush Canopy)
        dark: "#2E7D32", // Dense Foliage
        light: "#66BB6A", // Fresh Green Leaves
        contrastText: "#F5F5DC", // Beige
      },
      error: {
        main: "#D84315", // Burnt Orange (Jungle Wood)
        dark: "#BF360C", // Darker Tree Bark
        light: "#FF7043", // Warm Rustic Hue
        contrastText: "#F5F5F5", // Light Contrast
      },
      warning: {
        main: "#FFA726", // Bright Orange (Wild Fruits)
        dark: "#F57C00", // Ripe Mango
        light: "#FFCC80", // Muted Tropical Glow
        contrastText: "#1E1E1E", // Dark Text
      },
      info: {
        main: "#0288D1", // Amazon River Blue
        dark: "#01579B", // Deep Lagoon
        light: "#29B6F6", // Bright Clear Sky
        contrastText: "#F5F5F5",
      },
      text: {
        primary: "#E0F2F1", // Light Teal (Moonlit Leaves)
        secondary: "#B2DFDB", // Faded Light Green
        disabled: "#4E6D6A", // Muted Jungle Fog
      },
      background: {
        default: "#102820", // Deep Jungle Night
        paper: "#1C3D2D", // Dark Green Canopy Shade
      },
      divider: "#4A6D57", // Mossy Green
    },
});

export default theme;