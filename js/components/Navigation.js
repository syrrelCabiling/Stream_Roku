export default {
  template: `
  <section>
  <div class="container-fluid">
  <div class="row">
  <header class="col-sm-12 fixed-top roku-logo  pt-3 pb-3">
    <img src="./images/white-lg.png" alt="Roku logo">
    <div id="sidebar">
      <div class="burger-toggle" onclick="toggleSidebar()">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul class="mt-5">
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
        <li>Link 4</li>
      </ul>
    
    <!-- Profile Nav outside -->
    <ul>
    <!-- <li>Kids</li> -->
    <li v-if="authenticated"><i class="fas fa-user-circle"></i></li>
    <li v-if="administrator"><i class="fas fa-cog"></i></li>
    <li v-if="authenticated" v-on:click="logout()"><i class="fas fa-power-off"></i></li>
    </ul>
    </div>
 
  </header>
    </div>
  </div> <!-- end container fluid -->
  </section>
  `,
    data() {
      return {
          input: {
              username: "",
              password: ""
          },

      }
  }
} 