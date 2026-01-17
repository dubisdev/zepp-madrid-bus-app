import { BaseApp } from "@zeppos/zml/base-app";
import { pauseDropWristScreenOff, setPageBrightTime } from "@zos/display";
import { FavouritesStorage } from "./shared/favourites-storage";
import { GLOBAL_DATA_KEY_FAVOURITES_STORAGE } from "./shared/constants";
import { setStatusBarVisible } from "@zos/ui";

pauseDropWristScreenOff({
  duration: 0 // Indefinite
})
setPageBrightTime({
  brightTime: 2147483000 // MAX Allowed
})
setStatusBarVisible(false)

App(
  BaseApp({
    globalData: {
      [GLOBAL_DATA_KEY_FAVOURITES_STORAGE]: new FavouritesStorage()
    },
    onCreate() { },
    onDestroy() { },
  })
);
