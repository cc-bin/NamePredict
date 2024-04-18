import { showToast } from "../components/GlobalToast";

export function activityShare(data) {
  const text =
    "Activity: " +
    data.activity +
    "\n\n" +
    "Type: " +
    data.type +
    "\n\n" +
    "Participants: " +
    data.participants +
    "\n\n" +
    "Price: " +
    data.price +
    "\n\n" +
    "Accessibility: " +
    data.accessibility;
  share(text);
}

export function share(text) {
  copyToClipboard(text)
    .then(() => {
      showToast("Activity copied to clipboard!");
    })
    .catch((error) => {
      showToast("Error copying activity!");
    });
}

function copyToClipboard(textToCopy) {
  // navigator clipboard 需要https等安全上下文
  if (navigator.clipboard && window.isSecureContext) {
    // navigator clipboard 向剪贴板写文本
    return navigator.clipboard.writeText(textToCopy);
  } else {
    // 创建text area
    let textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    // 使text area不在viewport，同时设置不可见
    textArea.style.position = "absolute";
    textArea.style.opacity = 0;
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    return new Promise((res, rej) => {
      // 执行复制命令并移除文本框
      document.execCommand("copy") ? res() : rej();
      textArea.remove();
    });
  }
}
