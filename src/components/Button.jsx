const Button = ({buttonText}) => {

    const handleButtonClick = () => {
        
    }

    return (
        <button className="flex justify-center items-center font-semibold text-xl bg-gray-800 py-4 hover:bg-gray-600 cursor-default">
            <p>{buttonText}</p>
        </button>
    )
}

export default Button