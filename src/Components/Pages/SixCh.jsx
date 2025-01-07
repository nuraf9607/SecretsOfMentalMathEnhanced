const SixCh = () => {
  return (
    <div>
      <h1 className="chapter" id="c07">
        <a id="page131"></a>Chapter 6
      </h1>
      <h1 className="subchapter">
        Math for the Board:
        <br />
        Pencil-and-Paper Math
      </h1>
      <p className="nonindent">
        <span className="big">I</span>n the Introduction to this book I discussed
        the many benefits you will get from being able to do mental
        calculations. In this chapter I present some methods for speeding up
        pencil-and-paper calculations as well. Since calculators have replaced
        much of the need for pencil-and-paper arithmetic in most practical
        situations, I’ve chosen to concentrate on the lost art of calculating
        square roots and the flashy criss-cross method for multiplying large
        numbers. Since these are, admittedly, mostly for mental gymnastics and
        not for some practical application, I will first touch on addition and
        subtraction and show you just a couple of little tricks for speeding up
        the process and for checking your answers. These techniques <em>can</em>{" "}
        be used in daily life, as you’ll see.
      </p>
      <p className="indent">
        If you are eager to get to the more challenging multiplication problems,
        you can skip this chapter and go directly to{" "}
        <a className="hlink" href="Benj_9780307347466_epub_c07_r1.htm">
          Chapter 7
        </a>
        , which is critical for mastering the big problems in{" "}
        <a className="hlink" href="Benj_9780307347466_epub_c08_r1.htm">
          Chapter 8
        </a>
        . If you need a break and just want to have some fun, then I recommend
        going through this chapter—you’ll enjoy playing with pencil and paper
        once again.
      </p>
      <h2 className="section">
        <a id="page132"></a>
        <strong>COLUMNS OF NUMBERS</strong>
      </h2>
      <p className="nonindent">
        Adding long columns of numbers is just the sort of problem you might run
        into in business or while figuring out your personal finances. Add the
        following column of numbers as you normally would and then check to see
        how I do it.
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="179"
          src="/images/Benj_9780307347466_epub_257_r1.jpg"
          width="59"
        />
      </div>
      <p className="indent">
        When I have pencil and paper at my disposal, I add the numbers from top
        to bottom and from right to left, just as we learned to do in school.
        With practice, you can do these problems in your head as fast or faster
        than you can with a calculator. As I sum the digits, the only numbers
        that I “hear” are the partial sums. That is, when I sum the first
        (rightmost) column 8 + 4 + 0 + 7 + 7 + 5, I hear{" "}
        <em>8&#160;…&#160;12&#160;…&#160;19&#160;…&#160;26&#160;…&#160;31</em>.
        Then I put down the 1, carry the 3, and proceed as usual. The next
        column would then sound like{" "}
        <em>
          3&#160;…&#160;5&#160;…&#160;13&#160;…&#160;15&#160;…&#160;22&#160;…&#160;23&#160;…&#160;25
        </em>
        . Once I have my final answer, I write it down, then check my
        computation by adding the numbers from bottom to top and, I hope, arrive
        at the same answer.
      </p>
      <p className="indent">
        For instance, the first column would be summed, from bottom to top, as 5
        + 7 + 7 + 0 + 4 + 8 (which in my mind sounds like{" "}
        <em>5&#160;…&#160;12&#160;…&#160;19&#160;…&#160;23&#160;…&#160;31</em>).
        Then I mentally carry the 3, and add 3 + 2 + 1 + 7 + 2 + 8 + 2, and so
        on. By adding the <a id="page133"></a>numbers in a different order, you
        are less likely to make the same mistake twice. Of course, if the
        answers differ, then at least one of the calculations must be wrong.
      </p>
      <h2 className="section">
        <strong>MOD SUMS</strong>
      </h2>
      <p className="nonindent">
        If I’m not sure about my answer, I sometimes check my solution by a
        method I call mod sums (because it is based on the elegant mathematics
        of modular arithmetic). This method also goes by the names of digital
        roots and casting out nines. I admit this method is not as practical,
        but it’s easy to use.
      </p>
      <p className="indent">
        With the mod sums method, you sum the digits of each number until you
        are left with a single digit. For example, to compute the mod sum of
        4328, add 4 + 3 + 2 + 8 = 17. Then add the digits of 17 to get 1 + 7 =
        8. Hence the mod sum of 4328 is 8. For the previous problem the mod sums
        of each number are computed as follows:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="343"
          src="/images/Benj_9780307347466_epub_258_r1.jpg"
          width="384"
        />
      </div>
      <p className="indent">
        <a id="page134"></a>As illustrated above, the next step is to add all
        the mod sums together (8 + 2 + 8 + 1 + 5 + 5). This yields 29, which
        sums to 11, which in turn sums to 2. Note that the mod sum of 8651, your
        original total of the original digits, is also 2. This is not a
        coincidence! If you have computed the answer and the mod sums correctly,
        your final mod sums must be the same. If they are different, you have
        definitely made a mistake somewhere: there is about a 1 in 9 chance that
        the mod sums will match accidentally. If there is a mistake, then this
        method will detect it 8 times out of 9.
      </p>
      <p className="indent">
        The mod sum method is more commonly known to mathematicians and
        accountants as casting out nines because the mod sum of a number happens
        to be equal to the remainder obtained when the number is divided by 9.
        In the case of the answer above—8651—the mod sum was 2. If you divide
        8651 by 9, the answer is 961 with a remainder of 2. In other words, if
        you cast out 9 from 8651 a total of 961 times, you’ll have a remainder
        of 2. There’s one small exception to this. Recall that the sum of the
        digits of any multiple of 9 is also a multiple of 9. Thus, if a number
        is a multiple of 9, it will have a mod sum of 9, even though it has a
        remainder of 0.
      </p>
      <h2 className="section">
        <strong>SUBTRACTING ON PAPER</strong>
      </h2>
      <p className="nonindent">
        You can’t, of course, subtract columns of numbers the same way you add
        them. Rather, you subtract them number by number, which means that all
        subtraction problems involve just two numbers. Once again, with pencil
        and paper at our disposal, it is easier to subtract from right to left.
        To check your answer, just add the answer to the second number. If you
        are correct, then you should get the top number.
      </p>
      <p className="indent">
        If you want, you can also use mod sums to check your{" "}
        <a id="page135"></a>answer. The key is to subtract the mod sums you
        arrive at and then compare that number to the mod sum of your answer:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="152"
          src="/images/Benj_9780307347466_epub_259_r1.jpg"
          width="200"
        />
      </div>
      <p className="indent">
        There’s one extra twist. If the difference in the mod sums is a negative
        number or 0, add 9 to it. For instance:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="234"
          src="/images/Benj_9780307347466_epub_260_r1.jpg"
          width="274"
        />
      </div>
      <h2 className="section">
        <strong>PENCIL-AND-PAPER SQUARE ROOTS</strong>
      </h2>
      <p className="nonindent">
        With the advent of pocket calculators, the pencil-and-paper method of
        calculating square roots has practically become a lost art. You’ve
        already seen how to estimate square roots mentally. Now I’ll show you
        how to do it exactly, using pencil and paper.
      </p>
      <p className="indent">
        Remember how in guesstimating square roots you calculated the square
        root of nineteen? Let’s look at that problem again, this time using a
        method that will give you the exact square root. <a id="page136"></a>
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="237"
          src="/images/Benj_9780307347466_epub_261_r1.jpg"
          width="200"
        />
      </div>
      <p className="indent">
        I will describe the general method that fits all cases, and illustrate
        it with the above example.
      </p>
      <p className="extract">
        <strong>Step 1</strong>. If the number of digits to the left of the
        decimal point is one, three, five, seven, or any odd number of digits,
        the first digit of the answer (or quotient) will be the largest number
        whose square is less than the <em>first</em> digit of the original
        number. If the number of digits to the left of the decimal point is two,
        four, six, or any even number of digits, the first digit of the quotient
        will be the largest number whose square is less than the first{" "}
        <em>two</em> digits of the dividend. In this case, 19 is a two-digit
        number, so the first digit of the quotient is the largest number whose
        square is less than 19. That number is 4. Write the answer above either
        the first digit of the dividend (if odd) or the second digit of the
        dividend (if even).
      </p>
      <p className="extract">
        <strong>Step 2</strong>. Subtract the square of the number in step 1,
        then bring down two more digits. Since 4<sup className="frac">2</sup> = 16,
        we subtract 19 − 16 = 3. We bring down two 0s, leaving 300 as the
        current remainder.
      </p>
      <p className="extract">
        <strong>Step 3</strong>. Double the current quotient (ignoring any
        decimal point), and put a blank space in following it. Here 4 × 2 = 8.
        Put down 8_ x_ to the left of the current remainder, in this case 300.
      </p>
      <p className="extract">
        <a id="page137"></a>
        <strong>Step 4</strong>. The next digit of the quotient will be the
        largest number that can be put in both blanks so that the resulting
        multiplication problem is less than or equal to the current remainder.
        In this case the number is 3, because 8<span className="underline">3</span>{" "}
        × <span className="underline">3</span> = 249, whereas 84 × 4 = 336, which is
        too high. Write this number above the second digit of the next two
        numbers; in this case the 3 would go above the second 0. We now have a
        quotient of 4.3.
      </p>
      <p className="extract">
        <strong>Step 5</strong>. If you want more digits, subtract the product
        from the remainder (i.e., 300 − 249 = 51), and bring down the next two
        digits; in this case 51 turns into 5100, which becomes the current
        remainder. Now repeat steps 3 and 4.
      </p>
      <p className="indent">
        To get the third digit of the square root, double the quotient, again
        ignoring the decimal point (i.e., 43 × 2 = 86). Place 86_ x_ to the left
        of 5100. The number 5 gives us 86<span className="underline">5</span> ×{" "}
        <span className="underline">5</span> = 4325, the largest product below 5100.
        The 5 goes above the next two numbers, in this case two more 0s. We now
        have a quotient of 4.35. For even more digits, repeat the process as
        we’ve done in the example.
      </p>
      <p className="indent">
        Here’s an example of an odd number of digits before the decimal point:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="237"
          src="/images/Benj_9780307347466_epub_262_r1.jpg"
          width="186"
        />
      </div>
      <p className="indent">
        <a id="page138"></a>Next, we’ll calculate the square root of a
        four-digit number. In this case—as with two-digit numbers—we consider
        the first two digits of the problem to determine the first digit of the
        square root:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="237"
          src="/images/Benj_9780307347466_epub_263_r1.jpg"
          width="212"
        />
      </div>
      <p className="indent">
        Finally, if the number for which you are calculating the square root is
        a perfect square, you will know it as soon as you end up with a
        remainder of 0 and nothing to bring down. For example:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="151"
          src="/images/Benj_9780307347466_epub_264_r1.jpg"
          width="126"
        />
      </div>
      <h2 className="section">
        <strong>PENCIL-AND-PAPER MULTIPLICATION</strong>
      </h2>
      <p className="nonindent">
        For pencil-and-paper multiplication I use the{" "}
        <em>criss-cross method</em>, which enables me to write down the entire
        answer on one line without ever writing any partial results! This is one
        of the most <a id="page139"></a>impressive displays of mathemagics when
        you have pencil and paper at your disposal. Many lightning calculators
        in the past earned their reputations with this method. They would be
        given two large numbers and write down the answer almost
        instantaneously. The criss-cross method is best learned by example.
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="69"
          src="/images/Benj_9780307347466_epub_265_r1.jpg"
          width="58"
        />
      </div>
      <p className="extract">
        <strong>Step 1</strong>. First, multiply 4 × 7 to yield 2
        <span className="underline">8</span>, write down the 8, and mentally carry
        the 2 to the next computation, below.
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="69"
          src="/images/Benj_9780307347466_epub_266_r1.jpg"
          width="92"
        />
      </div>
      <p className="extract">
        <strong>Step 2</strong>. Following the diagram, add 2 + (4 × 4) + (3 ×
        7) = 3<span className="underline">9</span>, write down the 9, and carry the
        3 to the final computation, below.
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="69"
          src="/images/Benj_9780307347466_epub_267_r1.jpg"
          width="92"
        />
      </div>
      <p className="extract">
        <strong>Step 3</strong>. End by adding 3 + (3 × 4) ={" "}
        <span className="underline">15</span> and writing down 15 to arrive at your
        final answer.
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="68"
          src="/images/Benj_9780307347466_epub_268_r1.jpg"
          width="92"
        />
      </div>
      <p className="indent">
        <a id="page140"></a>You have now written the answer:{" "}
        <span className="underline">1598</span>.
      </p>
      <p className="indent">
        Let’s solve another 2-by-2 multiplication problem using the criss-cross
        method:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="69"
          src="/images/Benj_9780307347466_epub_269_r1.jpg"
          width="56"
        />
      </div>
      <p className="indent">The steps and diagrams appear as follows:</p>
      <p className="extract">
        <strong>Step 1</strong>. 5 × 3 = 15
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="68"
          src="/images/Benj_9780307347466_epub_270_r1.jpg"
          width="83"
        />
      </div>
      <p className="extract">
        <strong>Step 2</strong>. 1 + (5 × 8) + (6 × 3) = 5
        <span className="underline">9</span>
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="69"
          src="/images/Benj_9780307347466_epub_271_r1.jpg"
          width="83"
        />
      </div>
      <p className="extract">
        <strong>Step 3</strong>. 5 + (6 × 8) = 53
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="68"
          src="/images/Benj_9780307347466_epub_272_r1.jpg"
          width="83"
        />
      </div>
      <p className="indent">
        Answer: <span className="underline">5395</span>
      </p>
      <p className="indent">
        The criss-cross method gets slightly more complicated with 3-by-3
        problems.
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="74"
          src="/images/Benj_9780307347466_epub_273_r1.jpg"
          width="83"
        />
      </div>
      <p className="indent">We proceed as suggested by our pattern below:</p>
      <p className="extract">
        <strong>Step 1</strong>. 2 × 3 = 6
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="69"
          src="/images/Benj_9780307347466_epub_274_r1.jpg"
          width="130"
        />
      </div>
      <p className="extract">
        <a id="page141"></a>
        <strong>Step 2</strong>. (2 × 5) + (6 × 3) = 2
        <span className="underline">8</span>
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="69"
          src="/images/Benj_9780307347466_epub_275_r1.jpg"
          width="130"
        />
      </div>
      <p className="extract">
        <strong>Step 3</strong>. 2 + (2 × 8) + (7 × 3) + (6 × 5) = 6
        <span className="underline">9</span>
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="68"
          src="/images/Benj_9780307347466_epub_276_r1.jpg"
          width="130"
        />
      </div>
      <p className="extract">
        <strong>Step 4</strong>. 6 + (6 × 8) + (7 × 5) = 8
        <span className="underline">9</span>
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="69"
          src="/images/Benj_9780307347466_epub_277_r1.jpg"
          width="130"
        />
      </div>
      <p className="extract">
        <strong>Step 5</strong>. 8 + (8 × 7) = <span className="underline">64</span>
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="68"
          src="/images/Benj_9780307347466_epub_278_r1.jpg"
          width="130"
        />
      </div>
      <p className="indent">
        Answer: <span className="underline">649,986</span>
      </p>
      <p className="indent">
        Notice that the number of multiplications at each step is 1, 2, 3, 2,
        and 1 respectively. The mathematics underlying the criss-cross method is
        nothing more that the distributive law. For instance, 853 × 762 = (800 +
        50 + 3) × (700 + 60 + 2) = (3 × 2) + [(5 × 2) + (3 × 6)] × 10 + [(8 × 2)
        + (5 × 6) + (3 × 7)] × 100 + [(8 × 6) + (5 × 7)] × 1000 + (8 × 7) ×
        10,000, which are precisely the calculations of the criss-cross method.
      </p>
      <p className="indent">
        You can check your answer with the mod sum method by multiplying the mod
        sums of the two numbers and computing the resulting number’s mod sum.
        Compare this number to the mod sum of the answer. If your answer is
        correct, they must match. For example: <a id="page142"></a>
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="179"
          src="/images/Benj_9780307347466_epub_279_r1.jpg"
          width="153"
        />
      </div>
      <p className="indent">
        If the mod sums don’t match, you made a mistake. This method will detect
        mistakes, on average, about 8 times out of 9.
      </p>
      <p className="indent">
        In the case of 3-by-2 multiplication problems, the procedure is the same
        except you treat the hundreds digit of the second number as a 0:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="74"
          src="/images/Benj_9780307347466_epub_280_r1.jpg"
          width="64"
        />
      </div>
      <p className="extract">
        <strong>Step 1</strong>. 7 × 6 = 4<span className="underline">2</span>
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="69"
          src="/images/Benj_9780307347466_epub_281_r1.jpg"
          width="128"
        />
      </div>
      <p className="extract">
        <strong>Step 2</strong>. 4 + (7 × 4) + (3 × 6) = 5
        <span className="underline">0</span>
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="68"
          src="/images/Benj_9780307347466_epub_282_r1.jpg"
          width="128"
        />
      </div>
      <p className="extract">
        <strong>Step 3</strong>. 5 + (7 × 8) + (0 × 6) + (3 × 4) = 7
        <span className="underline">3</span>
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="68"
          src="/images/Benj_9780307347466_epub_283_r1.jpg"
          width="128"
        />
      </div>
      <p className="extract">
        <strong>Step 4</strong>. 7 + (3 × 8) + (0 × 4) = 3
        <span className="underline">1</span>
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="69"
          src="/images/Benj_9780307347466_epub_284_r1.jpg"
          width="128"
        />
      </div>
      <p className="indent">
        <a id="page143"></a>
        <strong>Step 5</strong>. 3 + (0 × 8) = <span className="underline">3</span>
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="68"
          src="/images/Benj_9780307347466_epub_285_r1.jpg"
          width="129"
        />
      </div>
      <p className="indent">
        Answer: <span className="underline">31,302</span>
      </p>
      <p className="indent">
        Of course, you would normally just ignore the multiplication by zero, in
        practice.
      </p>
      <p className="indent">
        You can use the criss-cross to do any size multiplication problem. To
        answer the 5-by-5 problem below will require nine steps. The number of
        multiplications in each step is 1, 2, 3, 4, 5, 4, 3, 2, 1, for
        twenty-five multiplications altogether.
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="72"
          src="/images/Benj_9780307347466_epub_286_r1.jpg"
          width="136"
        />
      </div>
      <p className="extract">
        <strong>Step 1</strong>. 9 × 7= 6<span className="underline">3</span>
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="69"
          src="/images/Benj_9780307347466_epub_287_r1.jpg"
          width="219"
        />
      </div>
      <p className="extract">
        <strong>Step 2</strong>. 6 + (9 × 6) + (4 × 7) = 8
        <span className="underline">8</span>
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="69"
          src="/images/Benj_9780307347466_epub_288_r1.jpg"
          width="219"
        />
      </div>
      <p className="extract">
        <strong>Step 3</strong>. 8 + (9 × 8) + (0 × 7) + (4 × 6) = 10
        <span className="underline">4</span>
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="69"
          src="/images/Benj_9780307347466_epub_289_r1.jpg"
          width="219"
        />
      </div>
      <p className="indent">
        <a id="page144"></a>
        <strong>Step 4</strong>. 10 + (9 × 2) + (2 × 7) + (4 × 8) + (0 × 6) = 7
        <span className="underline">4</span>
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="69"
          src="/images/Benj_9780307347466_epub_290_r1.jpg"
          width="219"
        />
      </div>
      <p className="extract">
        <strong>Step 5</strong>. 7 + (9 × 4) + (5 × 7) + (4 × 2) + (2 × 6) + (0
        × 8) = 9<span className="underline">8</span>
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="69"
          src="/images/Benj_9780307347466_epub_291_r1.jpg"
          width="219"
        />
      </div>
      <p className="extract">
        <strong>Step 6</strong>. 9 + (4 × 4) + (5 × 6) + (0 × 2) + (2 × 8) = 7
        <span className="underline">1</span>
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="68"
          src="/images/Benj_9780307347466_epub_292_r1.jpg"
          width="219"
        />
      </div>
      <p className="extract">
        <strong>Step 7</strong>. 7 + (0 × 4) + (5 × 8) + (2 × 2) = 5
        <span className="underline">1</span>
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="69"
          src="/images/Benj_9780307347466_epub_293_r1.jpg"
          width="219"
        />
      </div>
      <p className="extract">
        <strong>Step 8</strong>. 5 + (2 × 4) + (5 × 2) = 2
        <span className="underline">3</span>
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="68"
          src="/images/Benj_9780307347466_epub_294_r1.jpg"
          width="219"
        />
      </div>
      <p className="extract">
        <strong>Step 9</strong>. (5 × 4) + 2 = <span className="underline">22</span>
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="68"
          src="/images/Benj_9780307347466_epub_295_r1.jpg"
          width="219"
        />
      </div>
      <p className="indent">
        <a id="page145"></a>Answer: <span className="underline">2,231,184,483</span>
      </p>
      <p className="indent">
        You can check your answer by using the mod sums method.
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="178"
          src="/images/Benj_9780307347466_epub_296_r1.jpg"
          width="219"
        />
      </div>
      <h2 className="section">
        <strong>CASTING OUT ELEVENS</strong>
      </h2>
      <p className="nonindent">
        To double-check your answer another way, you can use the method known as
        casting out elevens. It’s similar to casting out nines, except you
        reduce the numbers by alternately subtracting and adding the digits from
        right to left, ignoring any decimal point. If the result is negative,
        then add eleven to it. (It may be tempting to do the addition and
        subtraction from left to right, as you do with mod sums, but in this
        case you must do it from right to left for it to work.) For example:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="69"
          src="/images/Benj_9780307347466_epub_297_r1.jpg"
          width="502"
        />
      </div>
      <p className="indent">The same method works for subtraction problems:</p>
      <div className="dis_img">
        <img
          alt=""
          height="123"
          src="/images/Benj_9780307347466_epub_298_r1.jpg"
          width="388"
        />
      </div>
      <div className="textbox">
        <p className="textboxh">
          <a id="page146"></a>
          <strong>Shakuntala Devi: That’s Incalculable!</strong>
        </p>
        <p className="textbox">
          <span className="dropcaps">I</span>n 1976 the <em>New York Times</em>{" "}
          reported that an Indian woman named Shakuntala Devi (b. 1939) added
          25,842 + 111,201,721 + 370,247,830 + 55,511,315, and then multiplied
          that sum by 9,878, for a correct total of 5,559,369,456,432, all in
          less than twenty seconds. Hard to believe, though this uneducated
          daughter of impoverished parents has made a name for herself in the
          United States and Europe as a lightning calculator.
        </p>
        <p className="textbox1">
          Unfortunately, most of Devi’s truly amazing feats not done by obvious
          “tricks of the trade” are poorly documented. Her greatest claimed
          accomplishment—the timed multiplication of two thirteen-digit numbers
          on paper—has appeared in the <em>Guinness Book of World Records</em>{" "}
          as an example of a “Human Computer.” The time of the calculation,
          however, is questionable at best. Devi, a master of the criss-cross
          method, reportedly multiplied 7,686,369,774,870 × 2,465,099,745,799,
          numbers randomly generated at the computer department of Imperial
          College, London, on June 18, 1980. Her correct answer of
          18,947,668,177,995,426,773,730 was allegedly generated in an
          incredible twenty seconds. <em>Guinness</em> offers this disclaimer:
          “Some eminent mathematical writers have questioned the conditions
          under which this was apparently achieved and predict that it would be
          impossible for her to replicate such a feat under highly rigorous
          surveillance.” Since she had to calculate 169 multiplication problems
          and 167 addition problems, for a total of 336 operations, she would
          have had to do each calculation in under a tenth of a second, with no
          mistakes, taking the time to write down all 26 digits of the answer.
          Reaction time alone makes this record truly in the category of “that’s
          incalculable!”
        </p>
        <p className="textbox1">
          Despite this, Devi has proven her abilities doing rapid calculation
          and has even written her own book on the subject.
        </p>
      </div>
      <p className="indent">
        <a id="page147"></a>It even works with multiplication:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="179"
          src="/images/Benj_9780307347466_epub_299_r1.jpg"
          width="171"
        />
      </div>
      <p className="indent">
        If the numbers disagree, you made a mistake somewhere. But if they
        match, it’s still possible for a mistake to exist. On average, this
        method will detect an error 10 times out of 11. Thus a mistake has a 1
        in 11 chance of sneaking past the elevens check, a 1 in 9 chance of
        sneaking past the nines check, and only a 1 in 99 chance of being
        undetected if both checks are used. For more information about this and
        other fascinating mathemagical topics, I would encourage you to read any
        of Martin Gardner’s recreational math books.
      </p>
      <p className="indent">
        You are now ready for the ultimate pencil-and-paper multiplication
        problem in the book, a 10-by-10! This has no practical value whatsoever
        except for showing off! (And personally I think multiplying five-digit
        numbers is impressive enough since the answer will be at the capacity of
        most calculators.) We present it here just to prove that it can be done.
        The criss-crosses follow the same basic pattern as that in the 5-by-5
        problem. There will be nineteen computation steps and at the tenth step
        there will be ten criss-crosses! Here you go:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="45"
          src="/images/Benj_9780307347466_epub_300_r1.jpg"
          width="144"
        />
      </div>
      <p className="indent">
        <a id="page148"></a>Here’s how we do it:
      </p>
      <div className="block">
        <p className="bl_hanginga">
          <strong>
            <em>Step 1</em>
          </strong>
          .&#160;&#160;&#160; 6 × 1=<span className="underline">6</span>
        </p>
        <p className="bl_hanginga">
          <strong>
            <em>Step 2</em>
          </strong>
          .&#160;&#160;&#160; (6 × 5) + (1 × 1) ={" "}
          <span className="underline">31</span>
        </p>
        <p className="bl_hanginga">
          <strong>
            <em>Step 3</em>
          </strong>
          .&#160;&#160;&#160; 3 + (6 × 4) + (2 × 1) + (1 × 5) ={" "}
          <span className="underline">34</span>
        </p>
        <p className="bl_hanginga">
          <strong>
            <em>Step 4</em>
          </strong>
          .&#160;&#160;&#160; 3 + (6 × 9) + (5 × 1) + (1 × 4) + (2 × 5) ={" "}
          <span className="underline">76</span>
        </p>
        <p className="bl_hanginga">
          <strong>
            <em>Step 5</em>
          </strong>
          .&#160;&#160;&#160; 7 + (6 × 2) + (7 × 1) + (1 × 9) + (5 × 5) + (2 ×
          4) = <span className="underline">68</span>
        </p>
        <p className="bl_hanginga">
          <strong>
            <em>Step 6</em>
          </strong>
          .&#160;&#160;&#160; 6 + (6 × 8) + (5 × 1) + (1 × 2) + (7 × 5) + (2 ×
          9) + (5 × 4) = 13<span className="underline">4</span>
        </p>
        <p className="bl_hanginga">
          <strong>
            <em>Step 7</em>
          </strong>
          .&#160;&#160;&#160; 13 + (6 × 6) + (5 × 1) + (1 × 8) + (5 × 5) + (2 ×
          2) + (7 × 4) + (5 × 9) = 16<span className="underline">4</span>
        </p>
        <p className="bl_hanginga">
          <strong>
            <em>Step 8</em>
          </strong>
          .&#160;&#160;&#160; 16 + (6 × 6) + (2 × 1) + (1 × 6) + (5 × 5) + (2 ×
          8) + (5 × 4) + (5 × 2) + (7 × 9) = 19<span className="underline">4</span>
        </p>
        <p className="bl_hanginga">
          <strong>
            <em>Step 9</em>
          </strong>
          .&#160;&#160;&#160; 19 + (6 × 7) + (4 × 1) + (1 × 6) + (2 × 5) + (2 ×
          6) + (5 × 4) + (5 × 8) + (5 × 9) + (7 × 2) = 21
          <span className="underline">2</span>
        </p>
        <p className="bl_hanginga">
          <strong>
            <em>Step 10</em>
          </strong>
          .&#160; 21 + (6 × 2) + (4 × 1) + (1 × 7) + (4 × 5) + (2 × 6) + (2 × 4)
          + (5 × 6) + (5 × 9) + (7 × 8) + (5 × 2) = 22
          <span className="underline">5</span>
        </p>
        <p className="bl_hanginga">
          <strong>
            <em>Step 11</em>
          </strong>
          .&#160; 22 + (1 × 2) + (4 × 5) + (2 × 7) + (4 × 4) + (5 × 6) + (2 × 9)
          + (7 × 6) + (5 × 2) + (5 × 8) = 21<span className="underline">4</span>
        </p>
        <p className="bl_hanginga">
          <strong>
            <em>Step 12</em>
          </strong>
          .&#160; 21 + (2 × 2) + (4 × 4) + (5 × 7) + (4 × 9) + (7 × 6) + (2 × 2)
          + (5 × 6) + (5 × 8) = 22<span className="underline">8</span>
        </p>
        <p className="bl_hanginga">
          <strong>
            <em>Step 13</em>
          </strong>
          .&#160; 22 + (5 × 2) + (4 × 9) + (7 × 7) + (4 × 2) + (5 × 6) + (2 × 8)
          + (5 × 6) = 20<span className="underline">1</span>
        </p>
        <p className="bl_hanginga">
          <strong>
            <em>Step 14</em>
          </strong>
          .&#160; 20 + (7 × 2) + (4 × 2) + (5 × 7) + (4 × 8) + (5 × 6) + (2 × 6)
          = 15<span className="underline">1</span>
        </p>
        <p className="bl_hanginga">
          <strong>
            <em>Step 15</em>
          </strong>
          .&#160; 15 + (5 × 2) + (4 × 8) + (5 × 7) + (4 × 6) + (2 × 6) = 12
          <span className="underline">8</span>
        </p>
        <p className="bl_hanginga">
          <strong>
            <em>Step 16</em>
          </strong>
          .&#160; 12 + (5 × 2) + (4 × 6) + (2 × 7) + (4 × 6) = 8
          <span className="underline">4</span>
        </p>
        <p className="bl_hanginga">
          <strong>
            <em>Step 17</em>
          </strong>
          .&#160; 8 + (2 × 2) + (4 × 6) + (4 × 7) = 6
          <span className="underline">4</span>
        </p>
        <p className="bl_hanginga">
          <strong>
            <em>Step 18</em>
          </strong>
          .&#160; 6 + (4 × 2) + (4 × 7) = 4<span className="underline">2</span>
        </p>
        <p className="bl_hanginga">
          <strong>
            <em>Step 19</em>
          </strong>
          .&#160; 4 + (4 × 2) = <span className="underline">12</span>
        </p>
      </div>
      <p className="indent">
        <a id="page149"></a>If you were able to negotiate this extremely
        difficult problem successfully the first time through, you are on the
        verge of graduating from apprentice to master mathemagician!
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="72"
          src="/images/Benj_9780307347466_epub_301_r1.jpg"
          width="315"
        />
      </div>
      <p className="center">
        <strong>PENCIL-AND-PAPER MATHEMATICS EXERCISES</strong>
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="25"
          src="/images/Benj_9780307347466_epub_302_r1.jpg"
          width="287"
        />
      </div>
      <p className="nonindent">
        Sum the following column of numbers, checking your answer by reading the
        column from bottom to top, and then by the mod sums method. If the two
        mod sums do not match, recheck your addition:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="182"
          src="/images/Benj_9780307347466_epub_303_r1.jpg"
          width="79"
        />
      </div>
      <p className="indent">Sum this column of dollars and cents:</p>
      <div className="dis_img">
        <img
          alt=""
          height="155"
          src="/images/Benj_9780307347466_epub_304_r1.jpg"
          width="105"
        />
        <a id="page150"></a>
      </div>
      <div className="dis_img">
        <img
          alt=""
          height="25"
          src="/images/Benj_9780307347466_epub_305_r1.jpg"
          width="298"
        />
      </div>
      <p className="nonindent">
        Subtract the following numbers, using mod sums to check your answer and
        then by adding the bottom two numbers to get the top number:
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="45"
          src="/images/Benj_9780307347466_epub_306_r1.jpg"
          width="525"
        />
      </div>
      <div className="dis_img">
        <img
          alt=""
          height="25"
          src="/images/Benj_9780307347466_epub_307_r1.jpg"
          width="352"
        />
      </div>
      <p className="nonindent">
        For the following numbers, compute the exact square root using the
        doubling and dividing technique.
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="82"
          src="/images/Benj_9780307347466_epub_308_r1.jpg"
          width="410"
        />
      </div>
      <p className="nonindent">
        To wrap up this exercise session, use the criss-cross method to compute
        exact multiplication problems of any size. Place the answer below the
        problems on one line, from right to left. Check your answers using mod
        sums.
      </p>
      <div className="dis_img">
        <img
          alt=""
          height="146"
          src="/images/Benj_9780307347466_epub_309_r1.jpg"
          width="399"
        />
      </div>
    </div>
  );
};

export default SixCh;
