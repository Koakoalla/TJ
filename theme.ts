import {createTheme} from "@material-ui/core"
import { red } from "@material-ui/core/colors";

export const theme =createTheme({
   overrides: {
       MuiButton:{
           root: {
               borderRadius:'8px',
           },
        contained: {
            backgroundColor: 'white',
            boxShadow:
              '0 1px 1px rgb(0 0 0 / 15%)',
            '&:hover': {
              backgroundColor: 'white',
              boxShadow:
                '0 1px 1px rgb(0 0 0 / 82%)',
            },
    
        },
    },
},
});