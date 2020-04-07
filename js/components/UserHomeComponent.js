import AllMoviesComponents from './AllMoviesComponents.js';
import Navigation from './Navigation.js';

export default {
    props: ['currentuser', 'movies_display'],
    name: "UserHome",
    template: `
    <section>
        <Navigation></Navigation>
            <div class="container mt-5">
                <h1>HOLA, {{ currentuser.user_fname }}</h1>
                <div>{{ message }}</div>
                <AllMoviesComponents></AllMoviesComponents>
                <div>{{ movies_display }}</div>

            </div>
    </section>
    `,
    components: {
        AllMoviesComponents: AllMoviesComponents,
        Navigation: Navigation
    }

}