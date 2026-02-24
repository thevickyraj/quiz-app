"use client";
import { useState } from "react";
import { questionBank } from "../data/questions";

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

// Inline SVG Icons for a polished look without extra dependencies
const CheckIcon = () => (
  <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

const XIcon = () => (
  <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function Page() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  const startQuiz = () => {
    const selected = shuffleArray(questionBank).slice(0, 60);
    const shuffled = selected.map((q) => ({
      ...q,
      options: shuffleArray(q.options),
    }));

    setQuestions(shuffled);
    setCurrent(0);
    setAnswers({});
    setStarted(true);
    setFinished(false);
  };

  const handleAnswer = (option) => {
    setAnswers({
      ...answers,
      [current]: option,
    });
  };

  const nextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prevQuestion = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const submitQuiz = () => {
    setFinished(true);
  };

  const score = questions.reduce((acc, q, index) => {
    return answers[index] === q.answer ? acc + 1 : acc;
  }, 0);

  // ===============================
  // START SCREEN
  // ===============================
  if (!started) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-12 text-center w-full max-w-md border border-slate-100 transition-all">
          <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            Knowledge Check
          </h1>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Test your skills with our randomized 60-question quiz. Are you ready?
          </p>
          <button
            onClick={startQuiz}
            className="w-full bg-indigo-600 text-white font-medium py-3.5 rounded-xl hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 transition-all active:scale-[0.98]"
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  // ===============================
  // RESULT SCREEN
  // ===============================
  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <div className="min-h-screen bg-slate-50 flex justify-center p-6 py-12">
        <div className="w-full max-w-3xl">
          {/* Score Header */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 text-center mb-8">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">
              Quiz Completed
            </h2>
            <div className="text-5xl font-extrabold text-slate-900 mb-2">
              {score} <span className="text-2xl text-slate-400 font-medium">/ {questions.length}</span>
            </div>
            <p className={`text-lg font-medium ${percentage >= 70 ? 'text-emerald-500' : 'text-amber-500'}`}>
              You scored {percentage}%
            </p>
          </div>

          {/* Review Answers */}
          <div className="space-y-4">
            {questions.map((q, index) => {
              const correct = answers[index] === q.answer;
              const answered = answers[index] !== undefined;

              return (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border ${
                    correct ? "bg-emerald-50/50 border-emerald-100" : "bg-white border-slate-200 shadow-sm"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      {correct ? <CheckIcon /> : <XIcon />}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-slate-900 mb-3">
                        <span className="text-slate-400 mr-2">{index + 1}.</span> 
                        {q.question}
                      </p>

                      <div className="space-y-1.5">
                        <p className="text-sm flex items-center gap-2">
                          <span className="text-slate-500 w-24">Your Answer:</span>
                          <span className={`font-medium ${correct ? "text-emerald-700" : "text-rose-600"}`}>
                            {answered ? answers[index] : "Skipped"}
                          </span>
                        </p>

                        {!correct && (
                          <p className="text-sm flex items-center gap-2">
                            <span className="text-slate-500 w-24">Correct:</span>
                            <span className="font-medium text-emerald-700">
                              {q.answer}
                            </span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={startQuiz}
            className="w-full mt-8 bg-indigo-600 text-white font-medium px-6 py-4 rounded-xl hover:bg-indigo-700 transition shadow-lg shadow-indigo-200 active:scale-[0.99]"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  // ===============================
  // QUIZ SCREEN
  // ===============================
  const question = questions[current];
  const progressPercentage = ((current + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm font-medium text-slate-500 mb-3">
            <span>Question {current + 1} of {questions.length}</span>
            <span>{Math.round(progressPercentage)}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2.5">
            <div
              className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8 md:p-10">
          <h2 className="text-2xl font-semibold text-slate-900 mb-8 leading-snug">
            {question.question}
          </h2>

          <div className="space-y-3">
            {question.options.map((option, idx) => {
              const selected = answers[current] === option;

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4
                    ${
                      selected
                        ? "border-indigo-600 bg-indigo-50/50 text-indigo-900"
                        : "border-slate-100 hover:border-indigo-200 hover:bg-slate-50 text-slate-700"
                    }`}
                >
                  {/* Custom Radio Button Indicator */}
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors
                    ${selected ? "border-indigo-600" : "border-slate-300"}
                  `}>
                    {selected && <div className="w-2.5 h-2.5 rounded-full bg-indigo-600" />}
                  </div>
                  <span className="font-medium">{option}</span>
                </button>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-10 pt-6 border-t border-slate-100">
            <button
              onClick={prevQuestion}
              disabled={current === 0}
              className="px-6 py-2.5 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            {current === questions.length - 1 ? (
              <button
                onClick={submitQuiz}
                className="px-8 py-2.5 text-sm font-medium bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition active:scale-95"
              >
                Submit Quiz
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                className="px-8 py-2.5 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition active:scale-95 shadow-md shadow-indigo-200"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}