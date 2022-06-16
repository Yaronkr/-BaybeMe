// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"


Rails.start()
Turbolinks.start()
ActiveStorage.start()

import "controllers"
import "bootstrap"

import { initSweetalert } from '../plugins/init_sweetalert';

initSweetalert('#sweet-alert-apply', {
  title: "Application was submitted Successfully",
  text: "Check your email for details",
  icon: "success"
}, (value) => {
  if (value) {
    const link = document.querySelector('.delete-link');
    link.click();
  }
});
