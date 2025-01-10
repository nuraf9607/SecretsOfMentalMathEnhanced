import { useEffect, useState } from "react";
import "./../../Benj_9780307347466_epub_css_r1.css";
import "./ZeroCh.css";

const OneCh = () => {
  const [inputValue, setInputValue] = useState(0);
  const [number, setNumber] = useState(0); // 1: The intial value of Random number
  const [correctness, setCorrectness] = useState(null);
  const [challengeKey, setChallengeKey] = useState(0);
  let x = Math.floor(Math.random() * 90) + 10; // 2 it will create the number
  let y = 11;
  const handleInputUpt = (event) => {
    setInputValue(event.target.value);
  };
  useEffect(() => {
    setNumber(x); // 3: the number will be set to the useState so it doesn't forget
  }, [challengeKey]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const compare = number * 11 == inputValue ? true : false; // it will compare with the final answer.
    if (compare) {
      setCorrectness(true);
    } else {
      setCorrectness(false);
    }

    console.log(inputValue, compare);
  };
  const handleNextChallenge = () => {
    setChallengeKey((prevKey) => prevKey + 1); // Update challengeKey to trigger useEffect
    setInputValue(0); // Reset input value for the new challenge
    setCorrectness(null);
  };

  // ░S░q░u░a░r░e░ ░n░u░m░b░e░r░
  const [twoSquare, SetTwoSquare] = useState(0);
  const [sqrInp, setSqrInput] = useState(0);
  const [sqrCorrectness, setSqrCorrectness] = useState(null);
  const [nextSqrClng, setNextSqrClng] = useState(0);
  const sqrArr = [15, 25, 35, 45, 55, 65, 75, 85, 95];
  const randomSqr = Math.floor(Math.random() * sqrArr.length);
  const specSqr = sqrArr[randomSqr];
  // console.log(specSqr);
  useEffect(() => {
    SetTwoSquare(specSqr);
  }, [nextSqrClng]);
  const handleSetSqrInput = (e) => {
    setSqrInput(e.target.value);
  };
  const handleSquareSum = (event) => {
    event.preventDefault();
    const isSqrTrue = twoSquare * twoSquare == sqrInp;
    setSqrCorrectness(isSqrTrue);
    console.log(twoSquare, twoSquare * twoSquare, sqrInp, isSqrTrue);
  };

  const handleNextSqrClng = () => {
    setNextSqrClng((prevKey) => prevKey + 1);
    setSqrCorrectness(null);
    setSqrInput(0);
  };

  return (
    <div className="oneChBody">
      <h1 className="chapter" id="c01">
        <a id="page1"></a>Chapter 0
      </h1>
      <h1 className="subchapter">
        Quick Tricks:
        <br />
        Easy (and Impressive) Calculations
      </h1>
      <p className="nonindent">
        <span className="big">I</span>n the pages that follow, you will learn to
        do math in your head faster than you ever thought possible. After
        practicing the methods in this book for just a little while, your
        ability to work with numbers will increase dramatically. With even more
        practice, you will be able to perform many calculations faster than
        someone using a calculator. But in this chapter, my goal is to teach you
        some easy yet impressive calculations you can learn to do immediately.
        We’ll save some of the more serious stuff for later.
      </p>
      <h2 className="section" id="elevenMultiply">
        <strong>INSTANT MULTIPLICATION</strong>
      </h2>
      <p className="nonindent">
        Let’s begin with one of my favorite feats of mental math—how to
        multiply, in your head, any two-digit number by eleven. It’s very easy
        once you know the secret. Consider the problem:
      </p>
      <p className="center">
        <strong>32×11</strong>
      </p>
      <p className="indent">
        To solve this problem, simply add the digits, 3 + 2 ={" "}
        <span className="underline">5</span>, put the 5 between the 3 and the 2,
        and there is your answer:
      </p>
      <p className="center">
        <a id="page2"></a>
        <strong>
          3<span className="underline">5</span>2
        </strong>
      </p>
      <p className="indent">What could be easier? Now you try:</p>
      <p className="center">
        <strong>53 ×</strong> 11
      </p>
      <p className="indent">Since 5 + 3 = 8, your answer is simply</p>
      <p className="center">
        <strong>583</strong>
      </p>
      <p className="indent">
        One more. Without looking at the answer or writing anything down, what
        is
      </p>
      <p className="center">
        <strong>81×11?</strong>
      </p>
      <p className="indent">Did you get 891? Congratulations!</p>
      <p className="indent">
        Now before you get too excited, I have shown you only half of what you
        need to know. Suppose the problem is
      </p>
      <p className="center">
        <strong>85 × 11</strong>
      </p>
      <p className="indent">
        Although 8 + 5 = <span className="underline">13</span>, the answer is
        NOT 8<span className="underline">13</span>5!
      </p>
      <p className="indent">
        As before, the <span className="underline">3</span> goes in between the
        numbers, but the <span className="underline">1</span> needs to be added
        to the 8 to get the correct answer:
      </p>
      <p className="center">
        <strong>
          9<span className="underline">3</span>5
        </strong>
      </p>
      <p className="indent">Think of the problem this way:</p>
      <div className="dis_img">
        <img
          alt=""
          height="70"
          src="/Static/images/Benj_9780307347466_epub_001_r1.jpg"
          width="32"
        />
      </div>
      <p className="indent">
        <a id="page3"></a>Here is another example. Try 57 × 11.
      </p>
      <p className="indent">Since 5 + 7 = 12, the answer is</p>
      <div className="dis_img">
        <img
          alt=""
          height="71"
          src="/Static/images/Benj_9780307347466_epub_002_r1.jpg"
          width="32"
        />
      </div>
      <p className="indent">
        Okay, now it’s your turn. As fast as you can, what is
      </p>
      <p className="center">
        <strong>77 × 11?</strong>
      </p>
      <p className="indent">
        If you got the answer 847, then give yourself a pat on the back. You are
        on your way to becoming a mathemagician.
      </p>
      <p className="indent">
        Now, I know from experience that if you tell a friend or teacher that
        you can multiply, in your head, any two-digit number by eleven, it won’t
        be long before they ask you to do 99 × 11. Let’s do that one now, so we
        are ready for it.
      </p>
      <p className="indent">Since 9 + 9 = 18, the answer is:</p>
      <div className="dis_img">
        <img
          alt=""
          height="71"
          src="/Static/images/Benj_9780307347466_epub_003_r1.jpg"
          width="41"
        />
      </div>
      <p className="indent">
        Okay, take a moment to practice your new skill a few times, then start
        showing off. You will be amazed at the reaction you get. (Whether or not
        you decide to reveal the secret is up to you!)
      </p>

      <p className="extract">
        Welcome back. At this point, you probably have a few questions, such as:
      </p>
      <p className="extract">
        <strong>
          <em>
            “Can we use this method for multiplying three-digit numbers (or
            larger) by eleven?”
          </em>
        </strong>
      </p>
      <p className="indent">
        <a id="page4"></a>Absolutely. For instance, for the problem 314 × 11,
        the answer still begins with 3 and ends with 4. Since 3 + 1 ={" "}
        <span className="underline">4</span>, and 1 + 4 ={" "}
        <span className="underline">5</span>, the answer is 3
        <span className="underline">45</span>4. But we’ll save larger problems
        like this for later.
      </p>
      <p className="indent">
        More practically, you are probably saying to yourself,
      </p>
      <p className="extract">
        <strong>
          <em>
            “Well, this is fine for multiplying by elevens, but what about
            larger numbers? How do I multiply numbers by twelve, or thirteen, or
            thirty-six?”
          </em>
        </strong>
      </p>
      <p className="indent">
        My answer to that is, <em>Patience!</em> That’s what the rest of the
        book is all about. In{" "}
        <a className="hlink" href="Benj_9780307347466_epub_c02_r1.htm">
          Chapters 2
        </a>
        ,{" "}
        <a className="hlink" href="Benj_9780307347466_epub_c03_r1.htm">
          3
        </a>
        ,{" "}
        <a className="hlink" href="Benj_9780307347466_epub_c06_r1.htm">
          6
        </a>
        , and{" "}
        <a className="hlink" href="Benj_9780307347466_epub_c08_r1.htm">
          8
        </a>
        , you will learn methods for multiplying together just about any two
        numbers. Better still, you don’t have to memorize special rules for
        every number. Just a handful of techniques is all that it takes to
        multiply numbers in your head, quickly and easily.
      </p>
      <h2 className="section" id="squareSection">
        <strong>SQUARING AND MORE</strong>
      </h2>
      <p className="nonindent">Here is another quick trick.</p>
      <p className="indent">
        As you probably know, the square of a number is a number multiplied by
        itself. For example, the square of 7 is 7 × 7 = 49. Later, I will teach
        you a simple method that will enable you to easily calculate the square
        of any two-digit or three-digit (or higher) number. That method is
        especially simple when the number ends in 5, so let’s do that trick now.
      </p>
      <p className="indent">
        To square a two-digit number that ends in 5, you need to remember only
        two things.
      </p>
      <div className="hangings">
        <p className="hanging">
          1. The answer <em>begins</em> by multiplying the first digit by the
          next higher digit.
        </p>
        <p className="hanging">
          2. The answer <em>ends</em> in 25.
        </p>
      </div>
      <p className="indent">
        <a id="page5"></a>For example, to square the number 35, we simply
        multiply the first digit (3) by the next higher digit (4), then attach
        25. Since 3 × 4 = 12, the answer is 1225. Therefore, 35 × 35 = 1225. Our
        steps can be illustrated this way:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="128"
          src="/Static/images/Benj_9780307347466_epub_004_r1.jpg"
          width="120"
        />
      </div>
      <p className="indent">
        How about the square of 85? Since 8 × 9 = 72, we immediately get 85 × 85
        = 7225.
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="128"
          src="/Static/images/Benj_9780307347466_epub_005_r1.jpg"
          width="120"
        />
      </div>

      <p className="indent">
        We can use a similar trick when multiplying two-digit numbers with the
        same first digit, and second digits that sum to 10. The answer begins
        the same way that it did before (the first digit multiplied by the next
        higher digit), followed by the product of the second digits. For
        example, let’s try 83 × 87. (Both numbers begin with 8, and the last
        digits sum to 3 + 7 = 10.) Since 8 × 9 = 72, and 3 × 7 = 21, the answer
        is 7221.
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="127"
          src="/Static/images/Benj_9780307347466_epub_006_r1.jpg"
          width="120"
        />
      </div>
      <p className="indent">
        <a id="page6"></a>Similarly, 84 × 86 = 7224.
      </p>
      <p className="indent">Now it’s your turn. Try</p>
      <p className="center">
        <strong>26 × 24</strong>
      </p>
      <p className="indent">
        How does the answer begin? With 2 × 3 = 6. How does it end? With 6 × 4 =
        24. Thus 26 × 24 = 624.
      </p>
      <p className="indent">
        Remember that to use this method, the first digits have to be the same,
        and the last digits must sum to 10. Thus, we can use this method to
        instantly determine that
      </p>
      <p className="center">
        <strong>31 × 39 = 1209</strong>
        <br />
        <strong>32 × 38 = 1216</strong>
        <br />
        <strong>33 × 37 = 1221</strong>
        <br />
        <strong>34 × 36 = 1224</strong>
        <br />
        <strong>35 × 35 = 1225</strong>
      </p>
      <p className="indent">You may ask,</p>
      <p className="extract">
        <strong>
          <em>
            “What if the last digits do not sum to ten? Can we use this method
            to multiply twenty-two and twenty-three?”
          </em>
        </strong>
      </p>
      <p className="indent">
        Well, not yet. But in
        <a className="hlink" href="Benj_9780307347466_epub_c08_r1.htm">
          Chapter 8
        </a>
        , I will show you an easy way to do problems like this using the
        close-together method. (For 22 × 23, you would do 20 × 25 plus 2 × 3, to
        get 500 + 6 = 506, but I’m getting ahead of myself!) Not only will you
        learn how to use these methods, but you will understand why these
        methods work, too.
      </p>
      <p className="extract">
        <strong>
          <em>
            “Are there any tricks for doing mental addition and subtraction?”
          </em>
        </strong>
      </p>
      <p className="indent">
        Definitely, and that is what the next chapter is all about. If I were
        forced to summarize my method in three words, I would say, “Left to
        right.” Here is a sneak preview.
      </p>
      <p className="indent">
        <a id="page7"></a>Consider the subtraction problem
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="43"
          src="/Static/images/Benj_9780307347466_epub_007_r1.jpg"
          width="58"
        />
      </div>
      <p className="indent">
        Most people would not like to do this problem in their head (or even on
        paper!), but let’s simplify it. Instead of subtracting 587, subtract
        600. Since 1200 − 600 = 600, we have that
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="67"
          src="/Static/images/Benj_9780307347466_epub_008_r1.jpg"
          width="58"
        />
      </div>
      <p className="indent">
        But we have subtracted 13 too much. (We will explain how to quickly
        determine the 13 in
        <a className="hlink" href="Benj_9780307347466_epub_c01_r1.htm">
          Chapter 1
        </a>
        .) Thus, our painful-looking subtraction problem becomes the easy
        addition problem
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="67"
          src="/Static/images/Benj_9780307347466_epub_009_r1.jpg"
          width="48"
        />
      </div>
      <p className="indent">
        which is not too hard to calculate in your head (especially from left to
        right). Thus, 1241 − 587 = 654.
      </p>
      <p className="indent">
        Using a little bit of mathematical magic, described in
        <a className="hlink" href="Benj_9780307347466_epub_c09_r1.htm">
          Chapter 9
        </a>
        , you will be able to instantly compute the sum of the ten numbers
        below.
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="272"
          src="/Static/images/Benj_9780307347466_epub_010_r1.jpg"
          width="54"
        />
      </div>
      <p className="indent">
        <a id="page8"></a>Although I won’t reveal the magical secret right now,
        here is a hint. The answer, 935, has appeared elsewhere in this chapter.
        More tricks for doing math on paper will be found in
        <a className="hlink" href="Benj_9780307347466_epub_c06_r1.htm">
          Chapter 6
        </a>
        . Furthermore, you will be able to quickly give the quotient of the last
        two numbers:
      </p>
      <p className="center">
        <strong>359</strong> ÷ <strong>222 = 1.61 (first three digits)</strong>
      </p>
      <p className="indent">
        We will have much more to say about division (including decimals and
        fractions) in
        <a className="hlink" href="Benj_9780307347466_epub_c04_r1.htm">
          Chapter 4
        </a>
        .
      </p>
      <h2 className="section">
        <strong>MORE PRACTICAL TIPS</strong>
      </h2>
      <p className="nonindent">
        Here’s a quick tip for calculating tips. Suppose your bill at a
        restaurant came to $42, and you wanted to leave a 15% tip. First, we
        calculate 10% of $42, which is $4.20. If we cut that number in half, we
        get $2.10, which is 5% of the bill. Adding these numbers together gives
        us $6.30, which is exactly 15% of the bill. We will discuss strategies
        for calculating sales tax, discounts, compound interest, and other
        practical items in
        <a className="hlink" href="Benj_9780307347466_epub_c05_r1.htm">
          Chapter 5
        </a>
        , along with strategies that you can use for quick mental estimation
        when an exact answer is not required.
      </p>
      <h2 className="section">
        <strong>IMPROVE YOUR MEMORY</strong>
      </h2>
      <p className="nonindent">
        In
        <a className="hlink" href="Benj_9780307347466_epub_c07_r1.htm">
          Chapter 7
        </a>
        , you will learn a useful technique for memorizing numbers. This will be
        handy in and out of the classroom. Using an easy-to-learn system for
        turning numbers into words, you will be able to quickly and easily
        memorize any numbers: dates, phone numbers, whatever you want.
      </p>
      <p className="indent">
        Speaking of dates, how would you like to be able to figure out the day
        of the week of any date? You can use this to figure <a id="page9"></a>
        out birth dates, historical dates, future appointments, and so on. I
        will show you this in more detail later, but here is a simple way to
        figure out the day of January 1 for any year in the twenty-first
        century. First, familiarize yourself with the following table.
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="37"
          src="/Static/images/Benj_9780307347466_epub_011_r1.jpg"
          width="526"
        />
      </div>
      <p className="indent">
        For instance, let’s determine the day of the week of January 1, 2030.
        Take the last two digits of the year, and consider it to be your bill at
        a restaurant. (In this case, your bill would be $30.) Now add a 25% tip,
        but keep the change. (You can compute this by cutting the bill in half
        twice, and ignoring any change. Half of $30 is $15. Then half of $15 is
        $7.50. Keeping the change results in a $7 tip.) Hence your bill plus tip
        amounts to $37. To figure out the day of the week, subtract the biggest
        multiple of 7 (0, 7, 14, 21, 28, 35, 42, 49, …) from your total, and
        that will tell you the day of the week. In this case, 37 − 35 = 2, and
        so January 1, 2030, will occur on 2’s day, namely Tuesday:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="128"
          src="/Static/images/Benj_9780307347466_epub_012_r1.jpg"
          width="248"
        />
      </div>
      <p className="nonindent">How about January 1, 2043:</p>
      <div className="dis_img">
        <img
          alt=""
          height="128"
          src="/Static/images/Benj_9780307347466_epub_013_r1.jpg"
          width="260"
        />
      </div>
      <p className="nonindent">
        <a id="page10"></a>
        <strong>Exception:</strong> If the year is a leap year, remove $1 from
        your tip, then proceed as before. For example, for January 1, 2032, a
        25% tip of $32 would be $8. Removing one dollar gives a total of 32 + 7
        = 39. Subtracting the largest multiple of 7 gives us 39 − 35 = 4. So
        January 1, 2032, will be on 4’s day, namely Thursday. For more details
        that will allow you to compute the day of the week of any date in
        history, see
        <a className="hlink" href="Benj_9780307347466_epub_c09_r1.htm">
          Chapter 9
        </a>
        . (In fact, it’s perfectly okay to read that chapter first!)
      </p>
      <p className="indent">I know what you are wondering now:</p>
      <p className="extract">
        <strong>
          <em>“Why didn’t they teach this to us in school?”</em>
        </strong>
      </p>
      <p className="nonindent">
        I’m afraid that there are some questions that even I cannot answer. Are
        you ready to learn more magical math? Well, what are we waiting for?
        Let’s go!
      </p>
      <div className="practiceSection">
        <p className="practiceSection__header">Practice</p>
        <div className="elevenDigitMultiplyContainer">
          <p className="elevenDigitMultiply__header">Multiply</p>
          <div className="elevenDigitMultiply__practice">
            <p>{number} </p>
            <p>x</p>
            <p>{y}</p>
            <p>=</p>
            {/* <p>{number * y}</p> */}
            <form onSubmit={handleSubmit}>
              <input
                type="number"
                value={inputValue}
                onChange={handleInputUpt}
                name="number"
                id=""
              />

              {/* 4 it is gonna take the input number and save to the memory */}

              <div className="nxtBtn">
                <button type="submit">Enter</button>

                {correctness === true ? (
                  <button type="button" onClick={handleNextChallenge}>
                    Next Challenge
                  </button>
                ) : null}
              </div>
            </form>
            <p>
              {correctness == null
                ? ""
                : correctness == true
                ? "Well done! Your answer is correct!"
                : "Oops! That’s not quite right. Please try again."}
            </p>
          </div>
          <p className="materialReference">
            For Reference: Click <a href="#elevenMultiply">here</a>{" "}
          </p>
        </div>
        <div className="squarePracticeContainer">
          <p className="squarePractice__header"> Find the square</p>
          <div className="squarePractice__practice">
            <p>{twoSquare} =</p>
            <form onSubmit={handleSquareSum}>
              <input
                onChange={handleSetSqrInput}
                type="number"
                value={sqrInp}
                id=""
              />
              <div className="nxtBtn">
                <button type="submit">Enter</button>
                {sqrCorrectness ? (
                  <button onClick={handleNextSqrClng}> Next</button>
                ) : null}
              </div>
            </form>
            <p>
              {sqrCorrectness == null
                ? ""
                : sqrCorrectness == true
                ? "Well done! Your answer is correct!"
                : "Oops! That’s not quite right. Please try again."}
            </p>
          </div>
        </div>
        <p className="materialReference">
          For Reference: Click <a href="#squareSection">here</a>
        </p>
      </div>
    </div>
  );
};

export default OneCh;
