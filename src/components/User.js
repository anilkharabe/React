import { useState } from "react";
import React from "react";
import { Card, Typography, Button, Box } from "@mui/material";

const User = (props) => {
  const { name } = props;
  const [count, setCount] = useState(0);
  console.log('child render called');
  
  return (
    <Card sx={{ padding: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Name: {name}
      </Typography>
      <Typography variant="h6" component="h3" gutterBottom>
        Location: New Delhi
      </Typography>
      <Typography variant="h6" component="h4" gutterBottom>
        Contact: 123456789
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Button 
          variant="contained" 
          color="error"
          sx={{ 
            backgroundColor: '#fca5a5',
            '&:hover': {
              backgroundColor: '#f87171'
            },
            padding: '6px 12px',
            margin: 2,
            borderRadius: 2
          }}
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Child: Increase count
        </Button>
        <Typography>{count}</Typography>
      </Box>
    </Card>
  );
};

export default React.memo(User);