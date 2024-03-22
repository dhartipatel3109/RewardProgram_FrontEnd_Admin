import './store.scss'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const Store = () => {
    const states = [
        {value: 'Select', label: 'Select'},
        {value: 'AL', label: 'Alabama'},        {value: 'AK', label: 'Alaska'},
        {value: 'AZ', label: 'Arizona'},        {value: 'AR', label: 'Arkansas'}, 
        {value: 'CA', label: 'California'},     {value: 'CO', label: 'Colorado'},
        {value: 'CT', label: 'Connecticut'},    {value: 'DE', label: 'Delaware'},
        {value: 'DC', label: 'District Of Columbia'}, {value: 'FL', label: 'Florida'},
        {value: 'GA', label: 'Georgia'},        {value: 'HI', label: 'Hawaii'},
        {value: 'ID', label: 'Idaho'},          {value: 'IL', label: 'Illinois'},
        {value: 'IN', label: 'Indiana'},        {value: 'IA', label: 'Iowa'}, 
        {value: 'KS', label: 'Kansas'},         {value: 'KY', label: 'Kentucky'},
        {value: 'LA', label: 'Louisiana'},      {value: 'ME', label: 'Maine'},
        {value: 'MD', label: 'Maryland'},       {value: 'MA', label: 'Massachusetts'},
        {value: 'MI', label: 'Michigan'},       {value: 'MN', label: 'Minnesota'},
        {value: 'MS', label: 'Mississippi'},    {value: 'MO', label: 'Missouri'},
        {value: 'MT', label: 'Montana'},        {value: 'NE', label: 'Nebraska'}, 
        {value: 'NV', label: 'Nevada'},         {value: 'NH', label: 'New Hampshire'},
        {value: 'NJ', label: 'New Jersey'},     {value: 'NM', label: 'New Mexico'},
        {value: 'NY', label: 'New York'},       {value: 'NC', label: 'North Carolina'},
        {value: 'ND', label: 'North Dakota'},   {value: 'OH', label: 'Ohio'},
        {value: 'OK', label: 'Oklahoma'},       {value: 'OR', label: 'Oregon'},
        {value: 'PA', label: 'Pennsylvania'},   {value: 'RI', label: 'Rhode Island'}, 
        {value: 'SC', label: 'South Carolina'}, {value: 'SD', label: 'South Dakota'},
        {value: 'TN', label: 'Tennessee'},      {value: 'TX', label: 'Texas'},
        {value: 'UT', label: 'Utah'},           {value: 'VT', label: 'Vermont'},
        {value: 'VA', label: 'Virginia'},       {value: 'WA', label: 'Washington'},
        {value: 'WV', label: 'West Virginia'},  {value: 'WI', label: 'Wisconsin'},
        {value: 'WY', label: 'Wyoming'}
    ]; 
    const countries = [
        {value:'Select', label:'Select'},
        {value: 'United States', label: 'United States'}, {value:'India', label:'India'},
        {value: 'Canada', label: 'Canada'}
    ];

    return (
        <div className='store'>
            <Box component="form" className='box'
                sx={{
                    '& .MuiTextField-root': { m: 1.5, width: '55ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div className='store-title'>
                    <h2>Djay Liquors</h2>
                    <p>(Store Settings)</p>
                </div>
                <br/>
                <div className='main-form'>
                    <div className='store-pic-container'>
                        
                    </div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Store Name" // defaultValue="Hello World"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Business Email" 
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Business Phone" 
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Address" 
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="City" 
                    />
                    <TextField 
                        id="filled-select-currency-native"
                        label="State"
                        select 
                    >
                        {
                            states.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                    <TextField 
                        required
                        id="outlined-required"
                        label="Zipcode" 
                    />
                    <TextField
                        select
                        id="country"
                        label="Country" 
                    >
                        {
                            countries.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                    <br/><br/>
                    <div>
                        <button id='merchant-save'>Save</button>
                    </div>
                </div>
            </Box>
        </div>
    )
}

export default Store;