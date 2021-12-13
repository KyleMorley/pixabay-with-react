import { useState } from 'react'

const Header = ({ searchText }) => {
    const [search, setSearch] = useState('');

    const submit = (e) => {
        e.preventDefault();

        searchText(search);
    }

    return (
        <header className='header'>
                <h3>Pixabay</h3>
                <form onSubmit={ submit }>
                    <input type='text' placeholder='Search...' onChange={e => setSearch(e.target.value) } />
                </form>
        </header>
    )
}

export default Header
