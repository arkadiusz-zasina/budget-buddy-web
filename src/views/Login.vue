<template>
  <div class="login">
    <div class="loginbox">
      <div class="loginbox-label">Log in</div>
      <div class="inputrow">
        <div class="inputrow-label">Username:</div>
        <input class="inputrow-input" placeholder="HumanComputer"/>
      </div>
      <div class="inputrow">
        <div class="inputrow-label">Password:</div>
        <input class="inputrow-input" placeholder="Interaction"/>
      </div>
      <div class="inputrow">
      </div>
      <div class="button-container">
        <router-link to="/main" class="enterButton">Enter</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login'
}
</script>

<style scoped>
  .login {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .loginbox {
    background-color: #539fd5;
    color: white;
    padding: 3rem;
    border-radius: .3rem;

    -webkit-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.35);
    -moz-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.35);
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.35);
  }

  .inputrow {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .loginbox-label {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  .inputrow-label {
    font-size: 1.2rem;
  }

  .inputrow-input {
    padding: .4rem;
    margin-left: 3rem;
    border: none;
    border-radius: .2rem;
    width: 300px;
  }

  .enterButton {
    padding-top: .6rem;
    padding-bottom: .6rem;
    padding-left: 3rem;
    padding-right: 3rem;
    font-size: 1.3rem;
    font-family: Bahnschrift, Helvetica, Arial, sans-serif;
    border: none;
    background-color: #2e83c2;
    color: white;
    cursor: pointer;
    text-decoration: none;
  }

  .enterButton:hover {
    background-color: #0e79ca;
  }

  .button-container {
    width: 100%;
    text-align: center;
  }
</style>
