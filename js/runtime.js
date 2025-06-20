var now = new Date();
function createtime() {
  // 当前时间
  now.setTime(now.getTime() + 1000);
  var start = new Date("06/03/2021 00:00:00"); // 旅行者1号开始计算的时间
  var dis = Math.trunc(23400000000 + ((now - start) / 1000) * 17); // 距离=秒数*速度 记住转换毫秒
  var unit = (dis / 149600000).toFixed(6);  // 天文单位
  var grt = new Date("08/09/2022 00:00:00");	// 网站诞生时间
  var days = (now - grt) / 1e3 / 60 / 60 / 24,
    dnum = Math.floor(days),
    hours = (now - grt) / 1e3 / 60 / 60 - 24 * dnum,
    hnum = Math.floor(hours);
  1 == String(hnum).length && (hnum = "0" + hnum);
  var minutes = (now - grt) / 1e3 / 60 - 1440 * dnum - 60 * hnum,
    mnum = Math.floor(minutes);
  1 == String(mnum).length && (mnum = "0" + mnum);
  var seconds = (now - grt) / 1e3 - 86400 * dnum - 3600 * hnum - 60 * mnum,
    snum = Math.round(seconds);
  1 == String(snum).length && (snum = "0" + snum);
  let currentTimeHtml = "";
  (currentTimeHtml =
    hnum < 18 && hnum >= 9
    ? `<img class='boardsign' src='https://img.shields.io/badge/%E6%9C%AC%E7%AB%99%E6%AD%A3%E5%9C%A8%E8%90%A5%E4%B8%9A%E4%B8%AD-6adea8?style=social&logo=cakephp' title='什么时候能够实现财富自由呀~'><br><div style="font-size:13px;font-weight:bold">本站居然运行了 ${dnum} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${dis} 千米，约为 ${unit} 个天文单位 🚀<br><a href="https://beian.miit.gov.cn/" target="_blank">豫ICP备2025131549号</a></div><p><a target="_blank" href="https://hexo.io/"><img src="https://img.shields.io/badge/Frame-Hexo-blue?style=flat&logo=hexo" title="博客框架为Hexo_v6.3.0"></a>&nbsp;<a target="_blank" href="https://butterfly.js.org/"><img src="https://img.shields.io/badge/Theme-Butterfly-6513df?style=flat&logo=bitdefender" title="主题版本Butterfly_v4.3.1"></a>&nbsp;<a target="_blank" href="https://www.jsdelivr.com/"><img src="https://img.shields.io/badge/CDN-jsDelivr-orange?style=flat&logo=jsDelivr" title="本站使用JsDelivr为静态资源提供CDN加速"></a> &nbsp;<a target="_blank" href="https://vercel.com/ "><img src="https://img.shields.io/badge/Hosted-Vervel-brightgreen?style=flat&logo=Vercel" title="本站采用多线部署，主线路托管于Vercel"></a>&nbsp;<a target="_blank" href="https://vercel.com/ "><img src="https://img.shields.io/badge/Hosted-Coding-0cedbe?style=flat&logo=Codio" title="本站采用双线部署，联通线路托管于Coding"></a>&nbsp;<a target="_blank" href="https://github.com/"><img src="https://img.shields.io/badge/Source-Github-d021d6?style=flat&logo=GitHub" title="本站项目由Gtihub托管"></a>&nbsp;<a target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img src="https://img.shields.io/badge/Copyright-BY--NC--SA%204.0-d42328?style=flat&logo=Claris" title="本站采用知识共享署名-非商业性使用-相同方式共享4.0国际许可协议进行许可"></a></p>`
    : `<img class='boardsign' src='https://img.shields.io/badge/%E4%B8%8B%E7%8F%AD%E4%BC%91%E6%81%AF%E5%95%A6%EF%BC%81-6adea8?style=social&logo=coffeescript' title='下班回家打游戏咯~'><br><div style="font-size:13px;font-weight:bold">本站居然运行了 ${dnum} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${dis} 千米，约为 ${unit} 个天文单位 🚀<br><a href="https://beian.miit.gov.cn/" target="_blank">豫ICP备2025131549号</a></div><p><a target="_blank" href="https://hexo.io/"><img src="https://img.shields.io/badge/Frame-Hexo-blue?style=flat&logo=hexo" title="博客框架为Hexo_v6.3.0"></a>&nbsp;<a target="_blank" href="https://butterfly.js.org/"><img src="https://img.shields.io/badge/Theme-Butterfly-6513df?style=flat&logo=bitdefender" title="主题版本Butterfly_v4.3.1"></a>&nbsp;<a target="_blank" href="https://www.jsdelivr.com/"><img src="https://img.shields.io/badge/CDN-jsDelivr-orange?style=flat&logo=jsDelivr" title="本站使用JsDelivr为静态资源提供CDN加速"></a> &nbsp;<a target="_blank" href="https://vercel.com/ "><img src="https://img.shields.io/badge/Hosted-Vervel-brightgreen?style=flat&logo=Vercel" title="本站采用多线部署，主线路托管于Vercel"></a>&nbsp;<a target="_blank" href="https://vercel.com/ "><img src="https://img.shields.io/badge/Hosted-Coding-0cedbe?style=flat&logo=Codio" title="本站采用双线部署，联通线路托管于Coding"></a>&nbsp;<a target="_blank" href="https://github.com/"><img src="https://img.shields.io/badge/Source-Github-d021d6?style=flat&logo=GitHub" title="本站项目由Gtihub托管"></a>&nbsp;<a target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img src="https://img.shields.io/badge/Copyright-BY--NC--SA%204.0-d42328?style=flat&logo=Claris" title="本站采用知识共享署名-非商业性使用-相同方式共享4.0国际许可协议进行许可"></a></p>`),
    document.getElementById("workboard") &&
    (document.getElementById("workboard").innerHTML = currentTimeHtml);
}
// 设置重复执行函数，周期1000ms
setInterval(() => {
  createtime();
}, 1000);