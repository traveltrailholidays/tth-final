'use client';

import { useState } from 'react';

interface MonthSelectProps {
    onSelect: (selectedMonth: string) => void;
    className?: string;
};

const SelectMonthSearch: React.FC<MonthSelectProps> = ({ onSelect, className }) => {
    const [selectedMonth, setSelectedMonth] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedMonth = e.target.value;
        setSelectedMonth(selectedMonth);
        onSelect(selectedMonth);
    };

    // Get current month and next 6 months
    const currentDate = new Date();
    const months = [];
    for (let i = 0; i < 6; i++) {
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth() + i, 1);
        const monthYear = `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
        months.push({
            value: `${date.getMonth() + 1}-${date.getFullYear()}`,
            label: monthYear,
        });
    }

    return (
        <select
            id="monthSelect"
            value={selectedMonth}
            onChange={handleChange}
            className={`${className}`}
        >
            <option value="" hidden disabled>Select Month</option>
            {months.map(month => (
                <option
                    key={month.value}
                    value={month.value}
                    className=''
                >
                    {month.label}
                </option>
            ))}
        </select>
    );
};

export default SelectMonthSearch;
