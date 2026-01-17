import { BaseSideService } from "@zeppos/zml/base-side";
import { getStopTimesByStopCode } from "@dubisdev/crtm-api"
import { isGetStopTimesRequest } from "../shared/ipc";

AppSideService(
  BaseSideService({
    onInit() { },

    onRequest(req, res) {
      if (isGetStopTimesRequest(req)) {
        getStopTimesByStopCode(req.params.stopCode)
          .then((data) => res(null, data))
          .catch((error) => {
            console.log("Error fetching stop times:", error);
            res(error);
          });

        return
      }
    },

    onRun() { },

    onDestroy() { },
  })
);
