import LoginComponent from "./LoginComponent.js"
import UsersComponent from "./UsersComponent.js"

export default {
    template: `
    <div class="container-fluid">
        <div class="row">
            <div class="col-auto">
                Hi
            </div>
        </div>
    </div>

    `,
    component: {
        LoginComponent: LoginComponent
    },

    data() {
        return {
            userList: []
        }
    }
}