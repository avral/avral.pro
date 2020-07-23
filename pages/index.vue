<template lang="pug">
div
  canvas#canvas(ref="canvas") Your browser doesn't support canvas

  #overlay 
    .container
      h1.logo-text.green {{ logo_text }}
      h2 dApps development, Cryptography, Web services.
        small.hire.badge.badge-light(@click="hire") Hire available!


      transition(name="slide-fade")
        div(v-if="showContent")
          .row.info-block
            .one-half.column
              .pens.pulled
                h3.block-header.green Projects

                ul
                  li
                    a(href="https://alcor.exchange" target="_blank")
                      h4 Alcor.exchange
                      //img(src="~/assets/logos/eostokens.png" height=50)
                      p Self-listing, no-fees, fully-onchain DEX for eosio chains.
                  li
                    a(href="https://swap.eostokens.io" target="_blank")
                      h4 Swap.eostokens.io
                      p OTC Trading of any tokens for EOSIO chains.

                  li
                    a(href="https://dtrip.app" target="_blank")
                      h4 dTrip.app
                      p Application for travelers is built on STEEM network.

                  li
                    a(href="https://golos.id" target="_blank")
                      h4 GOLOS Blockchain UI
                      p Golos frontend maintainer.


            .one-half.column
              .pens.pulled
                .block-header.green Technologies i work with

                ul
                  li
                    a(href="https://eos.io" target="_blank")
                      h4 EOS.IO
                      p Contracts, Front-End, Api services, Advising.
                  li
                    a(href="https://steem.com/" target="_blank")
                      h4 STEEM
                      p Applications, bots, services.

                  li
                    h4 Other
                    span Contact security audit.
                    br
                    span Microservices development,
                    br
                    span Nodes deployment, Startup MVPs.

          .row
            .column
              .pens.pulled
                .block-header.green Contacts & Social
                ul.concat-list
                  li
                    a(href="https://github.com/avral" target="_blank") GitHub

                  li
                    a(href="https://t.me/avral" target="_blank") Telegram

                  li
                    a(href="https://twitter.com/avral_pro" target="_blank") Twitter

                  li
                    a(href="https://www.instagram.com/a.v.r.a.l/" target="_blank") Instagram

                  li
                    a(href="https://steemit.com/@avral" target="_blank") Steemit

                  li
                    a(href="https://golos.id/@avral" target="_blank") Golos

                  li
                    a(href="mailto: avral@protonmail.com") avral@protonmail.com
</template>

<script>
export default {
  data() {
    return {
      logo_text: '',
      showContent: true
    }
  },

  created() {
    this.showContent = false
  },

  mounted() {
    this.logoTyping()
    this.circle()
  },

  methods: {
    circle() {
      let Circle = require('~/assets/js/circle.js').default

      const application = new Circle(this.$refs.canvas);
      application.initializeCircleContainers();
      application.loop();
    },

    logoTyping() {
      // Type logo text
      const logo_text = "Avral's digital lab"
      var speed = 100;

      let i = 0
      let typeWriter = () => {
        if (i < logo_text.length) {
          this.logo_text += logo_text.charAt(i);
          i++;
          return setTimeout(typeWriter, speed);
        }

        this.showContent = true
      }

      this.logo_text = ''
      typeWriter()
    },

    hire() {
      var win = window.open("mailto: avral@protonmail.com", '_blank');
      win.focus();
    }
  }
}

</script>

<style>
.hire {
  margin-left: 10px;
  font-size: 1.8rem;
  cursor: pointer;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}


  html, body{
      margin:0;
      padding:0;
      background-color:hsl(195, 100%, 7%);
  }

  body {
    -webkit-font-smoothing: antialiased;
    color: antiquewhite !important;
    font-size: 1.8em;
  }

  h1.green {
    min-height: 90px;
  }

  .green {
    color: palegreen !important;
    font-family: monospace;
  }

  .logo-text {
    font-size: 7rem;
  }

  .concat-list {
    display: block;
  }

  .info-block {
    margin-top: 40px;
  }

  .logo {
    font-family: 'Monoton', cursive;
    font-size: 3rem;
  }

  h1 {
    font-size: 4rem;
    padding-bottom: 0px;
    margin-bottom: 1%;
  }

  .block-header {
    font-size: 3rem;
    margin-bottom: 10px;
  }

  .pulled p {
      font-size: 1.8rem;
  }

  .pulled li h1 {
      font-size: 2.5rem;
      margin-bottom: 0px;
  }
  
  a {
      text-decoration: none;
      transition: .5s;
      color: antiquewhite !important;
  }

  a:hover {
    color: #97fb98 !important;
  }

  .pulled ul li {
    list-style: none;
    margin-right: 2rem;
  }

  h2 {
    font-size: 3rem;
  }

  h4 {
    margin: 0px;
    font-size: 2.5rem;
  }

  #canvas-wrap {
    position: relative
  }

  #overlay {
    position: absolute;
    top: 80px;

    left: 0px;
    width: 100%;

    box-sizing: border-box;
    z-index: 100;
  }

  #canvas{
    z-index: -10;
    position: fixed;
    top: 0;
  }

  svg {
    display:none;
  }

  /* Mobile first queries */


  /* Larger than mobile */

  @media (min-width: 400px) {
    .concat-list {
      display: flex;
    }
  }


  /* Larger than phablet */

  @media (min-width: 550px) {}


  /* Larger than tablet */

  @media (min-width: 750px) {}


  /* Larger than desktop */

  @media (min-width: 1000px) {}


  /* Larger than Desktop HD */

  @media (min-width: 1200px) {
    .logo-text, h1 {
      font-size: 9rem;
    }
  }

</style>
