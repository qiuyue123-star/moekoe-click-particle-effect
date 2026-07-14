// 后台持久化存储插件开关、选中特效
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(["clickEffectSwitch", "activeEffect"], (res) => {
    if (res.clickEffectSwitch === undefined) {
      chrome.storage.local.set({ clickEffectSwitch: false });
    }
    if (res.activeEffect === undefined) {
      chrome.storage.local.set({ activeEffect: "purple-gradient" });
    }
  });
});

