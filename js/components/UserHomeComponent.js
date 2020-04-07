import AllMoviesComponents from './AllMoviesComponents.js';
import Navigation from './Navigation.js';
import VideoComponent from './VideoComponent.js';

export default {
    props: ['currentuser', 'movies_display'],
    name: "UserHome",
    template: `
    <section>
        <Navigation></Navigation>
            <div class="container mt-5">
                <h1>HOLA, {{ currentuser.user_fname }}</h1>

    
                <div>{{ movies_display }}</div>

            </div>
            <VideoComponent></VideoComponent>
    </section>
    `,
    components: {
        AllMoviesComponents: AllMoviesComponents,
        Navigation: Navigation,
        VideoComponent: VideoComponent
    }

}