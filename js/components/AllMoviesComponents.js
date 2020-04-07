import VideoComponent from "./VideoComponent.js";

export default {
	props: ['movies_display'],
    name:"AllMovies",
	template: `
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<h1 class="user-message">{{ message }}</h1>
			</div>
		</div>
		<div>{{ movies_display }}</div>
		<div class="row">
			<UserComponent v-for="(movie, index) in movieList" :liveuser="user" :key="index"/>
			<div class="col-12 order-1 order-md-2 col-md-9 media-container">
            	<video autoplay controls muted :src="'video/' + movies_trailer" class="video"></video>
        	</div>
		</div>
	</div>
	`,

    

	created: function () {
		this.fetchAllMovies();
	},

	data() {
		return {
			message: `Back in Time!`,

			movieList: []
		}
	},
	methods: {
		fetchAllMovies() {
			let url = './admin/admin_getMovies.php?allmovies=true';
			fetch(url)
			.then(res => res.json())
			.then(data => this.movieList = data)
			.catch(error => console.error(error))

		}
	}
}