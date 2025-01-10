import { useEffect, useRef, useState } from "react";
import { useRandomDigits } from "../CustomHooks/useRandomDigits";

const TwoCh = () => {
  // const [nextTwoDigitChallengeKey, setNextTwoDigitChallengeKey] = useState(0);
  // const [xTwoDigit, yTwoDigit] = useRandomDigits(2, nextTwoDigitChallengeKey);

  // const [nextThreeDigitChallengeKey, setNextThreeDigitChallengeKey] = useState(0);
  // const [xThreeDigit, yThreeDigit] = useRandomDigits(3, nextThreeDigitChallengeKey);

  // ... rest of your component logic

  // REFACTORED

  // 1

  const genMinMaxDigits = (digit) => {
    const min = Math.pow(10, digit - 1);
    const max = Math.pow(10, digit) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // 2

  const nextChallenge = (setNxtKey, inputRef, setCorrect) => {
    setNxtKey((prevKey) => prevKey + 1);
    inputRef.current.value = "";
    setCorrect(null);
  };

  // 3

  function handleSubmit(
    operationType,
    inputRef,
    xDigit,
    YDigit,
    setCorrect,
    event
  ) {
    event.preventDefault();
    const refValue = Number(inputRef.current.value);
    if (isNaN(refValue)) {
      alert("Please enter a valid number");
      return;
    }
    if (operationType === "subtract" && xDigit < YDigit) {
      [xDigit, YDigit] = [YDigit, xDigit]; // Swap values
    }
    const correctAns =
      operationType === "add"
        ? xDigit + YDigit
        : operationType == "subtract"
        ? xDigit - YDigit
        : null;
    const isCorrect = refValue === correctAns;
    setCorrect(isCorrect);
    console.log(correctAns, operationType);
  }

  // One digit Addition

  // const [xOneDigit, setXoneDigit] = useState(null);
  // const [yOneDigit, setYoneDigit] = useState(null);
  const [isOneDigitCorrect, setIsOneDigitCorrect] = useState(null);
  // const [nextOneDigitChallengeKey, setNextOneDigitChallengeKey] = useState(0);
  const oneDigInputRef = useRef();

  // useEffect(() => {
  //   setXoneDigit(genMinMaxDigits(1));
  //   setYoneDigit(genMinMaxDigits(1));
  // }, [nextOneDigitChallengeKey]);

  const [nextOneDigitChallengeKey, setNextOneDigitChallengeKey] = useState(0);
  const [xOneDigit, yOneDigit] = useRandomDigits(1, nextOneDigitChallengeKey);

  // Two Digit Addition
  const [xTwoDigit, setXtwoDigit] = useState(null);
  const [yTwoDigit, setYtwoDigit] = useState(null);
  const [isTwoDigitCorrect, setIsTwoDigitCorrect] = useState(null);
  const [nextTwoDigitChallengeKey, setNextTwoDigitChallengeKey] = useState(0);
  const twoDigInputRef = useRef();

  useEffect(() => {
    setXtwoDigit(genMinMaxDigits(2));
    setYtwoDigit(genMinMaxDigits(2));
  }, [nextTwoDigitChallengeKey]);

  // Three Digit Addition

  const [xThreeDigit, setXthreeDigit] = useState(null);
  const [yThreeDigit, setYthreeDigit] = useState(null);
  const [isThreeDigitCorrect, setIsThreeDigitCorrect] = useState(null);
  const [nextThreeDigitChallengeKey, setNextThreeDigitChallengeKey] =
    useState(0);
  const threeDigInputRef = useRef();

  useEffect(() => {
    setXthreeDigit(genMinMaxDigits(4));
    setYthreeDigit(genMinMaxDigits(3));
  }, [nextThreeDigitChallengeKey]);

  // Two Digit Substraction

  const [xTwoDigitMin, setXtwoDigitMin] = useState(null);
  const [yTwoDigitMin, setYtwoDigitMin] = useState(null);
  const [isTwoDigitMinCorrect, setIsTwoDigitMinCorrect] = useState(null);
  const [nextTwoDigitMinChallengeKey, setNextTwoDigitMinChallengeKey] =
    useState(0);
  const twoDigInputRefMin = useRef();

  useEffect(() => {
    setXtwoDigitMin(genMinMaxDigits(2));
    setYtwoDigitMin(genMinMaxDigits(2));
  }, [nextTwoDigitMinChallengeKey]);

  // three digit substraction

  const [xThreeDigitMin, setXthreeDigitMin] = useState(null);
  const [yThreeDigitMin, setYthreeDigitMin] = useState(null);
  const [isThreeDigitMinCorrect, setIsThreeDigitMinCorrect] = useState(null);
  const [nextThreeDigitMinChallengeKey, setNextThreeDigitMinChallengeKey] =
    useState(0);
  const threeDigInputRefMin = useRef();

  useEffect(() => {
    setXthreeDigitMin(genMinMaxDigits(4));
    setYthreeDigitMin(genMinMaxDigits(3));
  }, [nextThreeDigitMinChallengeKey]);

  return (
    <div>
      <h1 className="chapter" id="c02">
        <a id="page11"></a>Chapter 1
      </h1>
      <h1 className="subchapter">
        A Little Give and Take:
        <br />
        Mental Addition and Subtraction
      </h1>
      <p className="nonindent">
        <span className="big">F</span>or as long as I can remember, I have
        always found it easier to add and subtract numbers from left to right
        instead of from right to left. By adding and subtracting numbers this
        way, I found that I could call out the answers to math problems in class
        well before my classmates put down their pencils. And I didn’t even need
        a pencil!
      </p>
      <p className="indent">
        In this chapter you will learn the left-to-right method of doing mental
        addition and subtraction for most numbers that you encounter on a daily
        basis. These mental skills are not only important for doing the tricks
        in this book but are also indispensable in school, at work, or any time
        you use numbers. Soon you will be able to retire your calculator and use
        the full capacity of your mind as you add and subtract two-digit,
        three-digit, and even four-digit numbers with lightning speed.
      </p>
      <h2 className="section">
        <strong>LEFT-TO-RIGHT ADDITION</strong>
      </h2>
      <p className="nonindent">
        Most of us are taught to do math on paper from right to left. And that’s
        fine for doing math on paper. But if you want to do
        <a id="page12"></a>math <em>in your head</em> (even <em>faster</em> than
        you can on paper) there are many good reasons why it is better to work
        from left to right. After all, you read numbers from left to right, you
        pronounce numbers from left to right, and so it’s just more natural to
        think about (and calculate) numbers from left to right. When you compute
        the answer from right to left (as you probably do on paper), you
        generate the answer backward. That’s what makes it so hard to do math in
        your head. Also, if you want to estimate your answer, it’s more
        important to know that your answer is “a little over 1200” than to know
        that your answer “ends in 8.” Thus, by working from left to right, you
        begin with the most significant digits of your problem. If you are used
        to working from right to left on paper, it may seem unnatural to work
        with numbers from left to right. But with practice you will find that it
        is the most natural and efficient way to do mental calculations.
      </p>
      <p className="indent">
        With the first set of problems—two-digit addition—the left-to-right
        method may not seem so advantageous. But be patient. If you stick with
        me, you will see that the only easy way to solve three-digit and larger
        addition problems, all subtraction problems, and most definitely all
        multiplication and division problems is from left to right. The sooner
        you get accustomed to computing this way, the better.
      </p>
      <div className="border  my-9">
        <h1 className="text-3xl text-center">
          Unlimited Interactive One-digit Exercise
        </h1>
        <p className="my-4 text-sm ">
          Well, The author Assumed that you already know one Digit equation
          mentally, Just in case you don&apos;t know, here&apos;s you can do as
          much as practice to lay the ground work, Because if you have weakness
          here, then You are gonna be struggling with all mental equation even
          after learning the tricks
        </p>
        <div>
          <form
            onSubmit={(event) =>
              handleSubmit(
                "add",
                oneDigInputRef,
                xOneDigit,
                yOneDigit,
                setIsOneDigitCorrect,
                event
              )
            }
          >
            <div className="flex gap-1 items-cen">
              <p className="m-0">{xOneDigit}</p>
              <p className="m-0">+</p>
              <p className="m-0">{yOneDigit} </p>
              <p className="m-0">=</p>
              <div>
                <input
                  type="text"
                  name="number"
                  className="border mb-4"
                  ref={oneDigInputRef}
                  id="oneDigitInput"
                  autoComplete="off"
                />
                <p className="text-xs m-0 sm:hidden">
                  {isOneDigitCorrect == null
                    ? ""
                    : isOneDigitCorrect == true
                    ? "Well done! Your answer is correct!"
                    : "Oops! That’s not quite right. Please try again."}
                </p>
                <div className="flex gap-1">
                  <button type="submit" className="border py-1 px-2">
                    Enter
                  </button>
                  {isOneDigitCorrect ? (
                    <button
                      onClick={() =>
                        nextChallenge(
                          setNextOneDigitChallengeKey,
                          oneDigInputRef,
                          setIsOneDigitCorrect
                        )
                      }
                    >
                      {" "}
                      Next
                    </button>
                  ) : null}
                </div>
              </div>
              <p className="text-xs m-0 hidden sm:block">
                {isOneDigitCorrect == null
                  ? ""
                  : isOneDigitCorrect == true
                  ? "Well done! Your answer is correct!"
                  : "Oops! That’s not quite right. Please try again."}
              </p>
            </div>
          </form>
        </div>
      </div>

      <h3 className="section">
        <strong>Two-Digit Addition</strong>
      </h3>
      <p className="nonindent">
        Our assumption in this chapter is that you know how to add and subtract
        one-digit numbers. We will begin with two-digit addition, something I
        suspect you can already do fairly well in your head. The following
        exercises are good practice, however, because the two-digit addition
        skills that you acquire here will be needed for larger addition
        problems, as well as virtually all <a id="page13"></a>multiplication
        problems in later chapters. It also illustrates a fundamental principle
        of mental arithmetic—namely, to <em>simplify</em> your problem by
        breaking it into smaller, more manageable parts. This is the key to
        virtually every method you will learn in this book. To paraphrase an old
        saying, there are three components to success—simplify, simplify,
        simplify.
      </p>
      <p className="indent">
        The easiest two-digit addition problems are those that do not require
        you to <em>carry</em> any numbers, when the first digits sum to 9 or
        below and the last digits sum to 9 or below. For example:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="46"
          src="/Static/images/Benj_9780307347466_epub_014_r1.jpg"
          width="122"
        />
      </div>
      <p className="indent">
        To solve 47 + 32, first add 30, then add 2. After adding 30, you have
        the
        <em>simpler</em> problem 77 + 2, which equals 79. We illustrate this as
        follows:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="35"
          src="/Static/images/Benj_9780307347466_epub_015_r1.jpg"
          width="298"
        />
      </div>
      <p className="indent">
        The above diagram is simply a way of representing the mental processes
        involved in arriving at an answer using our method. While you need to be
        able to read and understand such diagrams as you work your way through
        this book, our method does not require you to write down
        <em>anything</em> yourself.
      </p>
      <p className="indent">
        Now let’s try a calculation that requires you to carry a number:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="46"
          src="/Static/images/Benj_9780307347466_epub_016_r1.jpg"
          width="122"
        />
      </div>
      <p className="indent">
        Adding from left to right, you can simplify the problem by adding 67 +
        20 = 87; then 87 + 8 = 95. <a id="page14"></a>
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="35"
          src="/Static/images/Benj_9780307347466_epub_017_r1.jpg"
          width="298"
        />
      </div>
      <p className="indent">
        Now try one on your own, mentally calculating from left to right, and
        then check below to see how we did it:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="46"
          src="/Static/images/Benj_9780307347466_epub_018_r1.jpg"
          width="122"
        />
      </div>
      <p className="indent">
        How was that? You added 84 + 50 = 134 and added 134 + 7 = 141.
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="35"
          src="/Static/images/Benj_9780307347466_epub_019_r1.jpg"
          width="316"
        />
      </div>
      <p className="indent">
        If carrying numbers trips you up a bit, don’t worry about it. This is
        probably the first time you have ever made a systematic attempt at
        mental calculation, and if you’re like most people, it will take you
        time to get used to it. With practice, however, you will begin to see
        and hear these numbers in your mind, and carrying numbers when you add
        will come automatically. Try another problem for practice, again
        computing it in your mind first, then checking how we did it:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="46"
          src="/Static/images/Benj_9780307347466_epub_020_r1.jpg"
          width="122"
        />
      </div>
      <p className="indent">
        You should have added 68 + 40 = 108, and then 108 + 5 = 113, the final
        answer. Was that easier? If you would like to try your hand at more
        two-digit addition problems, check out the set of exercises below. (The
        answers and computations are at the end of the book.){" "}
        <a id="page15"></a>
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="206"
          src="/Static/images/Benj_9780307347466_epub_021_r1.jpg"
          width="528"
        />
      </div>
      <div className="border  py-8 px-4">
        <div className="m-auto w-full max-w-xl">
          <h1 className="text-3xl ">
            Unlimited Interactive Two-digit Exercise
          </h1>
          <p className="my-4 mb-7 text-sm ">
            You can keep practicing till your brain gets fried 😜
          </p>
          <div>
            <form
              onSubmit={(event) =>
                handleSubmit(
                  "add",
                  twoDigInputRef,
                  xTwoDigit,
                  yTwoDigit,
                  setIsTwoDigitCorrect,
                  event
                )
              }
            >
              <div className="flex gap-1 ">
                <div className="flex gap-1 py-1">
                  <p className="m-0">{xTwoDigit}</p>
                  <p className="m-0">+</p>
                  <p className="m-0">{yTwoDigit} </p>
                  <p className="m-0">=</p>
                </div>
                <div>
                  <input
                    type="text"
                    name="number"
                    className="border mb-4 py-1 px-2"
                    ref={twoDigInputRef}
                    id="twoDigitInput"
                    autoComplete="off"
                  />
                  <p
                    className={`text-xs m-0 sm:hidden mb-2 mt-[-.5rem] ${
                      isTwoDigitCorrect === false ? "text-red-500" : ""
                    }`}
                  >
                    {isTwoDigitCorrect == null
                      ? ""
                      : isTwoDigitCorrect == true
                      ? "Well done! Your answer is correct!"
                      : "Oops! That’s not quite right. Please try again."}
                  </p>
                  <div className="flex gap-1">
                    <button type="submit" className="border py-1 px-2 ">
                      Enter
                    </button>
                    {isTwoDigitCorrect ? (
                      <button
                        className="border py-1 px-2"
                        onClick={() =>
                          nextChallenge(
                            setNextTwoDigitChallengeKey,
                            twoDigInputRef,
                            setIsTwoDigitCorrect
                          )
                        }
                      >
                        {" "}
                        Next
                      </button>
                    ) : null}
                  </div>
                </div>
                <p
                  className={`text-xs m-0 hidden sm:block py-1 pl-4 ${
                    isTwoDigitCorrect === false ? "text-red-500" : ""
                  }`}
                >
                  {isTwoDigitCorrect == null
                    ? ""
                    : isTwoDigitCorrect == true
                    ? "Well done! Your answer is correct!"
                    : "Oops! That’s not quite right. Please try again."}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      <h3 className="section">
        <strong>Three-Digit Addition</strong>
      </h3>
      <p className="nonindent">
        The strategy for adding three-digit numbers is the same as for adding
        two-digit numbers: you add from left to right. After each step, you
        arrive at a new (and <em>simpler</em>) addition problem. Let’s try the
        following:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="46"
          src="/Static/images/Benj_9780307347466_epub_022_r1.jpg"
          width="192"
        />
      </div>
      <p className="nonindent">
        Starting with 538, we add 300, then add 20, then add 7. After adding 300
        (538 + 300 = 838), the problem becomes 838 + 27. After adding 20 (838 +
        20 = 858), the problem simplifies to 858 + 7 = 865. This thought process
        can be diagrammed as follows:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="32"
          src="/Static/images/Benj_9780307347466_epub_023_r1.jpg"
          width="494"
        />
      </div>
      <p className="indent">
        All mental addition problems can be done by this method. The goal is to
        keep simplifying the problem until you are just adding a one-digit
        number. Notice that 538 + 327 requires you to hold on to six digits in
        your head, whereas 838 + 27 and <a id="page16"></a>858 + 7 require only
        five and four digits, respectively.
        <em>As you simplify the problem, the problem gets easier!</em>
      </p>
      <p className="indent">
        Try the following addition problem in your mind before looking to see
        how we did it:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="46"
          src="/Static/images/Benj_9780307347466_epub_024_r1.jpg"
          width="192"
        />
      </div>
      <p className="indent">
        Did you reduce and simplify the problem by adding left to right? After
        adding the hundreds (623 + 100 = 723), you were left with 723 + 59. Next
        you should have added the tens (723 + 50 = 773), simplifying the problem
        to 773 + 9, which you then summed to get 782. Diagrammed, the problem
        looks like this:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="32"
          src="/Static/images/Benj_9780307347466_epub_025_r1.jpg"
          width="496"
        />
      </div>
      <p className="indent">
        When I do these problems mentally, I do not try to <em>see</em> the
        numbers in my mind—I try to <em>hear</em> them. I hear the problem 623 +
        159 as <em>six</em>{" "}
        <strong>
          <em>hundred</em>
        </strong>
        <em>twenty-three</em> plus <em>one</em>{" "}
        <strong>
          <em>hundred</em>
        </strong>
        <em>fifty-nine;</em> by emphasizing the word <em>hundred</em> to myself,
        I know where to begin adding. Six plus one equals seven, so my next
        problem is <em>seven hundred and</em>{" "}
        <strong>
          <em>twenty</em>
        </strong>
        <em>-three</em> plus{" "}
        <strong>
          <em>fifty</em>
        </strong>
        <em>-nine</em>, and so on. When first doing these problems, practice
        them out loud. Reinforcing yourself verbally will help you learn the
        mental method much more quickly.
      </p>
      <p className="indent">
        Three-digit addition problems really do not get much harder than the
        following:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="45"
          src="/Static/images/Benj_9780307347466_epub_026_r1.jpg"
          width="54"
        />
      </div>
      <p className="indent">
        <a id="page17"></a>Now look to see how we did it:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="32"
          src="/Static/images/Benj_9780307347466_epub_027_r1.jpg"
          width="470"
        />
      </div>
      <p className="indent">
        At each step I hear (not see) a “new” addition problem. In my mind the
        problem sounds like this:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="18"
          src="/Static/images/Benj_9780307347466_epub_028_r1.jpg"
          width="438"
        />
      </div>
      <p className="indent">
        Your mind-talk may not sound exactly like mine (indeed, you might “see”
        the numbers instead of “hear” them), but whatever it is you say or
        visualize to yourself, the point is to reinforce the numbers along the
        way so that you don’t forget where you are and have to start the
        addition problem over again.
      </p>
      <p className="indent">Let’s try another one for practice:</p>
      <div className="dis_img">
        <img
          alt=""
          height="46"
          src="/Static/images/Benj_9780307347466_epub_029_r1.jpg"
          width="192"
        />
      </div>
      <p className="indent">
        Do it in your mind first, then check our computation below:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="32"
          src="/Static/images/Benj_9780307347466_epub_030_r1.jpg"
          width="469"
        />
      </div>
      <p className="indent">
        This addition problem is a little more difficult than the last one since
        it requires you to carry numbers in all three steps. However, with this
        particular problem you have the option of using an alternative method. I
        am sure you will agree that it is a <a id="page18"></a>lot easier to add
        500 to 759 than it is to add 496, so try adding 500 and then subtracting
        the difference:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="104"
          src="/Static/images/Benj_9780307347466_epub_031_r1.jpg"
          width="360"
        />
      </div>
      <p className="indent">
        So far, you have consistently broken up the second number in any problem
        to add to the first. It really does not matter which number you choose
        to break up, but it is good to be consistent. That way, your mind will
        never have to waste time deciding which way to go. If the second number
        happens to be a lot simpler than the first, I sometimes switch them
        around, as in the following example:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="104"
          src="/Static/images/Benj_9780307347466_epub_032_r1.jpg"
          width="506"
        />
      </div>
      <p className="indent">
        Let’s finish up by adding three-digit to four-digit numbers. Since most
        human memory can hold only about seven or eight digits at a time, this
        is about as large a problem as you can handle without resorting to
        artificial memory devices, like fingers, calculators, or the mnemonics
        taught in
        <a className="hlink" href="Benj_9780307347466_epub_c07_r1.htm">
          Chapter 7
        </a>
        . In many addition problems that arise in practice, especially within
        multiplication problems, one or both of the numbers will end in 0, so we
        shall emphasize those types of problems. We begin with an easy one:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="45"
          src="/Static/images/Benj_9780307347466_epub_033_r1.jpg"
          width="63"
        />
      </div>
      <p className="indent">
        <a id="page19"></a>Since 27 <em>hundred</em> + 5 <em>hundred</em> is 32
        <em>hundred</em>, we simply attach the 67 to get 32 <em>hundred</em> and
        67, or 3267. The process is the same for the following problems:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="45"
          src="/Static/images/Benj_9780307347466_epub_034_r1.jpg"
          width="240"
        />
      </div>
      <p className="indent">
        Because 40 + 18 = 58, the first answer is 3258. For the second problem,
        since 40 + 72 exceeds 100, you know the answer will be 33 hundred and
        <em>something</em>. Because 40 + 72 = 112, the answer is 3312.
      </p>
      <p className="indent">
        These problems are easy because the (nonzero) digits overlap in only one
        place, and hence can be solved in a single step. Where digits overlap in
        two places, you require two steps. For instance:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="45"
          src="/Static/images/Benj_9780307347466_epub_035_r1.jpg"
          width="164"
        />
      </div>
      <p className="indent">
        This problem requires two steps, as diagrammed the following way:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="32"
          src="/Static/images/Benj_9780307347466_epub_036_r1.jpg"
          width="380"
        />
      </div>
      <p className="indent">
        Practice the following three-digit addition exercises, and then add some
        (pun intended!) of your own if you like until you are comfortable doing
        them mentally without having to look down at the page. (Answers can be
        found in the back of the book.) <a id="page20"></a>
      </p>
      <div className="textbox">
        <p className="textboxh">
          <strong>Carl Friedrich Gauss: Mathematical Prodigy</strong>
        </p>
        <p className="textbox">
          <span className="dropcaps">A</span> prodigy is a highly talented
          child, usually called precocious or gifted, and almost always ahead of
          his peers. The German mathematician Carl Friedrich Gauss (1777–1855)
          was one such child. He often boasted that he could calculate before he
          could speak. By the ripe old age of three, before he had been taught
          any arithmetic, he corrected his father’s payroll by declaring “the
          reckoning is wrong.” A further check of the numbers proved young Carl
          correct.
        </p>
        <p className="textbox1">
          As a ten-year-old student, Gauss was presented the following
          mathematical problem: What is the sum of numbers from I to 100? While
          his fellow students were frantically calculating with paper and
          pencil, Gauss immediately envisioned that if he spread out the numbers
          I through 50 from left to right, and the numbers 51 to 100 from right
          to left directly below the 1–50 numbers, each combination would add up
          to 101 (I + 100, 2 + 99, 3 + 98, …). Since there were fifty sums, the
          answer would be 101 × 50 = 5050.TO the astonishment of everyone,
          including the teacher, young Carl got the answer not only ahead of
          everyone else, but computed it entirely in his mind. He wrote out the
          answer on his slate, and flung it on the teacher’s desk with a defiant
          “There it lies.” The teacher was so impressed that he invested his own
          money to purchase the best available textbook on arithmetic and gave
          it to Gauss, stating, “He is beyond me, I can teach him nothing more.”
        </p>
        <p className="textbox1">
          Indeed, Gauss became the mathematics teacher of others, and eventually
          went on to become one of the greatest mathematicians in history, his
          theories still used today in the service of science. Gauss’s desire to
          better understand Nature through the language of mathematics was
          summed up in his motto, taken from Shakespeare’s <em>King</em>
          <em>Lear</em> (substituting “laws” for “law”): “Thou, nature, art my
          goddess; to thy laws/My services are bound.”
        </p>
      </div>
      <div className="dis_img1">
        <img
          alt=""
          height="105"
          src="/Static/images/Benj_9780307347466_epub_037_r1.jpg"
          width="519"
        />
      </div>
      <div className="dis_img1">
        <img
          alt=""
          height="146"
          src="/Static/images/Benj_9780307347466_epub_038_r1.jpg"
          width="526"
        />
      </div>
      <div className="border py-8 px-4">
        <div className="m-auto w-full max-w-xl">
          <h1 className="text-3xl">
            Unlimited Interactive Three-digit Exercise
          </h1>
          <p className="my-4 mb-7 text-sm ">
            Hmm, Another Brain frying session?
          </p>
          <div>
            <form
              onSubmit={(event) =>
                handleSubmit(
                  "add",
                  threeDigInputRef,
                  xThreeDigit,
                  yThreeDigit,
                  setIsThreeDigitCorrect,
                  event
                )
              }
            >
              <div className="flex gap-1 items-cen">
                <div className="flex gap-1">
                  <p className="m-0">{xThreeDigit}</p>
                  <p className="m-0">+</p>
                  <p className="m-0">{yThreeDigit} </p>
                  <p className="m-0">=</p>
                </div>
                <div>
                  <input
                    type="text"
                    name="number"
                    className="border mb-4 py-1 px-2"
                    ref={threeDigInputRef}
                    id="threeDigitInput"
                    autoComplete="off"
                  />
                  <p
                    className={`text-xs m-0 sm:hidden mb-2 mt-[-.5rem] ${
                      isThreeDigitCorrect === false ? "text-red-500" : ""
                    }`}
                  >
                    {isThreeDigitCorrect == null
                      ? ""
                      : isThreeDigitCorrect == true
                      ? "Well done! Your answer is correct!"
                      : "Oops! That’s not quite right. Please try again."}
                  </p>
                  <div className="flex gap-1">
                    <button type="submit" className="border py-1 px-2">
                      Enter
                    </button>
                    {isThreeDigitCorrect ? (
                      <button
                        onClick={() =>
                          nextChallenge(
                            setNextThreeDigitChallengeKey,
                            threeDigInputRef,
                            setIsThreeDigitCorrect
                          )
                        }
                      >
                        {" "}
                        Next
                      </button>
                    ) : null}
                  </div>
                </div>
                <p
                  className={`text-xs m-0 hidden sm:block py-1 pl-4 ${
                    isThreeDigitCorrect === false ? "text-red-500" : ""
                  }`}
                >
                  {isThreeDigitCorrect == null
                    ? ""
                    : isThreeDigitCorrect == true
                    ? "Well done! Your answer is correct!"
                    : "Oops! That’s not quite right. Please try again."}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <h2 className="section">
        <a id="page21"></a>
        <strong>LEFT-TO-RIGHT SUBTRACTION</strong>
      </h2>
      <p className="nonindent">
        For most of us, it is easier to add than to subtract. But if you
        continue to compute from left to right and to break down problems into
        simpler components, subtraction can become almost as easy as addition.
      </p>
      <h3 className="section">
        <strong>Two-Digit Subtraction</strong>
      </h3>
      <p className="nonindent">
        When subtracting two-digit numbers, your goal is to simplify the problem
        so that you are reduced to subtracting (or adding) a one-digit number.
        Let’s begin with a very simple subtraction problem:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="46"
          src="/Static/images/Benj_9780307347466_epub_039_r1.jpg"
          width="127"
        />
      </div>
      <p className="indent">
        After each step, you arrive at a new and easier subtraction problem.
        Here, we first subtract 20 (86 − 20 = 66) then we subtract 5 to reach
        the simpler subtraction problem 66–5 for your final answer of 61. The
        problem can be diagrammed this way:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="35"
          src="/Static/images/Benj_9780307347466_epub_040_r1.jpg"
          width="295"
        />
      </div>
      <p className="indent">
        <a id="page22"></a>Of course, subtraction problems are considerably
        easier when there is no borrowing (which occurs when a larger digit is
        being subtracted from a smaller one). But the good news is that “hard”
        subtraction problems can usually be turned into “easy” addition
        problems. For example:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="46"
          src="/Static/images/Benj_9780307347466_epub_041_r1.jpg"
          width="231"
        />
      </div>
      <p className="indent">
        There are two different ways to solve this problem mentally:
      </p>
      <div className="block">
        <p className="bl_hanging">1. First subtract 20, then subtract 9:</p>
        <div className="dis_img">
          <img
            alt=""
            height="35"
            src="/Static/images/Benj_9780307347466_epub_042_r1.jpg"
            width="298"
          />
        </div>
        <p className="bl_hanging">
          &#160;&#160;But for this problem, I would prefer the following
          strategy:
        </p>
        <p className="bl_hanging">2. First subtract 30, then add back 1:</p>
        <div className="dis_img">
          <img
            alt=""
            height="35"
            src="/Static/images/Benj_9780307347466_epub_043_r1.jpg"
            width="298"
          />
        </div>
      </div>
      <p className="indent">
        Here is the rule for deciding which method to use: If a two-digit
        subtraction problem would require borrowing, then round the second
        number up (to a multiple of ten). Subtract the rounded number, then add
        back the difference.
      </p>
      <p className="indent">
        For example, the problem 54 − 28 would require borrowing (since 8 is
        greater than 4), so round 28 up to 30, compute 54 − 30 = 24, then add
        back 2 to get 26 as your final answer:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="106"
          src="/Static/images/Benj_9780307347466_epub_044_r1.jpg"
          width="298"
        />
      </div>
      <p className="indent">
        <a id="page23"></a>Now try your hand (or head) at 81 − 37. Since 7 is
        greater than 1, we round 37 up to 40, subtract it from 81 (81 − 40 =
        41), then add back the difference of 3 to arrive at the final answer:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="32"
          src="/Static/images/Benj_9780307347466_epub_045_r1.jpg"
          width="298"
        />
      </div>
      <p className="indent">
        With just a little bit of practice, you will become comfortable working
        subtraction problems both ways. Just use the rule above to decide which
        method will work best.
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="206"
          src="/Static/images/Benj_9780307347466_epub_046_r1.jpg"
          width="528"
        />
      </div>
      <div className="border py-8 px-4">
        <div className="m-auto w-full max-w-xl">
          <h1 className="text-3xl text-center">
            Unlimited Interactive Two-digit Subtraction Exercise
          </h1>
          <p className="my-4 text-sm ">Let&apos;s give it all </p>
          <div>
            <form
              onSubmit={(event) =>
                handleSubmit(
                  "subtract",
                  twoDigInputRefMin,
                  xTwoDigitMin,
                  yTwoDigitMin,
                  setIsTwoDigitMinCorrect,
                  event
                )
              }
            >
              <div className="flex gap-1 ">
                <div className="flex gap-1">
                  {xTwoDigitMin > yTwoDigitMin ? (
                    <>
                      {" "}
                      <p className="m-0">{xTwoDigitMin}</p>
                      <p className="m-0">-</p>
                      <p className="m-0">{yTwoDigitMin} </p>{" "}
                    </>
                  ) : (
                    <>
                      {" "}
                      <p className="m-0">{yTwoDigitMin}</p>
                      <p className="m-0">-</p>
                      <p className="m-0">{xTwoDigitMin} </p>
                    </>
                  )}
                  <p className="m-0">=</p>
                </div>
                <div>
                  <input
                    type="text"
                    name="number"
                    className="border mb-4"
                    ref={twoDigInputRefMin}
                    id="twoDigitInputMin"
                    autoComplete="off"
                  />
                  <p
                    className={`text-xs m-0 sm:hidden mb-2 mt-[-.5rem] ${
                      isTwoDigitMinCorrect === false ? "text-red-500" : ""
                    }`}
                  >
                    {isTwoDigitMinCorrect == null
                      ? ""
                      : isTwoDigitMinCorrect == true
                      ? "Well done! Your answer is correct!"
                      : "Oops! That’s not quite right. Please try again."}
                  </p>
                  <div className="flex gap-1">
                    <button type="submit" className="border py-1 px-2">
                      Enter
                    </button>
                    {isTwoDigitMinCorrect ? (
                      <button
                        className="border py-1 px-2"
                        onClick={() =>
                          nextChallenge(
                            setNextTwoDigitMinChallengeKey,
                            twoDigInputRefMin,
                            setIsTwoDigitMinCorrect
                          )
                        }
                      >
                        {" "}
                        Next
                      </button>
                    ) : null}
                  </div>
                </div>
                <p
                  className={`text-xs m-0 hidden sm:block py-1 pl-4 ${
                    isTwoDigitMinCorrect === false ? "text-red-500" : ""
                  }`}
                >
                  {isTwoDigitMinCorrect == null
                    ? ""
                    : isTwoDigitMinCorrect == true
                    ? "Well done! Your answer is correct!"
                    : "Oops! That’s not quite right. Please try again."}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <h3 className="section">
        <strong>Three-Digit Subtraction</strong>
      </h3>
      <p className="nonindent">
        Now let’s try a three-digit subtraction problem:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="46"
          src="/Static/images/Benj_9780307347466_epub_047_r1.jpg"
          width="192"
        />
      </div>
      <p className="indent">
        This particular problem does not require you to borrow any numbers
        (since every digit of the second number is less than the digit above
        it), so you should not find it too hard. Simply subtract one digit at a
        time, simplifying as you go. <a id="page24"></a>
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="32"
          src="/Static/images/Benj_9780307347466_epub_048_r1.jpg"
          width="493"
        />
      </div>
      <p className="indent">
        Now let’s look at a three-digit subtraction problem that requires you to
        borrow a number:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="46"
          src="/Static/images/Benj_9780307347466_epub_049_r1.jpg"
          width="143"
        />
      </div>
      <p className="indent">
        At first glance this probably looks like a pretty tough problem, but if
        you first subtract 747 − 600 = 147, then add back 2, you reach your
        final answer of 147 + 2 = 149.
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="32"
          src="/Static/images/Benj_9780307347466_epub_050_r1.jpg"
          width="340"
        />
      </div>
      <p className="indent">Now try one yourself:</p>
      <div className="dis_img">
        <img
          alt=""
          height="45"
          src="/Static/images/Benj_9780307347466_epub_051_r1.jpg"
          width="54"
        />
      </div>
      <p className="indent">
        Did you first subtract 700 from 853? If so, did you get 853 − 700 = 153?
        Since you subtracted by 8 too much, did you add back 8 to reach 161, the
        final answer?
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="32"
          src="/Static/images/Benj_9780307347466_epub_052_r1.jpg"
          width="338"
        />
      </div>
      <p className="indent">
        Now, I admit we have been making life easier for you by subtracting
        numbers that were close to a multiple of 100. (Did you notice?) But what
        about other problems, like:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="46"
          src="/Static/images/Benj_9780307347466_epub_053_r1.jpg"
          width="311"
        />
      </div>
      <p className="indent">
        <a id="page25"></a>If you subtract one digit at a time, simplifying as
        you go, your sequence will look like this:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="35"
          src="/Static/images/Benj_9780307347466_epub_054_r1.jpg"
          width="496"
        />
      </div>
      <p className="indent">What happens if you round up to 500?</p>
      <div className="dis_img">
        <img
          alt=""
          height="35"
          src="/Static/images/Benj_9780307347466_epub_055_r1.jpg"
          width="327"
        />
      </div>
      <p className="indent">
        Subtracting 500 is easy: 725 − 500 = 225. But you have subtracted too
        much. The trick is to figure out exactly how much too much.
      </p>
      <p className="indent">
        At first glance, the answer is far from obvious. To find it, you need to
        know how far 468 is from 500. The answer can be found by using
        “complements,” a nifty technique that will make many three-digit
        subtraction problems a lot easier to do.
      </p>
      <h3 className="section">
        <strong>Using Complements (You’re Welcome!)</strong>
      </h3>
      <p className="nonindent">
        Quick, how far from 100 are each of these numbers?
      </p>
      <p className="center">
        <strong>57 &#160;68 &#160;49 &#160;21 &#160;79</strong>
      </p>
      <p className="indent">Here are the answers:</p>
      <div className="dis_img">
        <img
          alt=""
          height="70"
          src="/Static/images/Benj_9780307347466_epub_056_r1.jpg"
          width="456"
        />
      </div>
      <p className="indent">
        Notice that for each pair of numbers that add to 100, the first digits
        (on the left) add to 9 and the last digits (on the right) add
        <a id="page26"></a>to 10. We say that 43 is the complement of 57, 32 is
        the complement of 68, and so on.
      </p>
      <p className="indent">
        Now you find the complements of these two-digit numbers:
      </p>
      <p className="center">
        <strong>
          37&#160;&#160;59&#160;&#160;93&#160;&#160;44&#160;&#160;08
        </strong>
      </p>
      <p className="indent">
        To find the complement of 37, first figure out what you need to add to 3
        in order to get 9. (The answer is 6.) Then figure out what you need to
        add to 7 to get 10. (The answer is 3.) Hence, 63 is the complement of
        37.
      </p>
      <p className="indent">
        The other complements are 41, 7, 56, 92. Notice that, like everything
        else you do as a mathemagician, the complements are determined from left
        to right. As we have seen, the first digits add to 9, and the second
        digits add to 10. (An exception occurs in numbers ending in 0—e.g., 30 +
        70 = 100—but those complements are simple!)
      </p>
      <p className="indent">
        What do complements have to do with mental subtraction? Well, they allow
        you to convert difficult subtraction problems into straightforward
        addition problems. Let’s consider the last subtraction problem that gave
        us some trouble:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="46"
          src="/Static/images/Benj_9780307347466_epub_057_r1.jpg"
          width="154"
        />
      </div>
      <p className="indent">
        To begin, you subtracted 500 instead of 468 to arrive at 225 (725 − 500
        = 225). But then, having subtracted too much, you needed to figure out
        how much to add back. Using complements gives you the answer in a flash.
        How far is 468 from 500? The same distance as 68 is from 100. If you
        find the complement of 68 the way we have shown you, you will arrive at
        32. Add 32 to 225, and you will arrive at 257, your final answer.{" "}
        <a id="page27"></a>
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="35"
          src="/Static/images/Benj_9780307347466_epub_058_r1.jpg"
          width="351"
        />
      </div>
      <p className="indent">Try another three-digit subtraction problem:</p>
      <div className="dis_img">
        <img
          alt=""
          height="46"
          src="/Static/images/Benj_9780307347466_epub_059_r1.jpg"
          width="154"
        />
      </div>
      <p className="indent">
        To compute this mentally, subtract 300 from 821 to arrive at 521, then
        add back the complement of 59, which is 41, to arrive at 562, our final
        answer. The procedure looks like this:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="32"
          src="/Static/images/Benj_9780307347466_epub_060_r1.jpg"
          width="351"
        />
      </div>
      <p className="indent">Here is another problem for you to try:</p>
      <div className="dis_img">
        <img
          alt=""
          height="46"
          src="/Static/images/Benj_9780307347466_epub_061_r1.jpg"
          width="154"
        />
      </div>
      <p className="indent">
        Check your answer and the procedure for solving the problem below:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="31"
          src="/Static/images/Benj_9780307347466_epub_062_r1.jpg"
          width="495"
        />
      </div>
      <p className="indent">
        Subtracting a three-digit number from a four-digit number is not much
        harder, as the next example illustrates:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="46"
          src="/Static/images/Benj_9780307347466_epub_063_r1.jpg"
          width="164"
        />
      </div>
      <p className="indent">
        <a id="page28"></a>By rounding up, you subtract 600 from 1246, leaving
        646, then add back the complement of 79, which is 21. Your final answer
        is 646 + 21 = 667.
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="32"
          src="/Static/images/Benj_9780307347466_epub_064_r1.jpg"
          width="359"
        />
      </div>
      <p className="indent">
        Try the three-digit subtraction exercises below, and then create more of
        your own for additional (or should that be subtractional?) practice.
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="306"
          src="/Static/images/Benj_9780307347466_epub_065_r1.jpg"
          width="525"
        />
      </div>
      <div className="border py-8 px-4">
        <div className="m-auto w-full max-w-xl">
          <h1 className="text-3xl text-center">
            Unlimited Interactive Three-digit Subtraction Exercise
          </h1>
          <p className="my-4 text-sm ">Hmm, Another session?</p>
          <div>
            <form
              // onSubmit={handleThreeDigitMinSubmit}
              onSubmit={(event) =>
                handleSubmit(
                  "subtract",
                  threeDigInputRefMin,
                  xThreeDigitMin,
                  yThreeDigitMin,
                  setIsThreeDigitMinCorrect,
                  event
                )
              }
            >
              <div className="flex gap-1 ">
                <div className="flex gap-1">
                  <p className="m-0">{xThreeDigitMin}</p>
                  <p className="m-0">-</p>
                  <p className="m-0">{yThreeDigitMin} </p>
                  <p className="m-0">=</p>
                </div>
                <div>
                  <input
                    type="text"
                    name="number"
                    className="border mb-4"
                    ref={threeDigInputRefMin}
                    id="threeDigitInput"
                    autoComplete="off"
                  />
                  <p
                    className={`text-xs m-0 sm:hidden mb-2 mt-[-.5rem] ${
                      isThreeDigitMinCorrect === false ? "text-red-500" : ""
                    }`}
                  >
                    {isThreeDigitMinCorrect == null
                      ? ""
                      : isThreeDigitMinCorrect == true
                      ? "Well done! Your answer is correct!"
                      : "Oops! That’s not quite right. Please try again."}
                  </p>
                  <div className="flex gap-1">
                    <button type="submit" className="border py-1 px-2">
                      Enter
                    </button>
                    {isThreeDigitMinCorrect ? (
                      <button
                        className="border py-1 px-2"
                        onClick={() =>
                          nextChallenge(
                            setNextThreeDigitMinChallengeKey,
                            threeDigInputRefMin,
                            setIsThreeDigitCorrect
                          )
                        }
                      >
                        {" "}
                        Next
                      </button>
                    ) : null}
                  </div>
                </div>
                <p
                  className={`text-xs m-0 hidden sm:block py-1 pl-4 ${
                    isThreeDigitMinCorrect === false ? "text-red-500" : ""
                  }`}
                >
                  {isThreeDigitMinCorrect == null
                    ? ""
                    : isThreeDigitMinCorrect == true
                    ? "Well done! Your answer is correct!"
                    : "Oops! That’s not quite right. Please try again."}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoCh;
