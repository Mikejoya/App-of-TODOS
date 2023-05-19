import { ReactComponent as CheckSVG } from "./complete.svg";
import { ReactComponent as DeleteSVG} from "./deleted.svg";
import './TodoIcon.css';

const iconType = {
    'check': (color)=> <CheckSVG className='icon-svg'  fill={color} />,
    'delete': (color)=> <DeleteSVG className='icon-svg' fill={color}  />
};

function TodoIcon({ type, color, onClick  }) {
    return (
        <span 
            className={`Icon-container Icon-svg Icon-container-${type}`}
            onClick={onClick}
        >
            {iconType[type](color)}
        </span>
    );
}

export { TodoIcon }