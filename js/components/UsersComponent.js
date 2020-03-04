
export default {
    template: `
    <section>
    <div class="container-fluid nav-back">
    <div class="row">
        <div class="col">
           <router-link to="/login"><p class="ml-3 mt-4 mb-4"><i class="arrow left"></i> <span class="ml-4">EXIT</span></p></router-link> 
        </div>
    </div>
    </div>
    <div class="container-fluid login-bg">
        <div class="row text-center">
            <div class="col text-center">
                <img src="./images/white-lg.png" alt="Roku Logo" class="login-logo">
                <h2 class="display-4"><strong>Who's watching today?</strong></h2>
            </div>          
        </div>
        <div class="row card-deck mx-auto mt-3 px-auto col-lg-8">
                <div class="card col-lg-3 mx-auto text-center " id="kids-card" >
                    <img class="card-img-top mt-3" src="./assets/images/kids.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h3 class="mb-3">KIDS</h3>
                    </div>
                </div>

                <div class="card col-lg-3 mx-auto  text-center " id="adults-card" >
                    <img class="card-img-top mt-3" src="./assets/images/adult.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h3 class="mb-3">ADULTS</h3>
                    </div>
                </div>
        </div>

    </div>

    </section>
    `,


    data() {
        return {
            userList: []
        }
    }
}