export default {
    props: ['liveuser'],

    template: `
    <div class="col-xs-12 col-sm-6 col-md-4 mx-auto">
        <div class="card rounded" @click="navToUserHome()">
            <div class="card-body text-center">
                <img :src="'images/user/' + liveuser.user_avatar + '.jpg'" class="rounded-circle img-fluid">
                <p>{{ liveuser.user_name }}</p>
            </div>
        </div>
    </div>`,


	created: function () {
		if(this.liveuser.user_avatar === null || this.liveuser.user_avatar === "null"){
			this.liveuser.user_avatar = "temp_avatar";
		}
	},

    methods: {
        navToUserHome(){
            //debugger;
            localStorage.setItem("cachedUser", JSON.stringify(this.liveuser));
            //send this user to its home page, and pass the user object to the home page
            this.$router.push({name: 'home', params: {currentuser: this.liveuser}});
        }
    }

}