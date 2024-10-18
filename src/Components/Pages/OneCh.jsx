import { useEffect, useState } from "react";
import "./../../Benj_9780307347466_epub_css_r1.css";
import "./OneCh.css";
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
  const [sqrInp, setSqrInput] = useState(0)
  const [sqrCorrectness , setSqrCorrectness] = useState(null)
  const [nextSqrClng , setNextSqrClng  ] = useState(0)
  const sqrArr = [15, 25, 35, 45, 55, 65, 75, 85, 95];
  const randomSqr = Math.floor(Math.random() * sqrArr.length);
  const specSqr = sqrArr[randomSqr];
  // console.log(specSqr);
  useEffect(() => {
    SetTwoSquare(specSqr);
  }, [nextSqrClng]);
  const handleSetSqrInput = (e)=>{
  setSqrInput(e.target.value);
  }
  const handleSquareSum = (event) => {
    event.preventDefault();
   const isSqrTrue= twoSquare * twoSquare == sqrInp ;
   setSqrCorrectness(isSqrTrue)
  console.log(twoSquare , twoSquare * twoSquare , sqrInp , isSqrTrue);
  };
 
  const handleNextSqrClng = ()=>{
    setNextSqrClng((prevKey) => prevKey + 1);
    setSqrCorrectness(null)
    setSqrInput(0)
  }
 
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
      <h2 className="section">
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
          src="public/images/Benj_9780307347466_epub_001_r1.jpg"
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
          src="public/images/Benj_9780307347466_epub_002_r1.jpg"
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
          src="public/images/Benj_9780307347466_epub_003_r1.jpg"
          width="41"
        />
      </div>
      <p className="indent">
        Okay, take a moment to practice your new skill a few times, then start
        showing off. You will be amazed at the reaction you get. (Whether or not
        you decide to reveal the secret is up to you!)
      </p>
      <h1>Practice</h1>
      <div className="equationContainer">
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
          <p>
            {correctness == null
              ? ""
              : correctness == true
              ? "correct"
              : "false"}
          </p>
          {/* 4 it is gonna take the input number and save to the memory */}
          <div>
            <button type="submit">Enter</button>
          </div>
          {correctness === true ? (
            <button type="button" onClick={handleNextChallenge}>
              Next Challenge
            </button>
          ) : null}
        </form>
      </div>
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
      <h2 className="section">
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
          src="public/images/Benj_9780307347466_epub_004_r1.jpg"
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
          src="public/images/Benj_9780307347466_epub_005_r1.jpg"
          width="120"
        />
      </div>
      <h1>Practice</h1>
      <div className="flex">
        <p>{twoSquare} =</p>
        <form onSubmit={handleSquareSum}>
          <input onChange={handleSetSqrInput} type="number" value={sqrInp} id="" />
          <button type="submit">Enter</button>
          <p>
            {sqrCorrectness == null
              ? ""
              : sqrCorrectness == true
              ? "correct"
              : "false"}
          </p>
        </form>
          <button onClick={handleNextSqrClng}> Next</button>
      </div>
      <p className="indent">
        We can use a similar trick when multiplying two-digit numbers with the
        same first digit but different last digits. Here is the problem:
      </p>
      <p className="center">
        <a id="page6"></a>
        <strong>43 × 47</strong>
      </p>
      <p className="indent">
        Do you see how these numbers have the same first digit (4) and last
        digits that sum to 10 (3 + 7)? Whenever that happens, the answer begins
        by multiplying the first digit (4) by the next higher digit (5), then
        ends by multiplying the last digits (3 and 7). Since 4 × 5 = 20 and 3 ×
        7 = 21, the answer is 2021.
      </p>
      <p className="indent">
        Here is one more example: 62 × 68. Since 6 × 7 = 42 and 2 × 8 = 16, the
        answer is 4216. That’s all there is to it!
      </p>
    </div>
  );
};

export default OneCh;
