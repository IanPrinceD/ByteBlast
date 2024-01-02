import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        sx={{ padding: "4rem", backgroundColor: "black" }}
      >
        <Grid item xs={2}>
          <Item sx={{ backgroundColor: "black", color: "white" }}>
            <Typography variant="h4" gutterBottom>
              Exclusive
            </Typography>
            <Typography variant="h6">Subscribe</Typography>
            <Typography variant="h6">Get 10% off your first order</Typography>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{ backgroundColor: "black", color: "white" }}>
            <Typography variant="h4" gutterBottom>
              Support
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{ backgroundColor: "black", color: "white" }}>
            <Typography variant="h4" gutterBottom>
              Account
            </Typography>
            <Typography variant="h6">My Account</Typography>
            <Typography variant="h6">Login/Register</Typography>
            <Typography variant="h6">Cart</Typography>
            <Typography variant="h6">Wishlist</Typography>
            <Typography variant="h6">Shop</Typography>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{ backgroundColor: "black", color: "white" }}>
            <Typography variant="h4" gutterBottom>
              Quick Link
            </Typography>
            <Typography variant="h6">Privacy Policy</Typography>
            <Typography variant="h6">Terms of Use</Typography>
            <Typography variant="h6">FAQ</Typography>
            <Typography variant="h6">Contact</Typography>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{ backgroundColor: "black", color: "white" }}>
            <Typography variant="h4" gutterBottom>
              Download App
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
