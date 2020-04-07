import LoginComponent from "./LoginComponent.js"
import UserComponent from "./UserComponent.js"

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