"use client";
import React, { useState } from "react";
import "./Comment.css";

const CommentThread = ({ comment, depth = 0 }) => {
  const [showReplies, setShowReplies] = useState(false);
  const hasReplies = comment.replies && comment.replies.length > 0;

  return (
    <div className={`relative pl-9 ${depth > 0 ? "comment-branch " : ""}`}>
      <div className="flex items-start relative">
        <div className="w-10 h-10 mr-3 flex-shrink-0 relative z-10">
          <img
            src={comment.avatar}
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
        </div>

        <div>
          <div className="flex items-center mb-1">
            <span className="font-semibold mr-2">{comment.username}</span>
            <span className="text-gray-400 text-sm">2 hr ago</span>
          </div>
          <p className="text-sm text-gray-800">{comment.text}</p>
          <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
            <p>👍 {comment.likes}</p>
            <button className="text-blue-600 font-semibold">Reply</button>
          </div>
        </div>
      </div>

      {hasReplies && (
        <div className="mt-5">
          {showReplies ? (
            comment.replies.map((reply, i) => (
              <CommentThread key={i} comment={reply} depth={depth + 1} />
            ))
          ) : (
            <div className={`relative pl-9 comment-branch`}>
              <div className="flex items-start relative">
                
                <button
                  className="text-sm text-gray-500 flex items-center mt-2"
                  onClick={() => setShowReplies(true)}
                >
                  <span className="border rounded-full w-4 h-4 flex items-center justify-center mr-1 text-xs">
                    +
                  </span>
                  {comment.replies.length} more repl
                  {comment.replies.length > 1 ? "ies" : "y"}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CommentThread;
