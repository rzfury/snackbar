if (!window.rzfury) window.rzfury = {};

const container = document.createElement('div');
container.setAttribute('data-rzfury-snackbar', '');
container.className = '__rzfury_snackbar_container';

const style = document.createElement('style');
style.innerHTML = '.__rzfury_snackbar_container{display:flex;overflow:hidden;position:absolute;bottom:0;left:0;padding-bottom:1rem;padding-left:1rem;flex-direction:column;pointer-events:none}.__rzfury_snackbar_close,.__rzfury_snackbar_item{animation-timing-function:ease-out;animation-fill-mode:forwards;animation-duration:.2s}.__rzfury_snackbar_item{pointer-events:auto;margin-top:.5rem;display:flex;flex-shrink:1;align-items:center;border-radius:.375rem;padding:.5rem;color:white;animation-name:__RZFURY_SNACKBAR_ENTER}.__rzfury_snackbar_item.__rzfury_snackbar_default{background-color:rgb(30 41 59)}:is([data-theme=dark] .__rzfury_snackbar_item.__rzfury_snackbar_default){border-width:1px;border-color:rgb(100 116 139)}.__rzfury_snackbar_item.__rzfury_snackbar_success{background-color:rgb(34 197 94)}.__rzfury_snackbar_item.__rzfury_snackbar_danger{background-color:rgb(255 38 38)}.__rzfury_snackbar_item.__rzfury_snackbar_warning{background-color:rgb(251 191 36)}.__rzfury_snackbar_close{animation-name:__RZFURY_SNACKBAR_EXIT}@keyframes __RZFURY_SNACKBAR_ENTER{from{transform:translateX(-200px);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes __RZFURY_SNACKBAR_EXIT{from{transform:scale(1);opacity:1}to{transform:scale(.5);opacity:0}}';

window.rzfury.snackbar = function (config) {
    let timeout1, timeout2;
    const container = document.querySelector('[data-rzfury-snackbar]');
    const snackbar = document.createElement('div');
    snackbar.classList.add('__rzfury_snackbar_item', `__rzfury_snackbar_${config.type ? config.type : 'default'}`);

    timeout1 = setTimeout(() => {
        snackbar.classList.add('__rzfury_snackbar_close');
    }, 3000);

    timeout2 = setTimeout(() => {
        snackbar.remove();
    }, 3500);

    snackbar.onclick = () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);

        snackbar.classList.add('__rzfury_snackbar_close');

        setTimeout(() => {
            snackbar.remove();
        }, 200);
    };

    snackbar.innerHTML = (`
      <div style="display: flex; align-items: center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="width:1.5rem;height:1.5rem;color:white">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <span style="text:white;margin-inline:0.5rem">${config.content}</span>
      </div>
    `).trim();

    container.appendChild(snackbar);
}

document.body.append(container);
document.body.append(style);