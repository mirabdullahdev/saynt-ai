"use client";
const Select = dynamic(() => import('react-select'), {
    ssr: false,
});
import dynamic from 'next/dynamic';
import '../../../../public/admin/sass/pages/multiSelect.scss';




const MultiSelect = () => {

    // Colour Options  
    const colourOptions = [
        { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
        { value: 'purple', label: 'Purple', color: '#5243AA' },
        { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
        { value: 'orange', label: 'Orange', color: '#FF8B00' },
        { value: 'yellow', label: 'Yellow', color: '#FFC400' },
        { value: 'green', label: 'Green', color: '#36B37E' },
        { value: 'forest', label: 'Forest', color: '#00875A' },
        { value: 'slate', label: 'Slate', color: '#253858' },
        { value: 'silver', label: 'Silver', color: '#666666' },
    ];

    const flavourOptions = [
        { value: 'vanilla', label: 'Vanilla', rating: 'safe' },
        { value: 'chocolate', label: 'Chocolate', rating: 'good' },
        { value: 'strawberry', label: 'Strawberry', rating: 'wild' },
        { value: 'salted-caramel', label: 'Salted Caramel', rating: 'crazy' },
    ];

    // Grouped Options  
    const groupedOptions = [
        {
            label: 'Colours',
            options: colourOptions,
        },
        {
            label: 'Flavours',
            options: flavourOptions,
        },
    ];


    const formatGroupLabel = (data) => (
        <div className='groupStyles'>
            <span>{data.label}</span>
        </div>
    );


    // const colourOptions = [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' },
    // ]


    return (
        <Select
            className="select_main"
            classNamePrefix="select"
            placeholder="Select the value"
            isClearable={false}
            isMulti={false}
            name="color"
            formatGroupLabel={formatGroupLabel}
            options={colourOptions} // for the single and multi select
        // options={groupedOptions} // for the group options
        />
    );
};

export default MultiSelect;