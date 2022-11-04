import BirthdayList from './BirthDayList';
import Button from './Button';
import { data } from '../data/birthdaysData';
import { useState } from 'react';

const Card = () => {
    const [people, setPeople] = useState(data);
    const count = people.length;

    const removeAll = () => {
        setPeople([]);
    };

    return (
        <div className='box-sm-col bg-white shadow-very-large'>
            <h2>{count} birthdays today</h2>
            {people.map((person) => (
                <BirthdayList key={person.id} {...person} />
            ))}
            <Button remove={removeAll} />
        </div>
    );
};

export default Card;
