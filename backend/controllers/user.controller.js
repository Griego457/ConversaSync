import Conversation from "../models/conversation.model.js";
import User from "../models/user.model.js";

export const getUserForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const result = await Conversation.find({
      participants: loggedInUserId,
    }).select("participants");

    const userId = result.flatMap((entry) => entry.participants);

    const filteredUser = await User.find({
      _id: { $in: userId, $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filteredUser);
  } catch (error) {
    console.log("Error in getUserForSidebar controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUserByName = async (req, res) => {
  try {
    const { name } = req.body;
    const loggedInUserName = req.user.fullName;
    const result = await User.find({
      fullName: { $regex: name, $ne: loggedInUserName },
    }).select("-password");

    res.status(200).json(result);
  } catch (error) {
    console.log("Error in getUserByName controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
