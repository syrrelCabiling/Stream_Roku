export default {
    name: "VideoComponent",

    template: `
    <div class="row">
        <div class="col-12 order-2 order-md-1 col-md-3 media-container">
            <h4 class="media-title">{{currentVideo.movies_title}}</h4>
            <p class="media-details" v-html="currentVideo.movies_cover"</p>
        </div>

        <div class="col-12 order-1 order-md-2 col-md-9 media-container">
            <video autoplay controls muted :src="'video/' + currentVideo.movies_trailer" class="fs-video"></video>
        </div>
    </div>
    `,

    data: function () {
        return {
            currentVideo: {},
            allRetrievedVideos: []
        }
    },

    created: function() {
        this.retrieveVideoContent();
    },

    methods: {
        retrieveVideoContent() {
            // fetch all the video content here (don't care about filtering, genre etc at this point)
            debugger;

            let url = `./admin/index.php?movies=tbl_movies`;
            //store a video
            fetch(url)
            .then(res => res.json())
            .then(data => {
                this.allRetrievedVideos = data;
                this.currentVideo = data[0];
            })


        }
    }
}