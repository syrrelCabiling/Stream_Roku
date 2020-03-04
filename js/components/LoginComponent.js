
export default {
    template: `
        <div class="container-fluid login-bg">
            <div class="row text-center">
                <div class="col text-center">
                    <img src="./images/white-lg.png" alt="Roku Logo" class="login-logo">
                    <h2 class="display-4"><strong>Welcome.</strong> Please login to enjoy your 
                    favourite shows and movies!</h2>
                </div>          
             </div>
             <div class="row">
                <form @submit.prevent="login" class="text-center col-lg-6 mx-auto px-4 py-3">
                    <div class="form-row align-items-center">

                            <label class="form-control d-none" for="inlineFormInputName">Name</label>
                            <input v-model="input.username" type="text" class="form-control" id="inlineFormInputName" placeholder="Username" required>
             

                            <label class="form-control d-none" for="inlineFormPassword">Name</label>
                            <input v-model="input.password" type="password" class="form-control" id="inlineFormPassword" placeholder="Password" required>
            

                            <button type="submit" class="btn btn-purple">Sign In</button>
                        
                    </div>
                </form>  
            </div>
        </div>
     `,


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