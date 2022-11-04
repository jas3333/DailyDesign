const BirthdayList = ({ image, name, age }) => {
    return (
        <div className='box-inner'>
            <img src={image} alt='' className='profile-sm'></img>
            <h3 className=''>{name}</h3>
            <p className=''>{age} years</p>
        </div>
    );
};

export default BirthdayList;
