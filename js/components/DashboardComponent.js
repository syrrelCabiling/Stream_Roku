import LoginComponent from "./LoginComponent.js";
import UsersComponent from "./UsersComponent.js";
import Navigation from "./Navigation.js";

export default {
    template: `
    <Navigation></Navigation>
    <div class="container-fluid">
        <div class="row">
            <div class="col-auto">
                <div class="col-lg-2"></div>
            </div>
        </div>
    </div>

    `,
    components: {
        LoginComponent: LoginComponent,
        Navigation: Navigation
    },

    data() {
        return {
            userList: []
        }
    }
}