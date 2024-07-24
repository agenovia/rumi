import express from "express";
import createRecallPage from "../../views/recall.js";
import createRecapPage from "../../views/recap.js";
import createRecordPage from "../../views/record.js";

const router = express.Router();

router.get("/home", (req, res) => {
  res.send(createRecordPage());
});

// router.route("/record", (req, res) => {
//   res.send(createRecordPage());
// });
router
  .route("/record")
  .all((req, res, next) => next())
  .get((req, res) => res.send(createRecordPage()))
  .post((req, res, next) => {
    next(new Error("Not Implemented"));
  })
  .put((req, res, next) => {
    next(new Error("Not Implemented"));
  });

router
  .route("/recap")
  .all((req, res, next) => next())
  .get((req, res) => res.send(createRecapPage()))
  .post((req, res, next) => {
    next(new Error("Not Implemented"));
  });

router
  .route("/recall")
  .all((req, res, next) => next())
  .get((req, res) => res.send(createRecallPage()))
  .post((req, res, next) => {
    next(new Error("Not Implemented"));
  });

export default router;
