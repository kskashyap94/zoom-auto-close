var DEFAULT_TIMEOUT_INTERVAL = 6000;

setTimeout(function() {
    chrome.runtime.sendMessage({}, function() {});
  }, DEFAULT_TIMEOUT_INTERVAL);