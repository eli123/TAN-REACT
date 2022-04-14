import { Grid } from "@mui/material";
import SignUpForm from "./components/SignUpForm";

export default () => {
    
    return (
        <div>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh'}}
                >

                <Grid item xs={3} style={{border:'1px #067f7a solid', backgroundColor:'#FFF', padding:'50px', borderRadius:'4px'}}>
                <SignUpForm justifyContent="center" alignItems="center" style={{backgroundColor:'#FFF', textAlign:'center'}}/>
                </Grid>   
                
                </Grid> 
        </div>
    )
  };