import { createMuiTheme} from "@material-ui/core";
const arcBlue = "#FFFFFF";
const arcDark = "#424242"
const arcGem = "#A6C0FE"
const arcRad = "#745AE7"
export default createMuiTheme({
  palette: {
    common: {
      arcBlue: `${arcBlue}`,
      arcDark: `${arcDark}`
    },
    primary : {
      main: `${arcBlue}`
    },
    secondary: {
      main: `${arcDark}`
    },
    gem : {
      main : `${arcGem}`
    },
    rad : {
      main : `${arcRad}`
    }
  },
  typography : {
    h5 : {
      fontWeight : 400
    }
  }
});