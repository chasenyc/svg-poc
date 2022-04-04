import React, { useState, useEffect } from 'react';
import {ReactComponent as SeatingChart} from '.././prayer.svg';

export default function SvgView({selectedSection}) {
    const [sectionMap, setSectionMap] = useState({});
    const shadowClass = 'drop-shadow-[0_5px_5px_rgba(23,65,171,1)]';
    useEffect(() => {
        const svg = document.querySelector('svg');
        const availableSections = svg.querySelectorAll('[data-area]');
        const sectionMap = {};
        availableSections.forEach(section => {
            const areas = section.dataset.area.split(',');
            areas.forEach(area => {
                if (!sectionMap[area]) {
                    sectionMap[area] = [];
                }
                sectionMap[area].push(section);
            });
        });
        setSectionMap(sectionMap);

        console.log(sectionMap);
    }, [])

    const clearSelectedSection = () => {
        Object.keys(sectionMap).forEach(area => {
            sectionMap[area].forEach(section => {
                section.classList.remove(shadowClass);
            });
        }, [])
    }

    useEffect(() => {
        clearSelectedSection();
        if (sectionMap[selectedSection.area]) {
            sectionMap[selectedSection.area].forEach(section => {
                console.log('testing', section);
                section.classList.add(shadowClass);
            });
        }
    }, [selectedSection])
    
    return (
        <div>
            <SeatingChart />
        </div>
    );
}