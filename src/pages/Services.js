import React from 'react';
import { ServicesList } from '../helpers/ServicesList';
import ServicesItem from '../componets/Servicesitem'; // Changed to ServicesItem


function Services() {
    return (
        <div className="Services">
            <h1 className="ServicesTitle">Our Services</h1> {/* Added a title */}
            <div className="ServicesList">
                {ServicesList.map((servicesItem, key) => {
                    return (
                        <ServicesItem 
                            key={key}
                            image={servicesItem.image} 
                            name={servicesItem.name} 
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Services;