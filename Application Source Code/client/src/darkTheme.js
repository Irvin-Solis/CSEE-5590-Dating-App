import { createTheme } from "@mui/material/styles";
export default function DarkTheme(darkState) {
    const palletType = darkState ? "dark" : "light";
    const backgroundColor = darkState ? "#0A1928" : "#ffffff";
    const backgroundColor2 = darkState ? "#0A1928" : "#ededed";
    const textColor=!darkState? "#0A1928" : "#ffffff";
    return createTheme({
        palette: {
            mode: palletType,
            primary: {
                main: textColor,
                textColor: textColor
            },
            secondary: {
                main: '#351c75',
            },
            background: {
                default: backgroundColor2,
                paper: backgroundColor
            },
            text:{
                primary: textColor,
            }
        }
    });
}