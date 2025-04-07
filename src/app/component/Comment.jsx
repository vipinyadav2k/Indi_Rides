"use client";
import React from "react";
import CommentThread from "./CommentThread";

const Comment = () => {
  const comments = [
    {
      username: "Vipin Yadav",
      avatar: "https://i.pravatar.cc/150?img=3",
      text: "Get me my bonus points !!!!",
      likes: 38,
      replies: [
        {
          username: "Vipin Yadav",
          avatar: "https://i.pravatar.cc/150?img=3",
          text: "Reply to the bonus point comment",
          likes: 5,
          replies: [
            {
              username: "Vipin Yadav",
              avatar: "https://i.pravatar.cc/150?img=3",
              text: "Nested reply again",
              likes: 1,
            },
          ],
        },
        {
          username: "Vipin Yadav",
          avatar: "https://i.pravatar.cc/150?img=3",
          text: "Another second-level reply",
          likes: 1,
        },
      ],
    },
    {
      username: "Vipin Yadav",
      avatar: "https://i.pravatar.cc/150?img=3",
      text: "Another comment at root",
      likes: 8,
      replies: [
        {
          username: "Vipin Yadav",
          avatar: "https://i.pravatar.cc/150?img=3",
          text: "Reply to root",
          likes: 8,
        },
      ],
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex space-x-8 pb-2 mb-2 border-b">
        <button className="border-b-2 border-indigo-600">
          Thoughts(25)
        </button>
        <button className="text-gray-900">Top Holders</button>
        <button className="text-gray-900">Activity</button>
      </div>

      <div className="relative w-full mb-4">
        <input
          className="w-full border border-gray-300 p-2 pr-16 rounded"
          placeholder="Add a comment"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 px-4 py-1">
          Post
        </button>
      </div>

      {comments.map((comment, index) => (
        <CommentThread key={index} comment={comment} />
      ))}
    </div>
  );
};

export default Comment;
