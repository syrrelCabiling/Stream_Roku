import AllMoviesComponents from './AllMoviesComponents.js';

export default {
    props: ['currentuser', 'movies_display'],
    name: "UserHome",
    template: `
        <div class="container">
            <h1>HOLA, {{ currentuser.user_fname }}</h1>
            <div>{{ message }}</div>
            <AllMoviesComponents></AllMoviesComponents>
            <div>{{ movies_display }}</div>

        </div>
    `,
    components: {
        AllMoviesComponents: AllMoviesComponents
    }

}