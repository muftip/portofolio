import React from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";

function PortfolioBlock(props) {
   const { image, live, source, title } = props;
   return (
      <Box 
         display="flex" 
         flexDirection="column" 
         justifyContent="center" 
         alignItems="center" 
         mt={8} // Margin top untuk memberi space dari navbar
      >
         <Box 
            component="img" 
            src={image} 
            alt="mockup" 
            sx={{ width: '100%', maxWidth: '800px', objectFit: 'contain', mb: 2 }} 
         />
         <h1 style={{ fontSize: '2rem', textAlign: 'center' }}>{title}</h1>

         <Box 
            className="portfolio" 
            display="flex" 
            flexDirection="column" 
            gap="0.5rem"
            alignItems="center" 
            fontSize="1.5rem" 
            py="2rem"
         >
            <Box 
               p={1} 
               border="2px solid black" 
               borderRadius="25px"
            >
               <IconLink link={source} title="Source Code" icon="fa fa-code" />
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;
