'use strict';
import { getGreetingsMessage } from './AppAssets/js/greeting.js';
import './AppAssets/css/siteBody.less';
import './AppAssets/css/site.css';

function showGreetingMessage() {
    let message = ', schön dass du wieder bei uns bist, bitte schaue dir deine Aufgaben an';
    let greeting = getGreetingsMessage();
    alert(greeting + message);
}