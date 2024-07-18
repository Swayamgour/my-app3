import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const CustomBreadcrumbs = ({breadcrumbs}: any) => {
  return (
    <div style={{width:'fit-content'}}>
    <Stack spacing={2}>
        <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  </div>)
}

export default CustomBreadcrumbs