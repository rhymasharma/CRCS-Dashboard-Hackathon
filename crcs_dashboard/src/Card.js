import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Card = ({value, label, route}) => {
    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate(route);
        };
    
    
    return (
        <div className="card" onClick={handleCardClick}>
        <div className="card-body">
            <h5 className="card-value">{value}</h5>
            <p className="card-label">{label}</p>
        </div>
        </div>
    );
};

export default Card;
