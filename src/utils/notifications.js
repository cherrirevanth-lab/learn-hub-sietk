/**
 * Notification helpers for Learn Hub PWA.
 * - Requests permission
 * - Registers the service worker
 * - Fires local study-reminder notifications via the SW
 * - Persists the user's notification preference
 */

const PREF_KEY = "learnhub_notify_pref";

export function getNotifyPref() {
  try {
    const raw = localStorage.getItem(PREF_KEY);
    return raw ? JSON.parse(raw) : { enabled: false, reminder: "daily", lastShown: null };
  } catch {
    return { enabled: false, reminder: "daily", lastShown: null };
  }
}

export function saveNotifyPref(pref) {
  localStorage.setItem(PREF_KEY, JSON.stringify(pref));
}

export async function registerSW() {
  if (!("serviceWorker" in navigator)) return null;
  try {
    return await navigator.serviceWorker.register("/sw.js");
  } catch {
    console.warn("SW registration failed", e);
    return null;
  }
}

export function notificationSupported() {
  return "Notification" in window && "serviceWorker" in navigator;
}

export function currentPermission() {
  return notificationSupported() ? Notification.permission : "unsupported";
}

/** Ask the user for notification permission. Returns 'granted' | 'denied' | 'default'. */
export async function requestPermission() {
  if (!notificationSupported()) return "unsupported";
  if (Notification.permission === "granted") return "granted";
  return await Notification.requestPermission();
}

/** Send a notification through the service worker (works even if tab is closed). */
export async function sendNotification({ title, body, url = "/", icon = "/icon-192.png", tag = "learnhub-study", delay = 0 }) {
  if (currentPermission() !== "granted") return false;
  const reg = await registerSW();
  if (!reg || !reg.showNotification) return false;

  if (delay > 0) {
    // schedule with a timer while the page is open (best effort local reminder)
    setTimeout(() => {
      reg.showNotification(title, { body, icon, badge: "/icons/icon-64.png", tag, data: { url } });
    }, delay);
    return true;
  }

  reg.showNotification(title, { body, icon, badge: "/icons/icon-64.png", tag, data: { url } });
  return true;
}

/** Check whether a reminder is due based on the chosen frequency; fire if so. */
export async function maybeSendReminder(pref) {
  if (!pref.enabled || currentPermission() !== "granted") return;
  const now = Date.now();
  const last = pref.lastShown ? new Date(pref.lastShown).getTime() : 0;
  const day = 24 * 60 * 60 * 1000;
  const intervals = { daily: day, "3days": 3 * day, weekly: 7 * day };
  const gap = intervals[pref.reminder] || day;
  if (now - last < gap) return;

  const sent = await sendNotification({
    title: "Learn Hub · Study reminder",
    body: "Your SIETK units and question-bank answers are waiting. Open your study plan and keep your streak going!",
    url: "/roadmap",
    tag: "learnhub-reminder",
  });
  if (sent) {
    saveNotifyPref({ ...pref, lastShown: new Date().toISOString() });
  }
}
