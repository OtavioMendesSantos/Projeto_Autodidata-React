import { Box, Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'


const steps = ['escolha seu Plano', 'Dados', 'Pagamento']

const StepperPersonalizado = () => {
  return (
    <Box
        sx={{
            bgcolor: '#f2f2f2',
            width: '100%',
        }}
    >
        <Stepper>
            {steps.map((label, index) => (
                <Step 
                    key={label}
                    sx={{
                        margin: '10px 0',
                        padding: '0 10px',
                        '& .MuiStepLabel-label': {
                            fontWeight: 'bold',
                        },
                        '&.MuiStep-horizontal': {
                            padding: '0px',
                        }
                    }}
                >
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    </Box>
  )
}

export default StepperPersonalizado
