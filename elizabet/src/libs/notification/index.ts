import removePushToken from "../database/utils/removePushToken";

const admin = require("firebase-admin");
interface LightSettings {
  color: string;
  lightOnDurationMillis: number;
  lightOffDurationMillis: number;
}

enum NotificationPriority {
  DEFAULT = "DEFAULT",
  MIN = "MIN",
  LOW = "LOW",
  HIGH = "HIGH",
  MAX = "MAX",
}

enum Visibility {
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC",
  SECRET = "SECRET",
}

interface Notification {
  title: string;
  body: string;
  icon?: string;
  color?: string;
  sound?: string;
  tag?: string;
  click_action?: string;
  body_loc_key?: string;
  body_loc_args?: string[];
  title_loc_key?: string;
  title_loc_args?: string[];
  channel_id?: string;
  ticker?: string;
  sticky?: boolean;
  event_time?: string;
  local_only?: boolean;
  notification_priority?: NotificationPriority;
  default_sound?: boolean;
  default_vibrate_timings?: boolean;
  default_light_settings?: boolean;
  vibrate_timings?: string[];
  visibility?: Visibility;
  notification_count?: number;
  light_settings?: LightSettings;
  image?: string;
}

class PushNotification {
  private serviceAccount: any;
  constructor() {
    this.serviceAccount = require("../../../firebase.json");
    this.initializeFirebase();
  }

  private initializeFirebase() {
    admin.initializeApp({
      credential: admin.credential.cert(this.serviceAccount),
    });
  }

  async send(tokens: string[], notification: Notification) {
    try {
      const message = {
        notification,
        tokens: tokens,
      };
      const response = await admin.messaging().sendMulticast(message);
      // remove all tokens fails
      removePushToken(response.responses, tokens);
      //--
      console.log("failureCount:", response.failureCount);
      console.log("successCount:", response.successCount);
    } catch (error) {
      console.error("Error sending massive message:", error);
    }
  }
}
export default new PushNotification();
