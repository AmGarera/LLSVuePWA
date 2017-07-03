<template>
  <div class="work">
  <section class="hero hero-image is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">

          </h1>
          <h2 class="subtitle">

          </h2>
        </div>
      </div>
    </section>
    <br>
    <section>
      <div class="container is-fluid">
      <h3 class="title grey-text">  Contact Our Studio</h3>
      <form action="https://formspree.io/gareraanthony@gmail.com"
            method="POST">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label grey-text">Name</label>
          </div>
          <div class="field-body">
            <div class="field is-grouped">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" name="name" placeholder="First and Last Name">
                <span class="icon is-small is-left">
          <i class="fa fa-user"></i>
        </span>
              </p>
            </div>
            <div class="field">
              <p class="control is-expanded has-icons-left has-icons-right">
                <input class="input is-success" type="email" placeholder="Email" name="_replyto">
                <span class="icon is-small is-left">
          <i class="fa fa-envelope"></i>
        </span>
                <span class="icon is-small is-right">
          <i class="fa fa-check"></i>
        </span>
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label grey-text">Subject</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input class="input" type="text" placeholder="e.g. Partnership opportunity" name="subject">
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label grey-text">Question</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <textarea class="textarea" placeholder="Explain how we can help you" name="Services"></textarea>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <!-- Left empty for spacing -->
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <button class="button" type="submit" value="Send">
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      </div>
    </section>
</div>
</template>
<script>
  export default {
    name: 'Contact'
  }
</script>
<style>
  .hero-body {
    background: url("../../static/img/CONTACT/CONTACT_hero.png") center;
    background-size: cover;
  }
  .grey-text {
    color: grey;
  }
</style>
