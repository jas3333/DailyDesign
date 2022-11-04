const Button = ({ remove }) => {
    return (
        <button className='btn-lg' onClick={remove}>
            Remove All
        </button>
    );
};

export default Button;
