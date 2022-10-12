import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons(props) {
    return (
        <Button
        sx={{
            borderRadius: 5,
            width: '20ch',
            fontWeight: '700',
            boxShadow: 'none',
            backgroundColor: '#ff4f5a',
            "&:hover": {
                color: '#4ffff4',
                backgroundColor: '#ff4f5a',
                boxShadow: 'none',
              },
        }}
        disabled={props.disabled} variant="contained" onClick={ ()=>{
            props.setDisabled(true)
            props.handleAction()
        }} > {props.title} </Button>
    );
}