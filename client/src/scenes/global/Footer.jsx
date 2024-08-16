import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            <img src="logo.png" alt="logo" color="black" style={{
            width: '150px'
          }}/>
          </Typography>
          <div>
          Kicks, Inc. is a leading footwear and apparel retailer that unlocks the “inner sneakerhead” in all of us. With approximately 2,500 retail stores in 26 countries across North America, Europe, Asia, Australia, and New Zealand, and a licensed store presence in the Middle East and Asia, Foot Locker, Inc. has a strong history of sneaker authority that sparks discovery and ignites the power of sneaker culture through its portfolio of brands, including Foot Locker, Kids Foot Locker, Champs Sports, WSS, and atmos. 
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            JagatJung Marg, Kathmandu, Bagmati.
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: kicks.inc@gmail.com
          </Typography>
          <Typography mb="30px">(+977)981-1020102</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;