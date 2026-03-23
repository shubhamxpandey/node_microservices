module.exports = {

  createPost: {
    type: "object",
    required: ["userId", "content"],
    properties: {

      userId: {
        type: "number"
      },

      content: {
        type: "string"
      }

    }
  },

  likePost: {
    type: "object",
    required: ["userId", "postId"],
    properties: {

      userId: {
        type: "number"
      },

      postId: {
        type: "number"
      }

    }
  },

  commentPost: {
    type: "object",
    required: ["userId", "postId", "comment"],
    properties: {

      userId: {
        type: "number"
      },

      postId: {
        type: "number"
      },

      comment: {
        type: "string"
      }

    }
  }

};