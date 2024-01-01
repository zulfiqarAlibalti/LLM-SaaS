import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div style={{
        display: 'flex',
        marginRight: 'auto',
        alignItems: 'center',
        gap: '15px',
    }}>
      <Link to="/">
        <img
          src='chatai.png'
          alt='openai'
          width={"30px"}
          height={"30px"}
          className='image-inverted'
        />
        
      </Link>
      <Typography
          sx={{
            display: 'block',
            '@media screen and (max-width: 600px)': {
              display: 'none',
            },
            marginRight: 'auto',
            fontWeight: '800',
            textShadow: '2px 2px 20px #000',
          }}
        
        >
          <span style={{ fontSize: '20px' }}>LLM</span>-ChatBot
        </Typography>
    </div>
  );
};

export default Logo;
