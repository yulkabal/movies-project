import React from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;


class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
                .catch((err) => {
                  console.error(err);
                  this.setState({loading: false })
               })
            );
    }

    moviesSearch = (movie, type = 'all') => {
        this.setState({ loading: true });
        fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}${
                type !== 'all' ? `&type=${type}` : ''
            }`
        )
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            )
            .catch((err) => {
               console.error(err);
               this.setState({loading: false })
            })
    };

    render() {
        const { movies, loading } = this.state;

        return (
            <main>
                <div className="container content">
                    <Search moviesSearch={this.moviesSearch} />
                    {loading ? <Preloader /> : <Movies movies={movies} />}
                </div>
            </main>
        );
    }
}
export { Main };
