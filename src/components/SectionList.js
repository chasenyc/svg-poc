import React, { useState, useEffect } from 'react';

export default function SectionList({onSectionSelect, sections, selectedSection}) {

    return (
        <div>
            <ul>
                {sections.map(item => {
                    const activeClass = (selectedSection.id === item.id) ? 'bg-blue-200' : 'bg-white';
                    return (<div key={item.name} className={'py-4 px-4 block cursor-pointer hover:bg-blue-100 flex justify-between ' + activeClass} onClick={() => onSectionSelect(item)}>
                        <div>{item.name}</div>
                        <div>{item.price}</div>
                    </div>);
                })}
            </ul>
        </div>
    )

}
