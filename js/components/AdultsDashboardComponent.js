import LoginComponent from "./LoginComponent.js";
import Navigation from "./Navigation.js";

export default {
    template: `
    <section>
        <Navigation></Navigation>
        <div class="container-fluid">
            <div class="row">
                <div class="col-auto content">
                    <p>Hi</p>
                </div>
            </div>
        </div>
    </section>
    `,
    components: {
        LoginComponent: LoginComponent,
        Navigation: Navigation

    },

    data() {
        return {
            input: {
                username: "",
                password: ""
            },

        }
    },

    methods: {
        login() {
            // console.log(this.$parent.mockAccount.username);
            //debugger;
            if(this.input.username !="" && this.input.password !="") {
                //use the FormData 
                let formData = new FormData();

                formData.append("username", this.input.username); //?username=foo&&password
                formData.append("password", this.input.username);

                let url = "./includes/index.php?user=true";

                fetch(url, {
                    method: "POST",
                    body: formData
                })
                .then(res => res.json())
                .then(data => {    //the user data
                    console.log(data)

                    //tell the app that we have a successful login
                    //store the user obj that we retrieved

                    //true below means that authentication worked
                    //data is the user we retrieved from the db
                    this.$emit("authenticated", true, data[0]); //goes thru the router-view

                    //push the user to ther user's page
                    this.$router.replace({name: "users"});

                }) 
                .catch((err) => console.log(err));

            }else{
                console.error("inputs cant be!");
            }
        }
    }
} 