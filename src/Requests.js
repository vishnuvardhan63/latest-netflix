const key='28bf520650c09a587316fa26e91b04f2'
const requests={
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestHorror:`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_ad`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    // https://api.themoviedb.org/3/movie/157336?api_key=28bf520650c09a587316fa26e91b04f2
    // https://api.themoviedb.org/3/movie/157336?api_key=28bf520650c09a587316fa26e91b04f2&append_to_response=videos,images
}
export default requests