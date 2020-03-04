export default {
    template: `
    <div class="container-fluid">
    <div class="row">
      <header class="col-sm-12 fixed-top">
        <img src="./images/white-lg.png" alt="Roku logo" width="90">
        <nav class="float-right">
          <ul>
            <!-- <li>Kids</li> -->
            <li v-if="authenticated"><i class="fas fa-user-circle"></i></li>
            <li v-if="administrator"><i class="fas fa-cog"></i></li>
            <li v-if="authenticated" v-on:click="logout()"><i class="fas fa-power-off"></i></li>
          </ul>
        </nav>
      </header>
    </div>
  </div> <!-- end container fluid -->
    
    `
}