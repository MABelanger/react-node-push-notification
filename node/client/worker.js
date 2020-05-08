console.log("Service Worker Loader...");

self.addEventListener("push", (e) => {
  const data = e.data.json();
  console.log("Push Received...");
  self.registration.showNotification(data.title, {
    body: "Notified by Me",
    icon: "http://image.ibb.co/frYOFd/tmlogo.png",
  });
});
