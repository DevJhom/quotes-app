import Quote from './Quote';

import classes from './Quotes.module.css';

const dummy = [
    {
        text: 'I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.',
        author: 'Frank Herbert',
        book: 'Dune',
        year: '1965'
    },
    {
        text: 'To live is the rarest thing in the world. Most people exist, that is all.',
        author: 'Oscar Wilde',
        book: '',
        year: ''
    }];

const Quotes = props => {
    return(
        <ul className={classes.quotes}>
            {dummy.map((quote) => {
                return <Quote text={quote.text} author={quote.author} book={quote.book} year={quote.year}/>
            })}
        </ul>
    );
};

export default Quotes;