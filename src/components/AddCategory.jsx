import { useState } from 'react';


export const AddCategory = ({ /* setCategories */ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const inputWithTrim = inputValue.trim();
        if( inputWithTrim.length <= 1) return;

        /* setCategories( (categories) => [ inputValue, ...categories ] ); */
        onNewCategory( inputWithTrim );
        setInputValue('');
    }
        
  return (
    <>
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    </>
  )
}
