import { useEffect } from 'react'
import { useDataContext } from '../contexts/DataContext';
import { EditMovie } from './EditMovie';

export const MoviesList = () => {
    const { movies, getMovies, deleteMovieHandler } = useDataContext();

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div className='moviesList-container'>
            <h2>Movies List</h2>
            {!movies && <p>Loading...</p>}

            {movies?.length == 0 && <p>No movies yet...</p>}

            {movies?.map(x => <div key={x.id}>
                <h3>{x.title}</h3>
                <p>{x.year}</p>
                <p>{x.resume}</p>
                <button onClick={() => deleteMovieHandler(x.id)}>Delete</button>
                <EditMovie id={x.id} />
            </div>)}
        </div>
    )
}
