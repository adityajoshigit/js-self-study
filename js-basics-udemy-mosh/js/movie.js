
let getHighlyRatedMovies = function () {
    const movies = [
        {
            title: 'A',
            year: 2018,
            rating: 4.5
        },
        {
            title: 'B',
            year: 2018,
            rating: 4.7
        },
        {
            title: 'C',
            year: 2018,
            rating: 3
        },
        {
            title: 'D',
            year: 2017,
            rating: 4.5
        }
    ];
    
    movies
        .filter(m => ((m.year ===2018) && (m.rating > 4)))
        .sort((m1, m2) => {
            if( m1.rating < m2.rating ) return -1
            else if ( m1.rating > m2.rating ) return 1;
            return 0; 
        })
        .reverse()
        .forEach(m => console.log(m.title));
    
};
