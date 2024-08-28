import React from 'react';
import { ServicesList } from '../helpers/ServicesList';
function Services() {
    return (
        <div className="Services">
            <h1 className="ServicesTitle"> </h1>
            <div className="ServicesList">{ServicesList.map((servicesItem, key) => {
                return <div> {servicesItem.name}</div>;
            })}

            </div>
        </div>
    );
};

export default Services;