import React from 'react';
import { ChatMessage, Character } from '../../types';

interface ChatMessageItemProps {
  message: ChatMessage;
  characters: Character[];
  viewerId: string;
  isLargeText: boolean;
}

export const ChatMessageItem: React.FC<ChatMessageItemProps> = ({
  message,
  characters,
  viewerId,
  isLargeText,
}) => {
  // System notices
  if (message.isSystemNotice) {
    return (
      <div className="flex justify-center my-3 px-4">
        <div className="bg-[#FAF6EE] text-[#1F2A33]/70 border border-[#E9E2D5] px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium text-center max-w-lg shadow-xs">
          {message.text}
        </div>
      </div>
    );
  }

  // Deleted message notice
  if (message.isDeleted) {
    const sender = characters.find((c) => c.id === message.senderId);
    return (
      <div className="flex items-center gap-2 my-2 px-3 sm:px-4 text-xs italic text-[#1F2A33]/50">
        <span
          className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0 opacity-60"
          style={{ backgroundColor: sender?.avatarColor || '#6B7A82' }}
        >
          {sender?.initials || '??'}
        </span>
        <span>{message.text}</span>
      </div>
    );
  }

  const sender = characters.find((c) => c.id === message.senderId);
  const isViewer = message.senderId === viewerId;
  const isPrivate = message.isPrivateDM;

  return (
    <div
      className={`flex items-end gap-2.5 my-3 px-2 sm:px-4 transition-all duration-200 ${
        isViewer ? 'justify-end' : 'justify-start'
      }`}
    >
      {/* Avatar for incoming messages */}
      {!isViewer && (
        <div
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-xs mb-1"
          style={{ backgroundColor: sender?.avatarColor || '#3B6E8C' }}
          title={sender?.name || 'Friend'}
        >
          {sender?.initials || sender?.name?.slice(0, 2).toUpperCase() || '??'}
        </div>
      )}

      {/* Message Bubble Container */}
      <div
        className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-3.5 sm:p-4 shadow-xs relative ${
          isViewer
            ? isPrivate
              ? 'bg-[#3B6E8C] text-white rounded-br-xs'
              : 'bg-[#2E7D6B] text-white rounded-br-xs'
            : isPrivate
            ? 'bg-[#EBF1F5] text-[#1F2A33] border border-[#3B6E8C]/30 rounded-bl-xs'
            : 'bg-white text-[#1F2A33] border border-[#E9E2D5] rounded-bl-xs'
        }`}
      >
        {/* Private DM Banner Indicator if applicable */}
        {isPrivate && (
          <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider mb-1 opacity-80">
            <span>🔒 Direct Message</span>
          </div>
        )}

        {/* Sender Name (only for incoming in group chat) */}
        {!isViewer && !isPrivate && (
          <div className="text-xs font-bold text-[#1F2A33]/70 mb-1 flex items-center justify-between gap-3">
            <span>{sender?.name || 'Classmate'}</span>
            <span className="text-[10px] font-normal text-[#1F2A33]/50">
              {message.timestamp}
            </span>
          </div>
        )}

        {/* Message Text: Minimum 18px (`text-lg`) for readability, `text-xl` on large mode */}
        <p
          className={`${
            isLargeText ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
          } leading-relaxed font-normal break-words`}
        >
          {message.text}
        </p>

        {/* Timestamp on outgoing messages */}
        {isViewer && (
          <div className="text-[10px] text-right mt-1 opacity-75">
            {message.timestamp}
          </div>
        )}

        {/* If private incoming, timestamp */}
        {!isViewer && isPrivate && (
          <div className="text-[10px] text-right mt-1 text-[#1F2A33]/50">
            {message.timestamp}
          </div>
        )}
      </div>

      {/* Viewer Avatar for outgoing */}
      {isViewer && (
        <div
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-xs mb-1"
          style={{ backgroundColor: sender?.avatarColor || '#2E7D6B' }}
          title={`${sender?.name} (You)`}
        >
          {sender?.initials || 'ME'}
        </div>
      )}
    </div>
  );
};
