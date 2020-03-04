import Navigation from './Navigation.js';
import Footer from './Footer.js';

export default {
    template: `
    <section>
    <Navigation></Navigation>
        <div class="container">
            <div class="row">
                <div class="col-sm-12"> 
                    <h1 class="user-message">{{ message }}</h1>
                </div>
            </div>
        </div>
    <Footer></Footer>
    </section>
    `,

    components: {
        Navigation: Navigation,
        Footer: Footer
     },

    data() {
        return {
            message: "COMING SOON!",
            userList: []
        }
    }
}