import './widget.scss'
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const Widget = ({title, value, iconName}) => {
    let data;
    switch (iconName) {
        case 'money' :
            data ={
                iconName : <MonetizationOnIcon fontSize='large' className='icon' style={{color:"#f0b905"}}/>
            };
            break;

        case 'customer' :
            data ={
                iconName : <Diversity2Icon fontSize='large' className='icon' style={{color:"#c91b0e"}}/>
            };
            break;

        case 'issued':
            data ={
                iconName : <LocalPoliceIcon fontSize='large' className='icon' style={{color:"#0941db"}}/>
            };
            break;

        case 'unredeem':
            data ={
                iconName : <GolfCourseIcon fontSize='large' className='icon' style={{color:"#079117"}}/>
            };
            break;

        default:
            break;
    }
    return (
        <div className='widget'>
            <div className='detail'>
                <div className="title">
                    {title}
                </div>
                <div className='value'>
                    {value}
                </div>
            </div>
            <div className="icon">
                {data.iconName}
            </div>
        </div>
    )
}

export default Widget;