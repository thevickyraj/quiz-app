"use client";
import { useState } from "react";
import { questionBank as fallbackQuestions } from "../data/allInOneFinal.js";

type QuizQuestion = {
  id?: number;
  question: string;
  options: string[];
  answer: string | string[];
};

type AnswerValue = string | string[];

const questionBank: QuizQuestion[] = Array.isArray(fallbackQuestions)
  ? (fallbackQuestions as QuizQuestion[])
  : [];
 
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
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, AnswerValue>>({});
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
 
  const startQuiz = () => {
    if (!Array.isArray(questionBank)) return;
 
    const orderedQuestions = questionBank.map((q) => ({
      ...q,
      options: [...(q.options || [])]
    }));
 
    setQuestions(orderedQuestions);
    setCurrent(0);
    setAnswers({});
    setRevealed({});
    setStarted(true);
    setFinished(false);
  };
 
  const handleAnswer = (option: string) => {
    const correct = questions[current]?.answer;
    const isQuestionMulti = Array.isArray(correct);

    if (!isQuestionMulti && revealed[current]) return;

    if (Array.isArray(correct)) {
      const prev = answers[current] ?? [];
      const prevArray = Array.isArray(prev) ? prev : [prev];

      if (prevArray.includes(option)) {
        setAnswers({
          ...answers,
          [current]: prevArray.filter((o) => o !== option)
        });
      } else {
        setAnswers({
          ...answers,
          [current]: [...prevArray, option]
        });
      }
    } else {
      setAnswers({
        ...answers,
        [current]: option
      });
      setRevealed({
        ...revealed,
        [current]: true
      });
    }
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
    const user = answers[index];
    const correct = q.answer;

    if (Array.isArray(correct)) {
      const userArray = Array.isArray(user) ? user : [];

      if (
        userArray.length === correct.length &&
        userArray.every((v) => correct.includes(v))
      ) {
        return acc + 1;
      }
    } else {
      if (user === correct) {
        return acc + 1;
      }
    }

    return acc;
  }, 0);
 
  if (!started) {
 
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
 
        <div className="bg-white rounded-3xl shadow-xl p-12 text-center w-full max-w-md border">
 
          <h1 className="text-3xl font-bold mb-3">
            Knowledge Check
          </h1>
 
          <p className="text-slate-500 mb-8">
            Test your skills with questions in a fixed order.
          </p>
 
          <button
            onClick={startQuiz}
            className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700"
          >
            Start Quiz
          </button>
 
        </div>
 
      </div>
    );
  }
 
  if (finished) {
 
    const percentage = Math.round((score / questions.length) * 100);
 
    return (
 
      <div className="min-h-screen bg-slate-50 flex justify-center p-6 py-12">
 
        <div className="w-full max-w-3xl">
 
          <div className="bg-white rounded-3xl p-8 text-center mb-8 border">
 
            <h2 className="text-sm uppercase tracking-widest text-slate-400 mb-2">
              Quiz Completed
            </h2>
 
            <div className="text-5xl font-extrabold text-slate-900 mb-2">
              {score} / {questions.length}
            </div>
 
            <p className={`text-lg font-medium ${percentage >= 70 ? 'text-emerald-500' : 'text-amber-500'}`}>
              You scored {percentage}%
            </p>
 
          </div>
 
          <div className="space-y-4">
 
            {questions.map((q, index) => {
 
              const correctAnswer = q.answer;
              const userAnswer = answers[index];
 
              const correct = Array.isArray(correctAnswer)
                ? JSON.stringify([...correctAnswer].sort()) === JSON.stringify([...(userAnswer || [])].sort())
                : userAnswer === correctAnswer;
 
              return (
 
                <div key={index} className={`p-6 rounded-2xl border ${correct ? "bg-emerald-50 border-emerald-100" : "bg-white border-slate-200"}`}>
 
                  <div className="flex items-start gap-4">
 
                    <div className="mt-1">
                      {correct ? <CheckIcon /> : <XIcon />}
                    </div>
 
                    <div>
 
                      <p className="font-medium mb-3">
                        {index + 1}. {q.question}
                      </p>
 
                      <p className="text-sm">
                        Your Answer:
                        <span className={`ml-2 font-medium ${correct ? "text-emerald-700" : "text-rose-600"}`}>
                          {Array.isArray(userAnswer) ? userAnswer.join(", ") : userAnswer || "Skipped"}
                        </span>
                      </p>
 
                      {!correct && (
                        <p className="text-sm mt-1">
                          Correct:
                          <span className="ml-2 font-medium text-emerald-700">
                            {Array.isArray(correctAnswer) ? correctAnswer.join(", ") : correctAnswer}
                          </span>
                        </p>
                      )}
 
                    </div>
 
                  </div>
 
                </div>
 
              );
 
            })}
 
          </div>
 
          <button
            onClick={startQuiz}
            className="w-full mt-8 bg-indigo-600 text-white px-6 py-4 rounded-xl hover:bg-indigo-700"
          >
            Retake Quiz
          </button>
 
        </div>
 
      </div>
    );
  }
 
  const question = questions[current] || { question: "", options: [] };
 
  const progressPercentage = ((current + 1) / questions.length) * 100;
 
  const isMulti = Array.isArray(question.answer);
  const answeredCount = questions.reduce(
    (count, _, index) => count + (answers[index] !== undefined ? 1 : 0),
    0
  );
 
  return (
 
    <div className="min-h-screen bg-slate-50 text-slate-900 p-4 sm:p-6">
 
      <div className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
 
        <main className="min-w-0">
        <div className="mb-6 rounded-3xl border border-slate-900 bg-white p-7 shadow-sm">
 
          <div className="flex justify-between text-sm text-slate-500 mb-3">
            <span>Question {current + 1} of {questions.length}</span>
            <span>{Math.round(progressPercentage)}%</span>
          </div>
 
          <div className="w-full bg-slate-200 rounded-full h-2">
 
            <div
              className="bg-indigo-600 h-2 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            />
 
          </div>
 
        </div>
 
        <div className="rounded-3xl border border-slate-900 bg-white p-6 shadow-sm sm:p-8">
 
          <h2 className="text-2xl font-semibold mb-8">
            {question.question}
          </h2>
 
          <div className="space-y-3">
 
            {(question.options || []).map((option, idx) => {
 
              const selected = isMulti
                ? (answers[current] || []).includes(option)
                : answers[current] === option;
              const isRevealed = revealed[current] && !isMulti;
              const isCorrectOption = !isMulti && option === question.answer;
              const isWrongSelection = isRevealed && selected && !isCorrectOption;
              const isCorrectSelection = isRevealed && isCorrectOption;
 
              return (
 
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  disabled={Boolean(isRevealed)}
                  className={`w-full text-left text-slate-900 p-4 rounded-xl border flex items-center gap-4
                  ${isWrongSelection ? "border-rose-500 bg-rose-50" : ""}
                  ${isCorrectSelection ? "border-emerald-500 bg-emerald-50" : ""}
                  ${!isRevealed && selected ? "border-indigo-600 bg-indigo-50" : ""}
                  ${!isRevealed ? "border-slate-200 hover:bg-slate-50" : ""}`}
                >
 
                  {isMulti ? (
 
                    <input
                      type="checkbox"
                      checked={selected}
                      readOnly
                      className="w-5 h-5 accent-indigo-600"
                    />
 
                  ) : (
 
                    <input
                      type="radio"
                      checked={selected}
                      readOnly
                      className="w-5 h-5 accent-indigo-600"
                    />
 
                  )}
 
                  <span className="flex-1">{option}</span>

                  {isWrongSelection && (
                    <span className="font-semibold text-rose-600">Wrong</span>
                  )}

                  {isCorrectSelection && (
                    <span className="font-semibold text-emerald-600">Correct</span>
                  )}
 
                </button>
 
              );
 
            })}
 
          </div>
 
          <div className="flex justify-between mt-10">
 
            <button
              onClick={prevQuestion}
              disabled={current === 0}
              className="px-6 py-2 border rounded-lg disabled:opacity-40"
            >
              Previous
            </button>
 
            {current === questions.length - 1 ? (
 
              <button
                onClick={submitQuiz}
                className="px-8 py-2 bg-slate-900 text-white rounded-lg"
              >
                Submit Quiz
              </button>
 
            ) : (
 
              <button
                onClick={nextQuestion}
                className="px-8 py-2 bg-indigo-600 text-white rounded-lg"
              >
                Next
              </button>
 
            )}
 
          </div>
 
        </div>
        </main>

        <aside className="rounded-3xl border border-slate-900 bg-white p-6 shadow-sm lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)]">
          <h2 className="text-xl font-bold text-slate-900">Question Dashboard</h2>
          <p className="mt-2 text-sm text-slate-600">
            Jump to any question and track answer status.
          </p>

          <div className="mt-5 flex items-center gap-4 text-xs text-slate-600">
            <span>{answeredCount} Answered</span>
            <span>{questions.length - answeredCount} Unanswered</span>
          </div>

          <div className="mt-4 grid max-h-[calc(100vh-13rem)] grid-cols-2 gap-3 overflow-y-auto pr-1 sm:grid-cols-3 lg:grid-cols-2">
            {questions.map((_, index) => {
              const isAnswered = answers[index] !== undefined;
              const isCurrent = current === index;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrent(index)}
                  className={`rounded-2xl border px-3 py-3 text-left text-sm transition-colors
                    ${isCurrent ? "border-indigo-600 bg-indigo-50 text-indigo-900" : "border-slate-200 bg-slate-50 text-slate-900 hover:border-indigo-300"}`}
                >
                  <span className="block font-medium">Q{index + 1}</span>
                  <span className={`mt-1 block text-xs font-semibold ${isAnswered ? "text-emerald-600" : "text-amber-600"}`}>
                    {isAnswered ? "Answered" : "Unanswered"}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>
 
      </div>
 
    </div>
  );
}