import React, { useState, useEffect } from 'react';
import SvgView from '../components/SvgView';
import SectionList from '../components/SectionList';

export default function SeatingChartContainer({}) {
    const dataset = [
        {
            id: 1,
            name: 'Premium',
            price: '$200.00',
            area: 'premium1',
        },
        {
            id: 2,
            name: 'Orchestra',
            price: '$189.00',
            area: 'orchestra2',
        },
        {
            id: 3,
            name: 'Orchestra',
            price: '$139.00',
            area: 'orchestra3',
        },
        {
            id: 4,
            name: 'Rear Orchestra',
            price: '$79.00',
            area: 'rearorch1',
        },
    ];

    const [sections, setSections] = useState(dataset);
    const [selectedSection, setSelectedSection] = useState([]);

    return (
        <div className="w-1/3 mx-auto">
            <SvgView selectedSection={selectedSection} />
            <SectionList onSectionSelect={setSelectedSection} sections={sections} selectedSection={selectedSection} />
        </div>
    )
}