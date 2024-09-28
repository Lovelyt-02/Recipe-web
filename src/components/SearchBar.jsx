import { Box, Button, InputAdornment, TextField } from '@mui/material'
import React,{useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Margin } from '@mui/icons-material';

const SearchBar = ({onSearch}) => {
        const [query, setQuery] = useState('');

        const handleSearch = () =>{
            if(query.trim()){
                onSearch(query);
            }
        };

  return (
    <>
        <Box display="flex" justifyContent='center' alignItems='center' mb={4} mt={4}>

            <TextField placeholder='Search Recipes Here...' value={query} onChange={(e)=>setQuery(e.target.value)} InputProps={{startAdornment: (
                <InputAdornment position='start'>
                    <SearchIcon/>
                </InputAdornment>
            )}} sx={{marginRight:2,width:'100%', maxWidth:'600', backgroundColor: 'white', 
            }}/>
            <Button variant='contained' color='primary' onClick={handleSearch}>Search</Button>
        </Box>
    </>
  )
}

export default SearchBar