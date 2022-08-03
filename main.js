import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<div class="main">
<div class="Top">
    <div class="Top-left"></div>
    <div class="Top-right"></div>
</div>
<div class="Middle">
    <div class="Middle-left"></div>
    <div class="Middle-center"></div>
    <div class="Middle-right"></div>
</div>
<div class="Bottom">
    <div class="Bottom-left"></div>
    <div class="Bottom-right"></div>
</div>
</div>
`

setupCounter(document.querySelector('#counter'))
