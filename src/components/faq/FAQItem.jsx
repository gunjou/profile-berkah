import React from "react";
import { FiChevronDown } from "react-icons/fi";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      className="
        border border-gray-200 dark:border-white/10
        rounded-2xl overflow-hidden
        bg-white dark:bg-[#0f172a]
        transition
      "
    >
      <button
        onClick={onClick}
        className="
          w-full flex items-center justify-between
          px-6 py-5 text-left
          text-gray-900 dark:text-white
          font-semibold
        "
      >
        {question}
        <FiChevronDown
          className={`text-xl transition-transform ${
            isOpen ? "rotate-180 text-red-600" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-6 pb-6 text-gray-700 dark:text-gray-300 text-left leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
