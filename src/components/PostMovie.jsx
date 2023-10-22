import { useDataContext } from '../contexts/DataContext';

export const PostMovie = () => {

    const { postMovieHandler } = useDataContext();

    return (
        <div className='postMovie-container'> 
            <h2>Create movie</h2>
            <form onSubmit={postMovieHandler}>
                <input type="text" name='title' placeholder='Title...' />
                <input type="number" name='year' placeholder='Year...' />
                <input type="text" name='resume' placeholder='Resume...' />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}
