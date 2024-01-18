import { useParams } from 'react-router-dom';
import './single.css';

const Single = () => {
    const {userid} = useParams();
    return (
        <div className="single">
            Single Page {userid}
        </div>
    )
}

export default Single;