/***
 * @author sa0ChunLuyu
 * @date 2019/11/1 8:21 下午
 */


const setRem = (width) => document.documentElement.style.fontSize = document.documentElement.clientWidth / (width / 10) + 'px';
const width = window.screen.width <= 800 ? 750 : 1920;
export default (width = width) => {
    setRem(width);
    window.addEventListener('resize', setRem);
}
