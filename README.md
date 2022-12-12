<p style="padding: 30px" align="center">
  <a href="https://leminnow.com">
    <img width="200" src="https://assets.website-files.com/60d493b79d3973812262066c/60d6025cca81ce4522c799ed_footer-logo.svg" >
  </a>
</p>

<h1 align="center">Lemin Captcha Angular Example</h1>

## Getting Started
### Project setup
``` bash
npm install
# or
yarn install
```


### Compiles for project UI
``` bash
npm run start
# or
yarn start
```


### Compiles for project API 
``` bash
npm run server
# or
yarn server
```

---

# Used captcha wrapper
### Angular Lemin Cropped Captcha

Lemin Captcha is uniquely playful, robust, and effective. Through gamification, we are curing the pains of traditional CAPTCHA.


<p>
  <a href="https://www.npmjs.com/package/@leminnow/ng-lemin-cropped-captcha">
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
  </a>
  <a href="https://yarn.pm/@leminnow/ng-lemin-cropped-captcha">
    <img src="https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white">
  </a>
  <img src="https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white">
</p>

<p>
  <img src="https://img.shields.io/npm/v/@leminnow/ng-lemin-cropped-captcha?style=for-the-badge">
  <img src="https://img.shields.io/npm/dw/@leminnow/ng-lemin-cropped-captcha?style=for-the-badge">
  <img src="https://img.shields.io/bundlephobia/min/@leminnow/ng-lemin-cropped-captcha?style=for-the-badge">
</p>

---

## Documentation

### Required variables for UI
> #### Set [Captcha ID](https://help.leminnow.com/knowledge/how-to-display-lemin-captcha)
> ``` bash
> captchaId: 'YOUR_CAPTCHA_ID'
> ```
>
> - ##### How can I get my `captchaId`?
>   Select a puzzle captcha from [your puzzle captchas](https://dashboard.leminnow.com/products/captcha-list)
>   </br>
>   Copy your `captchaId` from your puzzle's captcha script source

---

> #### Set [Container ID](https://help.leminnow.com/knowledge/how-to-display-lemin-captcha)
>
> ``` bash
> containerId: 'YOUR_CONTAINER_ID'
> ```
>
> - ##### How can I get my `containerId`?
>   Click on **Advanced Settings** from the puzzle captcha of your choice
>   </br>
>   Copy your `containerId` from Captcha Div ID

---

### Required variables for API
> #### Set [Private Key](https://help.leminnow.com/knowledge/how-does-lemin-verify-a-captcha-answer)
> ``` bash
> private_key: "YOUR_PRIVATE_KEY"
> ```
>
> - ##### How can I get my `private_key`?
>   Click on the [account](https://dashboard.leminnow.com/account/edit-profile) settings page.
>   </br>
>   Copy your `private_key` from Private Key

---

#### You can find more information on

See [developers guide](https://help.leminnow.com/knowledge/developers-guide).
