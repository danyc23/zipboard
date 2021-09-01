import { Meteor } from "meteor/meteor";
import { CommentsCollection } from "../imports/api/comments";
import { Accounts } from "meteor/accounts-base";

const SEED_USERNAME = "meteorite";
const SEED_PASSWORD = "password";
const insertComment = (comment) =>
  CommentsCollection.insert({ comment: comment });
Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
  if (CommentsCollection.find().count() === 0) {
    [
      "Hi! I am happy learning Meteor!",
      "I can't stop think about how easy this is!",
      "Hi! my name is Daniel",
    ].forEach((comment) => {
      insertComment(comment);
    });
  }
});
