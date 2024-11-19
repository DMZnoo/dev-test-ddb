const host = 'https://freetestapi.com/api/v1';

export const ENDPOINTS = ['users', 'actors', 'movies', 'authors', 'books', 'countries', 'actresses', 'animals', "currencies", "students", 'poets', 'cars', 'teachers', 'dogs', 'cats', 'birds', 'languages', 'us-states', "weathers", 'posts', 'products', 'airports', 'todos', 'politicians', 'airlines', 'destinations'];

export type Dog = {
    id: number
    name: string
    breed_group: string
    size: string
    lifespan: string
    origin: string
    temperament: string
    colors: Array<string>
    description: string
    image: string
}

export type Movie = {
    id:    number
    title:    string
    year:    number
    genre:    Array<string>
    rating:    number
    director:    string
    actors:    Array<string>
    plot:    string
    poster:    string
    trailer:    string
    runtime:    number
    awards:    string
    country:    string
    language:    string
    boxOffice:    string
    production:    string
    website:    string
}

export type Country = {
    id:    number
    name:    string
    population:    number
    land_area:    number
    density:    number
    capital:    string
    currency:    string
    flag:    string
}
