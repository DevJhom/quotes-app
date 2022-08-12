import classes from './ButtonNext.module.css'

const ButtonNext = (props) => {
    return (
        <button>
            {props.text}
            {/* Add an -> icon later*/}
        </button>
    );
}

export default ButtonNext;

